// Tabelas e constantes trabalhistas/tributárias vigentes em 2026
// Fonte: Decreto salário mínimo dez/2025 | Portaria Interministerial MPS/MF nº 13/2026 | Lei nº 15.270/2025 (isenção IR)
// Atualizar anualmente em janeiro com os novos valores publicados.

export const SALARIO_MINIMO = 1621.00;
export const TETO_INSS = 8475.55;
export const DEDUCAO_DEPENDENTE_IRRF = 189.59;
export const DESCONTO_SIMPLIFICADO_IRRF = 607.20;

// Tabela INSS 2026 — contribuição progressiva do empregado
// Portaria Interministerial MPS/MF nº 13, de 9 de janeiro de 2026
export const FAIXAS_INSS = [
  { ate: 1621.00,  aliquota: 0.075 },
  { ate: 2902.84,  aliquota: 0.09  },
  { ate: 4354.27,  aliquota: 0.12  },
  { ate: 8475.55,  aliquota: 0.14  },
];

// Tabela IRRF 2026 — progressiva mensal
// Nota: o limite de isenção da tabela progressiva é R$ 2.428,80.
// A isenção EFETIVA vai até R$ 5.000 via mecanismo de redutor (Lei nº 15.270/2025).
export const FAIXAS_IRRF = [
  { ate: 2428.80,   aliquota: 0,      deducao: 0      },
  { ate: 2826.65,   aliquota: 0.075,  deducao: 182.16 },
  { ate: 3751.05,   aliquota: 0.15,   deducao: 394.16 },
  { ate: 4664.68,   aliquota: 0.225,  deducao: 675.49 },
  { ate: Infinity,  aliquota: 0.275,  deducao: 908.73 },
];

// Redutor IRRF 2026 (Lei nº 15.270/2025)
// Aplica-se sobre o IR calculado pela tabela progressiva
export const REDUTOR_IRRF = {
  limiteIsencaoEfetiva: 5000.00,
  limiteFaixaRedutora: 7350.00,
  coeficiente: 0.133145,
  intercepto: 978.62,
};

// FGTS
export const ALIQUOTA_FGTS = 0.08;
export const MULTA_FGTS_SEM_JUSTA_CAUSA = 0.40;
export const MULTA_FGTS_ACORDO_MUTUO = 0.20;

// Aviso prévio (Lei 12.506/2011)
export const AVISO_PREVIO_BASE_DIAS = 30;
export const AVISO_PREVIO_ACRESCIMO_POR_ANO = 3;
export const AVISO_PREVIO_MAXIMO_DIAS = 90;
