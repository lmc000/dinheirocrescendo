import { useState } from "react";
import { Header } from "../components/landing/Header";
import { FooterSection } from "../components/landing/FooterSection";
import { Calculator, TrendingUp, Target } from "lucide-react";

function formatEur(val) {
    return new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(val);
}

function SimuladorJurosCompostos() {
    const [capital, setCapital] = useState(1000);
    const [mensal, setMensal] = useState(200);
    const [taxa, setTaxa] = useState(7);
    const [anos, setAnos] = useState(20);

    const taxaMensal = taxa / 100 / 12;
    const meses = anos * 12;
    let total = capital;
    for (let m = 0; m < meses; m++) {
        total = total * (1 + taxaMensal) + mensal;
    }
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
                        <input type="range"
                            min={field.min} max={field.max} step={field.step}
                            value={field.value}
                            onChange={(e) => field.setter(Number(e.target.value))}
                            className="w-full accent-blue-600"
                        />
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

    // Calcular meses até atingir a meta
    let meses = 0;
    let acumulado = patrimonio;
    while (acumulado < meta && meses < 600) {
        acumulado = acumulado * (1 + taxaMensal) + poupancaMensal;
        meses++;
    }
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
                        <input type="range"
                            min={field.min} max={field.max} step={field.step}
                            value={field.value}
                            onChange={(e) => field.setter(Number(e.target.value))}
                            className="w-full accent-blue-600"
                        />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 rounded-2xl p-4 text-center">
                    <p className="text-xs text-slate-400 mb-1">Meta FIRE</p>
                    <p className="text-base font-extrabold text-[#0A1628]">{formatEur(meta)}</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 text-center">
                    <p className="text-xs text-slate-400 mb-1">Falta acumular</p>
                    <p className="text-base font-extrabold text-[#0A1628]">{formatEur(falta)}</p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-4 text-center">
                    <p className="text-xs text-[#1D4ED8] mb-1">Tempo estimado</p>
                    <p className="text-base font-extrabold text-[#1D4ED8]">
                        {meses >= 600 ? "+50 anos" : `${anos}a ${mesesResto}m`}
                    </p>
                </div>
                <div className="bg-[#0A1628] rounded-2xl p-4 text-center">
                    <p className="text-xs text-slate-400 mb-1">Renda mensal</p>
                    <p className="text-base font-extrabold text-white">{formatEur(meta * 0.04 / 12)}</p>
                </div>
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
                    onChange={(e) => setTaxa(Number(e.target.value))}
                    className="w-full accent-blue-600" />
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
                        <CalculadoraRegra72 />
                    </div>
                </div>
            </div>
            <FooterSection />
        </div>
    );
}
