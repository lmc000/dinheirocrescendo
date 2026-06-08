import { useState, useMemo } from "react";
import { Header } from "../components/landing/Header";
import { FooterSection } from "../components/landing/FooterSection";
import { Calculator, TrendingUp, Target, PiggyBank, RefreshCw, Scale, PieChart } from "lucide-react";

function formatEur(val) {
    return new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(val);
}

// ─── FERRAMENTAS EXISTENTES ───────────────────────────────────────────────────

function SimuladorJurosCompostos() {
    const [capital, setCapital] = useState(1000);
    const [mensal, setMensal] = useState(200);
    const [taxa, setTaxa] = useState(7);
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
                    { label: "Capital inicial (€)", value: capital, setter: setCapital, min: 0, max: 100000, step: 500 },
                    { label: "Investimento mensal (€)", value: mensal, setter: setMensal, min: 0, max: 5000, step: 50 },
                    { label: "Retorno anual esperado (%)", value: taxa, setter: setTaxa, min: 1, max: 15, step: 0.5 },
                    { label: "Número de anos", value: anos, setter: setAnos, min: 1, max: 40, step: 1 },
                ].map((field) => (
                    <div key={field.label}>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-slate-600">{field.label}</label>
                            <span className="text-sm font-bold text-[#1D4ED8]">
                                {field.label.includes("%") ? `${field.value}%` : field.label.includes("anos") ? `${field.value} anos` : formatEur(field.value)}
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
                    <p className="text-lg font-extrabold text-[#0A1628]">{formatEur(totalInvestido)}</p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-4 text-center">
                    <p className="text-xs text-[#1D4ED8] mb-1">Ganhos compostos</p>
                    <p className="text-lg font-extrabold text-[#1D4ED8]">{formatEur(ganhos)}</p>
                </div>
                <div className="bg-[#0A1628] rounded-2xl p-4 text-center">
                    <p className="text-xs text-slate-400 mb-1">Valor final</p>
                    <p className="text-lg font-extrabold text-white">{formatEur(total)}</p>
                </div>
            </div>
        </div>
    );
}

