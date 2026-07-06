import {
  FAIXAS_INSS, FAIXAS_IRRF, REDUTOR_IRRF,
  DEDUCAO_DEPENDENTE_IRRF, TETO_INSS,
  AVISO_PREVIO_BASE_DIAS, AVISO_PREVIO_ACRESCIMO_POR_ANO, AVISO_PREVIO_MAXIMO_DIAS,
  ALIQUOTA_FGTS, MULTA_FGTS_SEM_JUSTA_CAUSA, MULTA_FGTS_ACORDO_MUTUO,
} from '@/data/tabelas-2026';

// ── INSS ────────────────────────────────────────────────────────────────────

export function calcularINSS(salarioBruto) {
  const base = Math.min(salarioBruto, TETO_INSS);
  let desconto = 0;
  let limiteAnterior = 0;
  for (const faixa of FAIXAS_INSS) {
    if (base <= limiteAnterior) break;
    const valorNaFaixa = Math.min(base, faixa.ate) - limiteAnterior;
    desconto += valorNaFaixa * faixa.aliquota;
    limiteAnterior = faixa.ate;
  }
  return Math.round(desconto * 100) / 100;
}

// ── IRRF ────────────────────────────────────────────────────────────────────

export function calcularIRRF(salarioBruto, { inss = 0, dependentes = 0, outrasDeducoes = 0 } = {}) {
  const baseCalculo = Math.max(0, salarioBruto - inss - (dependentes * DEDUCAO_DEPENDENTE_IRRF) - outrasDeducoes);

  // Imposto pela tabela progressiva
  let ir = 0;
  for (const faixa of FAIXAS_IRRF) {
    if (baseCalculo <= faixa.ate) {
      ir = baseCalculo * faixa.aliquota - faixa.deducao;
      break;
    }
  }
  ir = Math.max(0, ir);

  // Redutor (Lei nº 15.270/2025)
  if (baseCalculo <= REDUTOR_IRRF.limiteIsencaoEfetiva) {
    ir = 0;
  } else if (baseCalculo <= REDUTOR_IRRF.limiteFaixaRedutora) {
    const redutor = REDUTOR_IRRF.intercepto - REDUTOR_IRRF.coeficiente * baseCalculo;
    ir = Math.max(0, ir - redutor);
  }

  return Math.round(ir * 100) / 100;
}

// ── FÉRIAS ──────────────────────────────────────────────────────────────────

export function calcularFerias(salario, { mesesProporcional = 12, venderUmTerco = false } = {}) {
  const feriasBase = (salario / 12) * mesesProporcional;
  const umTerco = feriasBase / 3;
  const abono = venderUmTerco ? feriasBase / 3 : 0; // venda de 1/3 das férias
  const feriasReceber = venderUmTerco ? (feriasBase * 2 / 3) + umTerco : feriasBase + umTerco;
  return { feriasBase, umTerco, abono, feriasReceber };
}

// ── 13º SALÁRIO ─────────────────────────────────────────────────────────────

export function calcularDecimoTerceiro(salario, meses = 12) {
  return Math.round((salario / 12) * meses * 100) / 100;
}

// ── AVISO PRÉVIO ─────────────────────────────────────────────────────────────

export function calcularAvisoPrevio(anosServico) {
  const diasExtras = anosServico * AVISO_PREVIO_ACRESCIMO_POR_ANO;
  const totalDias = Math.min(AVISO_PREVIO_BASE_DIAS + diasExtras, AVISO_PREVIO_MAXIMO_DIAS);
  return totalDias;
}

// ── RESCISÃO ─────────────────────────────────────────────────────────────────

export function calcularRescisao({
  salario,
  dataAdmissao,
  dataDesligamento,
  modalidade, // 'sem-justa-causa' | 'com-justa-causa' | 'pedido-demissao' | 'acordo-mutuo' | 'fim-experiencia'
  saldoFGTS = 0,
  avisoPrevioTrabalhado = false,
}) {
  const admissao = new Date(dataAdmissao);
  const desligamento = new Date(dataDesligamento);

  // Tempo de serviço
  const diffMs = desligamento - admissao;
  const anosCompletos = Math.floor(diffMs / (365.25 * 24 * 3600 * 1000));
  const mesesCompletos = Math.floor(diffMs / (30.44 * 24 * 3600 * 1000)) % 12;
  const diasUltimoMes = desligamento.getDate();
  const diasNoMes = new Date(desligamento.getFullYear(), desligamento.getMonth() + 1, 0).getDate();

  // Meses para 13º e férias (do início do ano ou da admissão, o que for mais recente)
  const inicioAno = new Date(desligamento.getFullYear(), 0, 1);
  const refDate = admissao > inicioAno ? admissao : inicioAno;
  const mesesParaDecimoTerceiro = desligamento.getMonth() - refDate.getMonth() + 1 +
    (desligamento.getFullYear() - refDate.getFullYear()) * 12;
  const mesesDecimoTerceiro = Math.min(12, Math.max(0, mesesParaDecimoTerceiro));

  // Meses de férias proporcionais (período aquisitivo)
  const ultimaAquisicao = new Date(admissao);
  while (ultimaAquisicao <= desligamento) ultimaAquisicao.setFullYear(ultimaAquisicao.getFullYear() + 1);
  ultimaAquisicao.setFullYear(ultimaAquisicao.getFullYear() - 1);
  const mesesFerias = Math.floor((desligamento - ultimaAquisicao) / (30.44 * 24 * 3600 * 1000));
  const mesesFeriasProporcional = Math.min(12, Math.max(0, mesesFerias));

  const verbas = {};

  // Saldo de salário
  verbas.saldoSalario = Math.round((salario / diasNoMes) * diasUltimoMes * 100) / 100;

  // Férias proporcionais + 1/3
  if (modalidade !== 'com-justa-causa') {
    const ferProp = (salario / 12) * mesesFeriasProporcional;
    verbas.feriasProporcional = Math.round(ferProp * 100) / 100;
    verbas.umTercoFeriasProporcional = Math.round((ferProp / 3) * 100) / 100;
  }

  // 13º proporcional
  if (modalidade !== 'com-justa-causa') {
    verbas.decimoTerceiroProporcional = Math.round((salario / 12) * mesesDecimoTerceiro * 100) / 100;
  }

  // Aviso prévio
  const diasAP = calcularAvisoPrevio(anosCompletos);
  if (modalidade === 'sem-justa-causa') {
    if (!avisoPrevioTrabalhado) {
      verbas.avisoPrevioIndenizado = Math.round((salario / 30) * diasAP * 100) / 100;
    }
    verbas.multaFGTS = Math.round(saldoFGTS * MULTA_FGTS_SEM_JUSTA_CAUSA * 100) / 100;
  } else if (modalidade === 'acordo-mutuo') {
    const diasAPAcordo = Math.ceil(diasAP / 2);
    verbas.avisoPrevioIndenizado = Math.round((salario / 30) * diasAPAcordo * 100) / 100;
    verbas.multaFGTS = Math.round(saldoFGTS * MULTA_FGTS_ACORDO_MUTUO * 100) / 100;
  }
  // com-justa-causa, pedido-demissao, fim-experiencia: sem aviso indenizado, sem multa

  // Total bruto
  verbas.totalBruto = Object.values(verbas).reduce((a, b) => a + b, 0);

  return { verbas, anosCompletos, mesesCompletos, diasAP };
}
