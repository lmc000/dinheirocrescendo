import { useState, useMemo } from "react";
import { Header } from "../components/landing/Header";
import { FooterSection } from "../components/landing/FooterSection";
import { Calculator, TrendingUp, Target, PiggyBank, RefreshCw, Scale, PieChart } from "lucide-react";

function formatBrl(val) {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(val);
}

// ─── FERRAMENTAS EXISTENTES ───────────────────────────────────────────────────

function SimuladorJurosCompostos() {
    const [capital, setCapital] = useState(5000);
    const [mensal, setMensal] = useState(1000);
    const [taxa, setTaxa] = useState(10);
    const [anos, setAnos] = useState(20);

    const taxaMensal = taxa / 100 / 12;
    const meses = anos * 12;
    let total = capital;
    for (let m = 0; m < meses; m++) total = total * (1 + taxaMensal) + mensal;
    const totalInvestido = capital + mensal * meses;
    const ganhos = total - totalInvestido;

    return (
        <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#1D4ED8]" />
                </div>
                <h2 className="text-xl font-extrabold text-[#0A1628]">Simulador de Juros Compostos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                    { label: "Capital inicial (R$)", value: capital, setter: setCapital, min: 0, max: 500000, step: 2500 },
                    { label: "Aporte mensal (R$)", value: mensal, setter: setMensal, min: 0, max: 20000, step: 100 },
                    { label: "Retorno anual esperado (%)", value: taxa, setter: setTaxa, min: 1, max: 18, step: 0.5 },
                    { label: "Número de anos", value: anos, setter: setAnos, min: 1, max: 40, step: 1 },
                ].map((field) => (
                    <div key={field.label}>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-slate-600">{field.label}</label>
                            <span className="text-sm font-bold text-[#1D4ED8]">
                                {field.label.includes("%") ? `${field.value}%` : field.label.includes("anos") ? `${field.value} anos` : formatBrl(field.value)}
                            </span>
                        </div>
                        <input type="range" min={field.min} max={field.max} step={field.step} value={field.value}
                            onChange={(e) => field.setter(Number(e.target.value))} className="w-full accent-blue-600" />
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-2xl p-4 text-center">
                    <p className="text-xs text-slate-400 mb-1">Total investido</p>
                    <p className="text-lg font-extrabold text-[#0A1628]">{formatBrl(totalInvestido)}</p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-4 text-center">
                    <p className="text-xs text-[#1D4ED8] mb-1">Ganhos compostos</p>
                    <p className="text-lg font-extrabold text-[#1D4ED8]">{formatBrl(ganhos)}</p>
                </div>
                <div className="bg-[#0A1628] rounded-2xl p-4 text-center">
                    <p className="text-xs text-slate-400 mb-1">Valor final</p>
                    <p className="text-lg font-extrabold text-white">{formatBrl(total)}</p>
                </div>
            </div>
        </div>
    );
}

function SimuladorFIRE() {
    const [despesasMensais, setDespesasMensais] = useState(5000);
    const [patrimonio, setPatrimonio] = useState(50000);
    const [poupancaMensal, setPoupancaMensal] = useState(1500);
    const [retorno, setRetorno] = useState(8);

    const meta = despesasMensais * 12 * 25;
    const falta = Math.max(0, meta - patrimonio);
    const taxaMensal = retorno / 100 / 12;
    let meses = 0, acumulado = patrimonio;
    while (acumulado < meta && meses < 600) { acumulado = acumulado * (1 + taxaMensal) + poupancaMensal; meses++; }
    const anos = Math.floor(meses / 12);
    const mesesResto = meses % 12;

    return (
        <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#1D4ED8]" />
                </div>
                <h2 className="text-xl font-extrabold text-[#0A1628]">Calculadora FIRE</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                    { label: "Despesas mensais (R$)", value: despesasMensais, setter: setDespesasMensais, min: 2000, max: 25000, step: 500 },
                    { label: "Patrimônio atual (R$)", value: patrimonio, setter: setPatrimonio, min: 0, max: 2000000, step: 25000 },
                    { label: "Poupança mensal (R$)", value: poupancaMensal, setter: setPoupancaMensal, min: 100, max: 15000, step: 100 },
                    { label: "Retorno anual esperado (%)", value: retorno, setter: setRetorno, min: 2, max: 14, step: 0.5 },
                ].map((field) => (
                    <div key={field.label}>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-slate-600">{field.label}</label>
                            <span className="text-sm font-bold text-[#1D4ED8]">
                                {field.label.includes("%") ? `${field.value}%` : formatBrl(field.value)}
                            </span>
                        </div>
                        <input type="range" min={field.min} max={field.max} step={field.step} value={field.value}
                            onChange={(e) => field.setter(Number(e.target.value))} className="w-full accent-blue-600" />
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 rounded-2xl p-4 text-center"><p className="text-xs text-slate-400 mb-1">Meta FIRE</p><p className="text-base font-extrabold text-[#0A1628]">{formatBrl(meta)}</p></div>
                <div className="bg-slate-50 rounded-2xl p-4 text-center"><p className="text-xs text-slate-400 mb-1">Falta acumular</p><p className="text-base font-extrabold text-[#0A1628]">{formatBrl(falta)}</p></div>
                <div className="bg-blue-50 rounded-2xl p-4 text-center"><p className="text-xs text-[#1D4ED8] mb-1">Tempo estimado</p><p className="text-base font-extrabold text-[#1D4ED8]">{meses >= 600 ? "+50 anos" : `${anos}a ${mesesResto}m`}</p></div>
                <div className="bg-[#0A1628] rounded-2xl p-4 text-center"><p className="text-xs text-slate-400 mb-1">Renda mensal</p><p className="text-base font-extrabold text-white">{formatBrl(meta * 0.04 / 12)}</p></div>
            </div>
            <p className="text-xs text-slate-400 mt-4">* Baseado na regra dos 4% (estudo Trinity). Não garante resultados.</p>
        </div>
    );
}

function CalculadoraRegra72() {
    const [taxa, setTaxa] = useState(10);
    const anos = (72 / taxa).toFixed(1);
    return (
        <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-[#1D4ED8]" />
                </div>
                <h2 className="text-xl font-extrabold text-[#0A1628]">Regra dos 72 — Tempo para Dobrar</h2>
            </div>
            <div className="mb-8">
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold text-slate-600">Taxa de retorno anual (%)</label>
                    <span className="text-sm font-bold text-[#1D4ED8]">{taxa}%</span>
                </div>
                <input type="range" min={1} max={20} step={0.5} value={taxa}
                    onChange={(e) => setTaxa(Number(e.target.value))} className="w-full accent-blue-600" />
            </div>
            <div className="bg-[#0A1628] rounded-2xl p-6 text-center">
                <p className="text-slate-400 text-sm mb-2">Com {taxa}% de retorno anual, seu dinheiro dobra em:</p>
                <p className="text-5xl font-extrabold text-white">{anos}</p>
                <p className="text-slate-400 mt-2">anos</p>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-2">
                {[6, 10, 12, 14].map((t) => (
                    <button key={t} onClick={() => setTaxa(t)}
                        className={`rounded-xl py-2 text-sm font-bold transition-all ${taxa === t ? "bg-[#1D4ED8] text-white" : "bg-slate-50 text-slate-600 hover:bg-blue-50"}`}>
                        {t}%
                    </button>
                ))}
            </div>
        </div>
    );
}

// ─── NOVAS FERRAMENTAS ────────────────────────────────────────────────────────

function CalculadoraObjetivo() {
    const [objetivo, setObjetivo] = useState(100000);
    const [jaPoupa, setJaPoupa] = useState(10000);
    const [mensal, setMensal] = useState(1500);
    const [taxa, setTaxa] = useState(10);
    const [prazoAnos, setPrazoAnos] = useState(5);

    const taxaMensal = taxa / 100 / 12;
    let meses = 0, acumulado = jaPoupa;
    while (acumulado < objetivo && meses < 600) { acumulado = acumulado * (1 + taxaMensal) + mensal; meses++; }
    const anos = Math.floor(meses / 12);
    const mesesResto = meses % 12;
    const totalInvestido = jaPoupa + mensal * meses;
    const jurosGanhos = Math.max(0, objetivo - totalInvestido);

    const mesesPrazo = prazoAnos * 12;
    let mensalNecessario = taxaMensal > 0
        ? (objetivo - jaPoupa * Math.pow(1 + taxaMensal, mesesPrazo)) * taxaMensal / (Math.pow(1 + taxaMensal, mesesPrazo) - 1)
        : (objetivo - jaPoupa) / mesesPrazo;
    mensalNecessario = Math.max(0, mensalNecessario);

    return (
        <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <PiggyBank className="w-5 h-5 text-[#1D4ED8]" />
                </div>
                <h2 className="text-xl font-extrabold text-[#0A1628]">Calculadora de Objetivo de Poupança</h2>
            </div>
            <p className="text-sm text-slate-400 mb-6">Entrada do apartamento, reserva de emergência, viagem — calcule quanto tempo falta e quanto você deve poupar por mês.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                    { label: "Objetivo (R$)", value: objetivo, setter: setObjetivo, min: 5000, max: 1000000, step: 5000 },
                    { label: "Já poupado (R$)", value: jaPoupa, setter: setJaPoupa, min: 0, max: 500000, step: 2500 },
                    { label: "Poupança mensal (R$)", value: mensal, setter: setMensal, min: 100, max: 15000, step: 100 },
                    { label: "Taxa de retorno anual (%)", value: taxa, setter: setTaxa, min: 0, max: 15, step: 0.5 },
                ].map((field) => (
                    <div key={field.label}>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-slate-600">{field.label}</label>
                            <span className="text-sm font-bold text-[#1D4ED8]">
                                {field.label.includes("%") ? `${field.value}%` : formatBrl(field.value)}
                            </span>
                        </div>
                        <input type="range" min={field.min} max={field.max} step={field.step} value={field.value}
                            onChange={(e) => field.setter(Number(e.target.value))} className="w-full accent-blue-600" />
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-50 rounded-2xl p-4 text-center">
                    <p className="text-xs text-slate-400 mb-1">Tempo estimado</p>
                    <p className="text-lg font-extrabold text-[#0A1628]">
                        {meses >= 600 ? "+50 anos" : anos > 0 ? `${anos}a ${mesesResto}m` : `${mesesResto}m`}
                    </p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-4 text-center">
                    <p className="text-xs text-[#1D4ED8] mb-1">Juros ganhos</p>
                    <p className="text-lg font-extrabold text-[#1D4ED8]">{formatBrl(jurosGanhos)}</p>
                </div>
                <div className="bg-[#0A1628] rounded-2xl p-4 text-center">
                    <p className="text-xs text-slate-400 mb-1">Objetivo</p>
                    <p className="text-lg font-extrabold text-white">{formatBrl(objetivo)}</p>
                </div>
            </div>
            <div className="border border-slate-100 rounded-2xl p-5">
                <p className="text-sm font-bold text-slate-600 mb-4">Quanto preciso poupar por mês para atingir o objetivo em:</p>
                <div className="flex justify-between mb-2">
                    <label className="text-sm text-slate-500">{prazoAnos} {prazoAnos === 1 ? "ano" : "anos"}</label>
                    <span className="text-sm font-bold text-[#1D4ED8]">{prazoAnos} anos</span>
                </div>
                <input type="range" min={1} max={30} step={1} value={prazoAnos}
                    onChange={(e) => setPrazoAnos(Number(e.target.value))} className="w-full accent-blue-600 mb-4" />
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                    <p className="text-xs text-slate-500 mb-1">Poupança mensal necessária</p>
                    <p className="text-2xl font-extrabold text-[#1D4ED8]">{formatBrl(Math.ceil(mensalNecessario))}/mês</p>
                </div>
            </div>
        </div>
    );
}

function SimuladorDCA() {
    const [valorMensal, setValorMensal] = useState(1000);
    const [anos, setAnos] = useState(15);
    const [taxaMedia, setTaxaMedia] = useState(10);
    const [modoVer, setModoVer] = useState("tabela");

    const taxaMensal = taxaMedia / 100 / 12;
    const meses = anos * 12;

    const marcos = useMemo(() => {
        const pontos = [];
        let acumulado = 0;
        for (let m = 1; m <= meses; m++) {
            acumulado = acumulado * (1 + taxaMensal) + valorMensal;
            if (m % 12 === 0) pontos.push({ ano: m / 12, valor: acumulado, investido: valorMensal * m, ganhos: acumulado - valorMensal * m });
        }
        return pontos;
    }, [valorMensal, meses, taxaMensal]);

    const final = marcos[marcos.length - 1] || { valor: 0, investido: 0, ganhos: 0 };
    const multiplicador = final.investido > 0 ? (final.valor / final.investido).toFixed(1) : "—";

    const milestones = [50000, 100000, 250000, 500000, 1000000, 2500000];
    const milestoneHits = milestones.map((marco) => {
        let acumulado = 0;
        for (let i = 1; i <= 600; i++) {
            acumulado = acumulado * (1 + taxaMensal) + valorMensal;
            if (acumulado >= marco) return { marco, meses: i };
        }
        return null;
    }).filter(Boolean);

    return (
        <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-[#1D4ED8]" />
                </div>
                <h2 className="text-xl font-extrabold text-[#0A1628]">Simulador DCA — Aporte Mensal Regular</h2>
            </div>
            <p className="text-sm text-slate-400 mb-6">Simule o efeito de investir um valor fixo todos os meses (Dollar-Cost Averaging).</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                    { label: "Aporte mensal (R$)", value: valorMensal, setter: setValorMensal, min: 100, max: 20000, step: 100 },
                    { label: "Número de anos", value: anos, setter: setAnos, min: 1, max: 40, step: 1 },
                    { label: "Retorno anual médio (%)", value: taxaMedia, setter: setTaxaMedia, min: 1, max: 18, step: 0.5 },
                ].map((field) => (
                    <div key={field.label}>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-slate-600">{field.label}</label>
                            <span className="text-sm font-bold text-[#1D4ED8]">
                                {field.label.includes("%") ? `${field.value}%` : field.label.includes("anos") ? `${field.value} anos` : formatBrl(field.value)}
                            </span>
                        </div>
                        <input type="range" min={field.min} max={field.max} step={field.step} value={field.value}
                            onChange={(e) => field.setter(Number(e.target.value))} className="w-full accent-blue-600" />
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-50 rounded-2xl p-4 text-center"><p className="text-xs text-slate-400 mb-1">Total investido</p><p className="text-base font-extrabold text-[#0A1628]">{formatBrl(final.investido)}</p></div>
                <div className="bg-blue-50 rounded-2xl p-4 text-center"><p className="text-xs text-[#1D4ED8] mb-1">Ganhos DCA</p><p className="text-base font-extrabold text-[#1D4ED8]">{formatBrl(final.ganhos)}</p></div>
                <div className="bg-[#0A1628] rounded-2xl p-4 text-center"><p className="text-xs text-slate-400 mb-1">Valor final</p><p className="text-base font-extrabold text-white">{formatBrl(final.valor)}</p></div>
                <div className="bg-slate-50 rounded-2xl p-4 text-center"><p className="text-xs text-slate-400 mb-1">Multiplicador</p><p className="text-base font-extrabold text-[#0A1628]">{multiplicador}×</p></div>
            </div>
            <div className="flex gap-2 mb-4">
                {["tabela", "marcos"].map((m) => (
                    <button key={m} onClick={() => setModoVer(m)}
                        className={`px-4 py-1.5 rounded-xl text-sm font-bold transition-all ${modoVer === m ? "bg-[#1D4ED8] text-white" : "bg-slate-50 text-slate-500 hover:bg-blue-50"}`}>
                        {m === "tabela" ? "Evolução anual" : "Marcos"}
                    </button>
                ))}
            </div>
            {modoVer === "tabela" ? (
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-left text-xs text-slate-400 border-b border-slate-100">
                                <th className="pb-2 font-bold">Ano</th>
                                <th className="pb-2 font-bold text-right">Investido</th>
                                <th className="pb-2 font-bold text-right">Ganhos</th>
                                <th className="pb-2 font-bold text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {marcos.filter((_, i) => i % Math.max(1, Math.floor(marcos.length / 10)) === 0 || i === marcos.length - 1).map((row) => (
                                <tr key={row.ano} className="border-b border-slate-50">
                                    <td className="py-2 font-bold text-[#0A1628]">Ano {row.ano}</td>
                                    <td className="py-2 text-right text-slate-500">{formatBrl(row.investido)}</td>
                                    <td className="py-2 text-right text-[#1D4ED8] font-bold">{formatBrl(row.ganhos)}</td>
                                    <td className="py-2 text-right font-extrabold text-[#0A1628]">{formatBrl(row.valor)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {milestoneHits.map(({ marco, meses: m }) => {
                        const a = Math.floor(m / 12), mo = m % 12;
                        return (
                            <div key={marco} className="bg-slate-50 rounded-2xl p-4">
                                <p className="text-xs text-slate-400 mb-1">Você atinge {formatBrl(marco)} em</p>
                                <p className="text-base font-extrabold text-[#0A1628]">{a > 0 ? `${a}a ` : ""}{mo > 0 ? `${mo}m` : ""}</p>
                            </div>
                        );
                    })}
                </div>
            )}
            <p className="text-xs text-slate-400 mt-4">* Simulação com retorno médio constante. O retorno real varia ano a ano.</p>
        </div>
    );
}

function CalculadoraPrevidenciaVsETF() {
    const [investimentoAnual, setInvestimentoAnual] = useState(12000);
    const [anosAteAposentadoria, setAnosAteAposentadoria] = useState(30);
    const [taxaRetornoBruto, setTaxaRetornoBruto] = useState(10);
    const [custosPrevidencia, setCustosPrevidencia] = useState(1.0);
    const [aliquotaIR, setAliquotaIR] = useState(27.5);

    // PGBL: dedução anual da contribuição na declaração completa (até 12% da renda bruta)
    const deducaoAnual = investimentoAnual * (aliquotaIR / 100);

    const taxaLiquidaPrev = (taxaRetornoBruto - custosPrevidencia) / 100;
    let totalPrev = 0, totalDeducoes = 0;
    for (let a = 0; a < anosAteAposentadoria; a++) { totalPrev = (totalPrev + investimentoAnual) * (1 + taxaLiquidaPrev); totalDeducoes += deducaoAnual; }
    // PGBL na tabela regressiva (10+ anos): 10% sobre o valor TOTAL resgatado
    const impostoPrev = totalPrev * 0.10;
    const liquidoPrev = totalPrev - impostoPrev + totalDeducoes;

    const taxaLiquidaETF = (taxaRetornoBruto - 0.25) / 100; // taxa de administração ~0,25%
    let totalETF = 0;
    for (let a = 0; a < anosAteAposentadoria; a++) totalETF = (totalETF + investimentoAnual) * (1 + taxaLiquidaETF);
    const ganhosETF = Math.max(0, totalETF - investimentoAnual * anosAteAposentadoria);
    const impostoETF = ganhosETF * 0.15; // 15% sobre o lucro
    const liquidoETF = totalETF - impostoETF;

    const vencedor = liquidoPrev >= liquidoETF ? "PGBL" : "ETF";
    const diferenca = Math.abs(liquidoPrev - liquidoETF);

    return (
        <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-[#1D4ED8]" />
                </div>
                <h2 className="text-xl font-extrabold text-[#0A1628]">Calculadora Previdência (PGBL) vs ETF — Impacto Fiscal</h2>
            </div>
            <p className="text-sm text-slate-400 mb-6">Compara o valor líquido final entre previdência privada PGBL (tabela regressiva, 10% após 10 anos) e ETFs diretos (15% sobre o lucro), incluindo a dedução do IR.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                    { label: "Investimento anual (R$)", value: investimentoAnual, setter: setInvestimentoAnual, min: 2000, max: 60000, step: 1000 },
                    { label: "Anos até a aposentadoria", value: anosAteAposentadoria, setter: setAnosAteAposentadoria, min: 10, max: 40, step: 1 },
                    { label: "Retorno bruto anual (%)", value: taxaRetornoBruto, setter: setTaxaRetornoBruto, min: 4, max: 15, step: 0.5 },
                    { label: "Custos previdência (%/ano)", value: custosPrevidencia, setter: setCustosPrevidencia, min: 0.2, max: 3, step: 0.1 },
                    { label: "Sua alíquota de IR (%)", value: aliquotaIR, setter: setAliquotaIR, min: 7.5, max: 27.5, step: 7.5 },
                ].map((field) => (
                    <div key={field.label}>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-slate-600">{field.label}</label>
                            <span className="text-sm font-bold text-[#1D4ED8]">
                                {field.label.includes("%") ? `${field.value}%` : field.label.includes("Anos") ? `${field.value}` : formatBrl(field.value)}
                            </span>
                        </div>
                        <input type="range" min={field.min} max={field.max} step={field.step} value={field.value}
                            onChange={(e) => field.setter(Number(e.target.value))} className="w-full accent-blue-600" />
                    </div>
                ))}
            </div>
            <div className="bg-blue-50 rounded-2xl p-4 mb-6 flex items-center justify-between">
                <div>
                    <p className="text-xs text-slate-500">Restituição de IR anual estimada (PGBL)</p>
                    <p className="text-lg font-extrabold text-[#1D4ED8]">{formatBrl(deducaoAnual)}/ano · {formatBrl(totalDeducoes)} total</p>
                </div>
                <div className="text-right">
                    <p className="text-xs text-slate-500">Lembrete</p>
                    <p className="text-sm font-bold text-[#0A1628]">Dedução limitada a 12% da renda bruta</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                    { titulo: "PGBL", vence: vencedor === "PGBL", bruto: totalPrev, imposto: impostoPrev, impostoLabel: "IR no resgate (10% sobre o total)", extra: totalDeducoes, extraLabel: "Deduções de IR acumuladas", extraCor: "text-green-600", liquido: liquidoPrev },
                    { titulo: "ETF direto", vence: vencedor === "ETF", bruto: totalETF, imposto: impostoETF, impostoLabel: "IR sobre o lucro (15%)", extra: null, extraLabel: "Deduções de IR", extraCor: "text-slate-300", liquido: liquidoETF },
                ].map((col) => (
                    <div key={col.titulo} className={`rounded-2xl p-5 border-2 ${col.vence ? "border-[#1D4ED8] bg-blue-50" : "border-slate-100 bg-slate-50"}`}>
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-sm font-extrabold text-[#0A1628]">{col.titulo}</p>
                            {col.vence && <span className="text-xs bg-[#1D4ED8] text-white px-2 py-0.5 rounded-full font-bold">Melhor opção</span>}
                        </div>
                        <p className="text-xs text-slate-400 mb-1">Valor bruto</p>
                        <p className="text-sm font-bold text-slate-600 mb-2">{formatBrl(col.bruto)}</p>
                        <p className="text-xs text-slate-400 mb-1">{col.impostoLabel}</p>
                        <p className="text-sm font-bold text-red-400 mb-2">−{formatBrl(col.imposto)}</p>
                        <p className="text-xs text-slate-400 mb-1">{col.extraLabel}</p>
                        <p className={`text-sm font-bold mb-3 ${col.extraCor}`}>{col.extra !== null ? `+${formatBrl(col.extra)}` : "Não aplicável"}</p>
                        <div className="border-t border-slate-200 pt-3">
                            <p className="text-xs text-slate-400">Valor líquido final</p>
                            <p className="text-xl font-extrabold text-[#0A1628]">{formatBrl(col.liquido)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-[#0A1628] rounded-2xl p-4 text-center">
                <p className="text-slate-400 text-sm">Com esses parâmetros, o <span className="text-white font-bold">{vencedor}</span> gera mais {formatBrl(diferenca)} no final</p>
                <p className="text-xs text-slate-500 mt-1">* Custos de previdência de banco: 2–3%/ano. Previdência de corretora: 0,5–1%/ano. Ajuste o slider "Custos previdência" para comparar. PGBL pressupõe declaração completa e tabela regressiva.</p>
            </div>
        </div>
    );
}

const ETF_OPCOES = [
    { id: "ivvb11", nome: "S&P 500 (IVVB11)", ter: 0.23, retorno: 11.1, regiao: "EUA + dólar", cor: "#1D4ED8" },
    { id: "wrld11", nome: "Mundo desenvolvido (WRLD11)", ter: 0.30, retorno: 9.8, regiao: "Global + dólar", cor: "#0891B2" },
    { id: "bova11", nome: "Ibovespa (BOVA11)", ter: 0.10, retorno: 10.0, regiao: "Brasil", cor: "#7C3AED" },
    { id: "smal11", nome: "Small Caps (SMAL11)", ter: 0.50, retorno: 9.0, regiao: "Brasil — small caps", cor: "#059669" },
    { id: "imab11", nome: "Tesouro IPCA+ (IMAB11)", ter: 0.25, retorno: 6.0, regiao: "Renda fixa (juro real)", cor: "#D97706" },
    { id: "gold11", nome: "Ouro (GOLD11)", ter: 0.30, retorno: 4.5, regiao: "Ouro + dólar", cor: "#CA8A04" },
];

function SimuladorCarteira() {
    const [pesos, setPesos] = useState({ ivvb11: 50, bova11: 20, imab11: 30, wrld11: 0, smal11: 0, gold11: 0 });
    const [investimentoMensal, setInvestimentoMensal] = useState(1500);
    const [anos, setAnos] = useState(20);

    const total = Object.values(pesos).reduce((a, b) => a + b, 0);
    const retornoPonderado = ETF_OPCOES.reduce((acc, e) => acc + (pesos[e.id] / 100) * e.retorno, 0);
    const terPonderado = ETF_OPCOES.reduce((acc, e) => acc + (pesos[e.id] / 100) * e.ter, 0);
    const retornoLiquido = retornoPonderado - terPonderado;
    const taxaMensal = retornoLiquido / 100 / 12;
    const meses = anos * 12;
    let valorFinal = 0;
    for (let m = 0; m < meses; m++) valorFinal = valorFinal * (1 + taxaMensal) + investimentoMensal;
    const totalInvestido = investimentoMensal * meses;
    const ganhos = valorFinal - totalInvestido;
    const etfsAtivos = ETF_OPCOES.filter(e => pesos[e.id] > 0);

    return (
        <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <PieChart className="w-5 h-5 text-[#1D4ED8]" />
                </div>
                <h2 className="text-xl font-extrabold text-[#0A1628]">Simulador de Carteira com Múltiplos ETFs</h2>
            </div>
            <p className="text-sm text-slate-400 mb-6">Defina a alocação da sua carteira com ETFs da B3 e veja o retorno esperado, o custo total (taxa de administração) e o valor final estimado.</p>

            {total !== 100 && (
                <div className={`rounded-xl p-3 mb-4 text-sm font-bold ${total > 100 ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"}`}>
                    {total > 100 ? `⚠ Total ${total}% — excede 100%. Reduza alguns pesos.` : `ℹ Total ${total}% — faltam ${100 - total}% para completar.`}
                </div>
            )}
            {total === 100 && <div className="rounded-xl p-3 mb-4 text-sm font-bold bg-green-50 text-green-600">✓ Carteira balanceada — 100%</div>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {ETF_OPCOES.map((etf) => (
                    <div key={etf.id} className={`rounded-2xl p-4 border transition-all ${pesos[etf.id] > 0 ? "border-blue-200 bg-blue-50/40" : "border-slate-100 bg-slate-50"}`}>
                        <div className="flex items-center justify-between mb-2">
                            <div>
                                <p className="text-sm font-extrabold text-[#0A1628]">{etf.nome}</p>
                                <p className="text-xs text-slate-400">{etf.regiao} · Taxa {etf.ter}% · ~{etf.retorno}%/ano</p>
                            </div>
                            <span className="text-lg font-extrabold" style={{ color: etf.cor }}>{pesos[etf.id]}%</span>
                        </div>
                        <input type="range" min={0} max={100} step={5} value={pesos[etf.id]}
                            onChange={(e) => setPesos(prev => ({ ...prev, [etf.id]: Number(e.target.value) }))}
                            className="w-full" style={{ accentColor: etf.cor }} />
                    </div>
                ))}
            </div>

            {etfsAtivos.length > 0 && (
                <div className="flex gap-2 flex-wrap mb-6">
                    {etfsAtivos.map(etf => (
                        <div key={etf.id} className="flex items-center gap-1.5 bg-slate-50 rounded-full px-3 py-1">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: etf.cor }} />
                            <span className="text-xs font-bold text-slate-600">{pesos[etf.id]}% {etf.id.toUpperCase()}</span>
                        </div>
                    ))}
                </div>
            )}

            <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                    { label: "Aporte mensal (R$)", value: investimentoMensal, setter: setInvestimentoMensal, min: 100, max: 20000, step: 100 },
                    { label: "Horizonte temporal", value: anos, setter: setAnos, min: 1, max: 40, step: 1 },
                ].map((field) => (
                    <div key={field.label}>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-slate-600">{field.label}</label>
                            <span className="text-sm font-bold text-[#1D4ED8]">
                                {field.label.includes("mensal") ? formatBrl(field.value) : `${field.value} anos`}
                            </span>
                        </div>
                        <input type="range" min={field.min} max={field.max} step={field.step} value={field.value}
                            onChange={(e) => field.setter(Number(e.target.value))} className="w-full accent-blue-600" />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 rounded-2xl p-4 text-center"><p className="text-xs text-slate-400 mb-1">Retorno esperado</p><p className="text-lg font-extrabold text-[#0A1628]">{retornoLiquido.toFixed(2)}%/ano</p></div>
                <div className="bg-slate-50 rounded-2xl p-4 text-center"><p className="text-xs text-slate-400 mb-1">Custo total (taxa)</p><p className="text-lg font-extrabold text-[#0A1628]">{terPonderado.toFixed(3)}%/ano</p></div>
                <div className="bg-blue-50 rounded-2xl p-4 text-center"><p className="text-xs text-[#1D4ED8] mb-1">Ganhos estimados</p><p className="text-lg font-extrabold text-[#1D4ED8]">{formatBrl(ganhos)}</p></div>
                <div className="bg-[#0A1628] rounded-2xl p-4 text-center"><p className="text-xs text-slate-400 mb-1">Valor final</p><p className="text-lg font-extrabold text-white">{total === 100 ? formatBrl(valorFinal) : "—"}</p></div>
            </div>
            <p className="text-xs text-slate-400 mt-4">* Retornos históricos não garantem resultados futuros. Simulação com retorno médio anual constante.</p>
        </div>
    );
}

// ─── PÁGINA ───────────────────────────────────────────────────────────────────

export default function Ferramentas() {
    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <Header />
            <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-12">
                        <span className="inline-block bg-blue-50 text-[#1D4ED8] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                            🧮 Ferramentas gratuitas
                        </span>
                        <h1 className="text-4xl font-extrabold text-[#0A1628] mb-4">
                            Calculadoras de Investimento
                        </h1>
                        <p className="text-slate-500 text-lg max-w-2xl">
                            Simuladores gratuitos para planejar seus investimentos, calcular a independência financeira e entender o poder dos juros compostos.
                        </p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <SimuladorJurosCompostos />
                        <SimuladorFIRE />
                        <SimuladorDCA />
                        <CalculadoraObjetivo />
                        <CalculadoraPrevidenciaVsETF />
                        <SimuladorCarteira />
                        <CalculadoraRegra72 />
                    </div>
                </div>
            </div>
            <FooterSection />
        </div>
    );
}