function SimuladorFIRE() {
    const [despesasMensais, setDespesasMensais] = useState(1500);
    const [patrimonio, setPatrimonio] = useState(10000);
    const [poupancaMensal, setPoupancaMensal] = useState(400);
    const [retorno, setRetorno] = useState(7);

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
                    { label: "Despesas mensais (€)", value: despesasMensais, setter: setDespesasMensais, min: 500, max: 5000, step: 100 },
                    { label: "Património atual (€)", value: patrimonio, setter: setPatrimonio, min: 0, max: 500000, step: 5000 },
                    { label: "Poupança mensal (€)", value: poupancaMensal, setter: setPoupancaMensal, min: 50, max: 3000, step: 50 },
                    { label: "Retorno anual esperado (%)", value: retorno, setter: setRetorno, min: 2, max: 12, step: 0.5 },
                ].map((field) => (
                    <div key={field.label}>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-slate-600">{field.label}</label>
                            <span className="text-sm font-bold text-[#1D4ED8]">
                                {field.label.includes("%") ? `${field.value}%` : formatEur(field.value)}
                            </span>
                        </div>
                        <input type="range" min={field.min} max={field.max} step={field.step} value={field.value}
                            onChange={(e) => field.setter(Number(e.target.value))} className="w-full accent-blue-600" />
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 rounded-2xl p-4 text-center"><p className="text-xs text-slate-400 mb-1">Meta FIRE</p><p className="text-base font-extrabold text-[#0A1628]">{formatEur(meta)}</p></div>
                <div className="bg-slate-50 rounded-2xl p-4 text-center"><p className="text-xs text-slate-400 mb-1">Falta acumular</p><p className="text-base font-extrabold text-[#0A1628]">{formatEur(falta)}</p></div>
                <div className="bg-blue-50 rounded-2xl p-4 text-center"><p className="text-xs text-[#1D4ED8] mb-1">Tempo estimado</p><p className="text-base font-extrabold text-[#1D4ED8]">{meses >= 600 ? "+50 anos" : `${anos}a ${mesesResto}m`}</p></div>
                <div className="bg-[#0A1628] rounded-2xl p-4 text-center"><p className="text-xs text-slate-400 mb-1">Renda mensal</p><p className="text-base font-extrabold text-white">{formatEur(meta * 0.04 / 12)}</p></div>
            </div>
            <p className="text-xs text-slate-400 mt-4">* Baseado na regra dos 4% (estudo Trinity). Não garante resultados.</p>
        </div>
    );
}

function CalculadoraRegra72() {
    const [taxa, setTaxa] = useState(7);
    const anos = (72 / taxa).toFixed(1);
    return (
        <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-[#1D4ED8]" />
                </div>
                <h2 className="text-xl font-extrabold text-[#0A1628]">Regra dos 72 — Tempo para Duplicar</h2>
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
                <p className="text-slate-400 text-sm mb-2">Com {taxa}% de retorno anual, o teu dinheiro duplica em:</p>
                <p className="text-5xl font-extrabold text-white">{anos}</p>
                <p className="text-slate-400 mt-2">anos</p>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-2">
                {[4, 7, 10, 12].map((t) => (
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
    const [objetivo, setObjetivo] = useState(20000);
    const [jaPoupa, setJaPoupa] = useState(2000);
    const [mensal, setMensal] = useState(300);
    const [taxa, setTaxa] = useState(4);
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
            <p className="text-sm text-slate-400 mb-6">Entrada de casa, fundo de emergência, viagem — calcula quanto tempo falta e quanto deves poupar por mês.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                    { label: "Objetivo (€)", value: objetivo, setter: setObjetivo, min: 1000, max: 200000, step: 1000 },
                    { label: "Já poupado (€)", value: jaPoupa, setter: setJaPoupa, min: 0, max: 100000, step: 500 },
                    { label: "Poupança mensal (€)", value: mensal, setter: setMensal, min: 50, max: 3000, step: 50 },
                    { label: "Taxa de retorno anual (%)", value: taxa, setter: setTaxa, min: 0, max: 10, step: 0.5 },
                ].map((field) => (
                    <div key={field.label}>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-slate-600">{field.label}</label>
                            <span className="text-sm font-bold text-[#1D4ED8]">
                                {field.label.includes("%") ? `${field.value}%` : formatEur(field.value)}
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
                    <p className="text-lg font-extrabold text-[#1D4ED8]">{formatEur(jurosGanhos)}</p>
                </div>
                <div className="bg-[#0A1628] rounded-2xl p-4 text-center">
                    <p className="text-xs text-slate-400 mb-1">Objetivo</p>
                    <p className="text-lg font-extrabold text-white">{formatEur(objetivo)}</p>
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
                    <p className="text-2xl font-extrabold text-[#1D4ED8]">{formatEur(Math.ceil(mensalNecessario))}/mês</p>
                </div>
            </div>
        </div>
    );
}

function SimuladorDCA() {
    const [valorMensal, setValorMensal] = useState(200);
    const [anos, setAnos] = useState(15);
    const [taxaMedia, setTaxaMedia] = useState(8);
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

    const milestones = [10000, 25000, 50000, 100000, 250000, 500000];
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
                <h2 className="text-xl font-extrabold text-[#0A1628]">Simulador DCA — Investimento Mensal Regular</h2>
            </div>
            <p className="text-sm text-slate-400 mb-6">Simula o efeito de investir um valor fixo todos os meses (Dollar-Cost Averaging).</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                    { label: "Valor mensal (€)", value: valorMensal, setter: setValorMensal, min: 25, max: 5000, step: 25 },
                    { label: "Número de anos", value: anos, setter: setAnos, min: 1, max: 40, step: 1 },
                    { label: "Retorno anual médio (%)", value: taxaMedia, setter: setTaxaMedia, min: 1, max: 15, step: 0.5 },
                ].map((field) => (
                    <div key={field.label}>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-slate-600">{field.label}</label>
                            <span className="text-sm font-bold text-[#1D4ED8]">
                                {field.label.includes("%") ? `${field.value}%` : field.label.includes("anos") ? `${field.value} anos` : formatEur(field.value)}
                            </span>
                        </div>
                        <input type="range" min={field.min} max={field.max} step={field.step} value={field.value}
                            onChange={(e) => field.setter(Number(e.target.value))} className="w-full accent-blue-600" />
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-50 rounded-2xl p-4 text-center"><p className="text-xs text-slate-400 mb-1">Total investido</p><p className="text-base font-extrabold text-[#0A1628]">{formatEur(final.investido)}</p></div>
                <div className="bg-blue-50 rounded-2xl p-4 text-center"><p className="text-xs text-[#1D4ED8] mb-1">Ganhos DCA</p><p className="text-base font-extrabold text-[#1D4ED8]">{formatEur(final.ganhos)}</p></div>
                <div className="bg-[#0A1628] rounded-2xl p-4 text-center"><p className="text-xs text-slate-400 mb-1">Valor final</p><p className="text-base font-extrabold text-white">{formatEur(final.valor)}</p></div>
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
                                    <td className="py-2 text-right text-slate-500">{formatEur(row.investido)}</td>
                                    <td className="py-2 text-right text-[#1D4ED8] font-bold">{formatEur(row.ganhos)}</td>
                                    <td className="py-2 text-right font-extrabold text-[#0A1628]">{formatEur(row.valor)}</td>
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
                                <p className="text-xs text-slate-400 mb-1">Atinges {formatEur(marco)} em</p>
                                <p className="text-base font-extrabold text-[#0A1628]">{a > 0 ? `${a}a ` : ""}{mo > 0 ? `${mo}m` : ""}</p>
                            </div>
                        );
                    })}
                </div>
            )}
            <p className="text-xs text-slate-400 mt-4">* Simulação com retorno médio constante. O retorno real varia anualmente.</p>
        </div>
    );
}

function CalculadoraPPRvsETF() {
    const [investimentoAnual, setInvestimentoAnual] = useState(2000);
    const [idade, setIdade] = useState(35);
    const [anosAteReforma, setAnosAteReforma] = useState(30);
    const [taxaRetornoBruto, setTaxaRetornoBruto] = useState(7);
    const [custosPPR, setCustosPPR] = useState(1.2);

    const limiteDeducao = idade >= 50 ? 7000 : idade >= 35 ? 3500 : 2000;
    const deducaoAnual = Math.min(investimentoAnual, limiteDeducao) * 0.20;

    const taxaLiquidaPPR = (taxaRetornoBruto - custosPPR) / 100;
    let totalPPR = 0, totalDeducoes = 0;
    for (let a = 0; a < anosAteReforma; a++) { totalPPR = (totalPPR + investimentoAnual) * (1 + taxaLiquidaPPR); totalDeducoes += deducaoAnual; }
    const investidoPPR = investimentoAnual * anosAteReforma;
    const ganhosPPR = Math.max(0, totalPPR - investidoPPR);
    const impostoPPR = ganhosPPR * 0.08;
    const liquidoPPR = totalPPR - impostoPPR + totalDeducoes;

    const taxaLiquidaETF = (taxaRetornoBruto - 0.20) / 100;
    let totalETF = 0;
    for (let a = 0; a < anosAteReforma; a++) totalETF = (totalETF + investimentoAnual) * (1 + taxaLiquidaETF);
    const ganhosETF = Math.max(0, totalETF - investimentoAnual * anosAteReforma);
    const impostoETF = ganhosETF * 0.28;
    const liquidoETF = totalETF - impostoETF;

    const vencedor = liquidoPPR >= liquidoETF ? "PPR" : "ETF";
    const diferenca = Math.abs(liquidoPPR - liquidoETF);

    return (
        <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-[#1D4ED8]" />
                </div>
                <h2 className="text-xl font-extrabold text-[#0A1628]">Calculadora PPR vs ETF — Impacto Fiscal</h2>
            </div>
            <p className="text-sm text-slate-400 mb-6">Compara o valor líquido final entre PPR e ETFs diretos, incluindo benefícios fiscais e impostos no resgate.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                    { label: "Investimento anual (€)", value: investimentoAnual, setter: setInvestimentoAnual, min: 500, max: 7000, step: 100 },
                    { label: "Idade atual", value: idade, setter: setIdade, min: 18, max: 60, step: 1 },
                    { label: "Anos até à reforma", value: anosAteReforma, setter: setAnosAteReforma, min: 5, max: 40, step: 1 },
                    { label: "Retorno bruto anual (%)", value: taxaRetornoBruto, setter: setTaxaRetornoBruto, min: 2, max: 12, step: 0.5 },
                    { label: "Custos PPR (%/ano)", value: custosPPR, setter: setCustosPPR, min: 0.2, max: 3, step: 0.1 },
                ].map((field) => (
                    <div key={field.label}>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-slate-600">{field.label}</label>
                            <span className="text-sm font-bold text-[#1D4ED8]">
                                {field.label.includes("%") ? `${field.value}%` : field.label.includes("Idade") || field.label.includes("Anos") ? `${field.value}` : formatEur(field.value)}
                            </span>
                        </div>
                        <input type="range" min={field.min} max={field.max} step={field.step} value={field.value}
                            onChange={(e) => field.setter(Number(e.target.value))} className="w-full accent-blue-600" />
                    </div>
                ))}
            </div>
            <div className="bg-blue-50 rounded-2xl p-4 mb-6 flex items-center justify-between">
                <div>
                    <p className="text-xs text-slate-500">Dedução IRS anual estimada (PPR)</p>
                    <p className="text-lg font-extrabold text-[#1D4ED8]">{formatEur(deducaoAnual)}/ano · {formatEur(totalDeducoes)} total</p>
                </div>
                <div className="text-right">
                    <p className="text-xs text-slate-500">Limite para a tua idade</p>
                    <p className="text-sm font-bold text-[#0A1628]">{formatEur(limiteDeducao)}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                    { titulo: "PPR", vence: vencedor === "PPR", bruto: totalPPR, imposto: impostoPPR, impostoLabel: "Imposto resgate (8%)", extra: totalDeducoes, extraLabel: "Deduções IRS acumuladas", extraCor: "text-green-600", liquido: liquidoPPR },
                    { titulo: "ETF direto", vence: vencedor === "ETF", bruto: totalETF, imposto: impostoETF, impostoLabel: "Imposto mais-valias (28%)", extra: null, extraLabel: "Deduções IRS", extraCor: "text-slate-300", liquido: liquidoETF },
                ].map((col) => (
                    <div key={col.titulo} className={`rounded-2xl p-5 border-2 ${col.vence ? "border-[#1D4ED8] bg-blue-50" : "border-slate-100 bg-slate-50"}`}>
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-sm font-extrabold text-[#0A1628]">{col.titulo}</p>
                            {col.vence && <span className="text-xs bg-[#1D4ED8] text-white px-2 py-0.5 rounded-full font-bold">Melhor opção</span>}
                        </div>
                        <p className="text-xs text-slate-400 mb-1">Valor bruto</p>
                        <p className="text-sm font-bold text-slate-600 mb-2">{formatEur(col.bruto)}</p>
                        <p className="text-xs text-slate-400 mb-1">{col.impostoLabel}</p>
                        <p className="text-sm font-bold text-red-400 mb-2">−{formatEur(col.imposto)}</p>
                        <p className="text-xs text-slate-400 mb-1">{col.extraLabel}</p>
                        <p className={`text-sm font-bold mb-3 ${col.extraCor}`}>{col.extra !== null ? `+${formatEur(col.extra)}` : "Não aplicável"}</p>
                        <div className="border-t border-slate-200 pt-3">
                            <p className="text-xs text-slate-400">Valor líquido final</p>
                            <p className="text-xl font-extrabold text-[#0A1628]">{formatEur(col.liquido)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-[#0A1628] rounded-2xl p-4 text-center">
                <p className="text-slate-400 text-sm">Com estes parâmetros, o <span className="text-white font-bold">{vencedor}</span> gera mais {formatEur(diferenca)} no final</p>
                <p className="text-xs text-slate-500 mt-1">* Custos PPR bancário típico: 1–2%/ano. PPR em ETFs: 0,3–0,5%/ano. Ajusta o slider "Custos PPR" para comparar.</p>
            </div>
        </div>
    );
}

const ETF_OPCOES = [
    { id: "iwda", nome: "MSCI World (IWDA)", ter: 0.20, retorno: 10.2, regiao: "Mundo desenvolvido", cor: "#1D4ED8" },
    { id: "vwra", nome: "FTSE All-World (VWRA)", ter: 0.22, retorno: 9.8, regiao: "Global completo", cor: "#0891B2" },
    { id: "cspx", nome: "S&P 500 (CSPX)", ter: 0.07, retorno: 11.1, regiao: "EUA", cor: "#7C3AED" },
    { id: "eimi", nome: "Emerging Markets (EIMI)", ter: 0.18, retorno: 7.4, regiao: "Mercados emergentes", cor: "#059669" },
    { id: "govbond", nome: "€ Govt Bond", ter: 0.07, retorno: 3.2, regiao: "Obrigações europeias", cor: "#D97706" },
    { id: "gold", nome: "Ouro (IGLN)", ter: 0.12, retorno: 4.1, regiao: "Ouro físico", cor: "#CA8A04" },
];

function SimuladorCarteira() {
    const [pesos, setPesos] = useState({ iwda: 80, eimi: 20, cspx: 0, vwra: 0, govbond: 0, gold: 0 });
    const [investimentoMensal, setInvestimentoMensal] = useState(300);
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
            <p className="text-sm text-slate-400 mb-6">Define a alocação da tua carteira e vê o retorno esperado, custo total (TER) e valor final estimado.</p>

            {total !== 100 && (
                <div className={`rounded-xl p-3 mb-4 text-sm font-bold ${total > 100 ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"}`}>
                    {total > 100 ? `⚠ Total ${total}% — excede 100%. Reduz alguns pesos.` : `ℹ Total ${total}% — faltam ${100 - total}% para completar.`}
                </div>
            )}
            {total === 100 && <div className="rounded-xl p-3 mb-4 text-sm font-bold bg-green-50 text-green-600">✓ Carteira balanceada — 100%</div>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {ETF_OPCOES.map((etf) => (
                    <div key={etf.id} className={`rounded-2xl p-4 border transition-all ${pesos[etf.id] > 0 ? "border-blue-200 bg-blue-50/40" : "border-slate-100 bg-slate-50"}`}>
                        <div className="flex items-center justify-between mb-2">
                            <div>
                                <p className="text-sm font-extrabold text-[#0A1628]">{etf.nome}</p>
                                <p className="text-xs text-slate-400">{etf.regiao} · TER {etf.ter}% · ~{etf.retorno}%/ano</p>
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
                    { label: "Investimento mensal (€)", value: investimentoMensal, setter: setInvestimentoMensal, min: 50, max: 5000, step: 50 },
                    { label: "Horizonte temporal", value: anos, setter: setAnos, min: 1, max: 40, step: 1 },
                ].map((field) => (
                    <div key={field.label}>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-bold text-slate-600">{field.label}</label>
                            <span className="text-sm font-bold text-[#1D4ED8]">
                                {field.label.includes("mensal") ? formatEur(field.value) : `${field.value} anos`}
                            </span>
                        </div>
                        <input type="range" min={field.min} max={field.max} step={field.step} value={field.value}
                            onChange={(e) => field.setter(Number(e.target.value))} className="w-full accent-blue-600" />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 rounded-2xl p-4 text-center"><p className="text-xs text-slate-400 mb-1">Retorno esperado</p><p className="text-lg font-extrabold text-[#0A1628]">{retornoLiquido.toFixed(2)}%/ano</p></div>
                <div className="bg-slate-50 rounded-2xl p-4 text-center"><p className="text-xs text-slate-400 mb-1">Custo total (TER)</p><p className="text-lg font-extrabold text-[#0A1628]">{terPonderado.toFixed(3)}%/ano</p></div>
                <div className="bg-blue-50 rounded-2xl p-4 text-center"><p className="text-xs text-[#1D4ED8] mb-1">Ganhos estimados</p><p className="text-lg font-extrabold text-[#1D4ED8]">{formatEur(ganhos)}</p></div>
                <div className="bg-[#0A1628] rounded-2xl p-4 text-center"><p className="text-xs text-slate-400 mb-1">Valor final</p><p className="text-lg font-extrabold text-white">{total === 100 ? formatEur(valorFinal) : "—"}</p></div>
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
                            Simuladores gratuitos para planear o teu investimento, calcular a independência financeira e perceber o poder dos juros compostos.
                        </p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <SimuladorJurosCompostos />
                        <SimuladorFIRE />
                        <SimuladorDCA />
                        <CalculadoraObjetivo />
                        <CalculadoraPPRvsETF />
                        <SimuladorCarteira />
                        <CalculadoraRegra72 />
                    </div>
                </div>
            </div>
            <FooterSection />
        </div>
    );
}
