import { ExternalLink, CheckCircle, XCircle, Star, Shield } from "lucide-react";
import { Header } from "../components/landing/Header";
import { FooterSection } from "../components/landing/FooterSection";

const CORRETORAS = [
    {
        nome: "XTB",
        tag: "⭐ Recomendada para Portugal",
        tagColor: "#1D4ED8",
        descricao: "A nossa recomendação principal para portugueses. Zero comissões sem restrições, suporte telefónico em português e conta demo gratuita para aprender sem risco.",
        rating: 4.9,
        link: "https://geolink.xtb.com/ETemo",
        linkDemo: "https://geolink.xtb.com/0BKjy",
        pros: [
            "Suporte telefónico e chat em português",
            "Zero comissões até 100.000€/mês sem restrições",
            "Conta demo gratuita para aprender",
            "Plataforma xStation 5 muito completa",
            "Fractional shares disponíveis",
            "Sem depósito mínimo",
        ],
        cons: [
            "Relatório fiscal requer algum trabalho manual",
            "Não registada na CMVM",
        ],
        detalhe: [
            { label: "Comissão ETFs", value: "0€ (até 100k€/mês)" },
            { label: "Comissão ações", value: "0€ (até 100k€/mês)" },
            { label: "Regulação", value: "CySEC + KNF" },
            { label: "Depósito mínimo", value: "0€" },
            { label: "Fractional shares", value: "Sim" },
        ],
    },
    {
        nome: "DEGIRO",
        tag: "🇵🇹 Regulada pela CMVM",
        tagColor: "#059669",
        descricao: "Registada na CMVM portuguesa. ETFs europeus core gratuitos uma vez por mês e relatório fiscal específico para Portugal.",
        rating: 4.7,
        link: "https://www.degiro.pt",
        pros: [
            "ETFs core gratuitos (IWDA, VWRA, CSPX...)",
            "Registada na CMVM Portugal",
            "Relatório fiscal específico para Portugal",
            "Sem depósito mínimo",
            "Muito boa reputação europeia",
        ],
        cons: [
            "ETFs core limitados a 1 compra/mês por ETF",
            "Sem fractional shares",
            "Sem suporte em português",
            "Interface menos moderna",
        ],
        detalhe: [
            { label: "Comissão ETFs", value: "0€ (core, 1x/mês)" },
            { label: "Comissão ações PT", value: "3,90€/ordem" },
            { label: "Regulação", value: "CMVM + AFM" },
            { label: "Depósito mínimo", value: "0€" },
            { label: "Fractional shares", value: "Não" },
        ],
    },
    {
        nome: "Trading212",
        tag: "🆓 Para começar com pouco",
        tagColor: "#7C3AED",
        descricao: "Zero comissões absolutas e fractional shares a partir de 1€. Perfeito para quem começa com capital reduzido.",
        rating: 4.5,
        link: "https://www.trading212.com",
        pros: [
            "Zero comissões em tudo",
            "Fractional shares a partir de 1€",
            "Interface muito intuitiva",
            "Depósito mínimo de 1€",
        ],
        cons: [
            "Sem suporte em português",
            "Não registada na CMVM",
            "Relatório fiscal básico",
        ],
        detalhe: [
            { label: "Comissão ETFs", value: "0€ sempre" },
            { label: "Comissão ações", value: "0€ sempre" },
            { label: "Regulação", value: "FCA + CySEC" },
            { label: "Depósito mínimo", value: "1€" },
            { label: "Fractional shares", value: "Sim (1€ mín.)" },
        ],
    },
    {
        nome: "Interactive Brokers",
        tag: "🔬 Para carteiras grandes",
        tagColor: "#DC2626",
        descricao: "A corretora dos investidores profissionais. Custos mínimos e acesso a todos os mercados globais. Ideal para carteiras acima de 50.000€.",
        rating: 4.6,
        link: "https://www.interactivebrokers.com",
        pros: [
            "Custos muito baixos para grandes volumes",
            "Acesso a praticamente todos os mercados",
            "Muito sólida e regulada",
        ],
        cons: [
            "Interface complexa para iniciantes",
            "Sem suporte em português",
            "Portugal excluído do programa de referral",
        ],
        detalhe: [
            { label: "Comissão ETFs", value: "0,05% (mín. 1$)" },
            { label: "Regulação", value: "SEC, FCA, múltiplas" },
            { label: "Depósito mínimo", value: "0€" },
            { label: "Fractional shares", value: "Sim" },
            { label: "Ideal para", value: "Carteiras 50k€+" },
        ],
    },
];

export default function Corretoras() {
    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <Header />
            <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <span className="inline-block bg-blue-50 text-[#1D4ED8] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                            🏦 Comparação de corretoras
                        </span>
                        <h1 className="text-4xl font-extrabold text-[#0A1628] mb-4">
                            Melhores Corretoras para Portugal em 2026
                        </h1>
                        <p className="text-slate-500 text-lg max-w-2xl">
                            Comparámos as principais corretoras disponíveis para residentes em Portugal — comissões reais, segurança e facilidade de uso.
                        </p>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-10 flex gap-3 max-w-2xl">
                        <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-800">
                            <strong>Nota:</strong> Este site não tem patrocínio de nenhuma corretora. As recomendações são baseadas em análise independente.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {CORRETORAS.map((c) => (
                            <div key={c.nome} className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-lg transition-all">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <span className="text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block"
                                            style={{ background: c.tagColor + "15", color: c.tagColor }}>
                                            {c.tag}
                                        </span>
                                        <h2 className="text-2xl font-extrabold text-[#0A1628]">{c.nome}</h2>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        <span className="font-bold text-[#0A1628]">{c.rating}</span>
                                    </div>
                                </div>

                                <p className="text-slate-500 text-sm leading-relaxed mb-6">{c.descricao}</p>

                                <div className="grid grid-cols-2 gap-2 mb-6">
                                    {c.detalhe.map((d) => (
                                        <div key={d.label} className="bg-slate-50 rounded-xl px-3 py-2">
                                            <p className="text-xs text-slate-400">{d.label}</p>
                                            <p className="text-sm font-bold text-[#0A1628]">{d.value}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase mb-2">Vantagens</p>
                                        <ul className="space-y-1.5">
                                            {c.pros.map((p) => (
                                                <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                                                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500" />
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase mb-2">Limitações</p>
                                        <ul className="space-y-1.5">
                                            {c.cons.map((con) => (
                                                <li key={con} className="flex items-start gap-2 text-sm text-slate-500">
                                                    <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-400" />
                                                    {con}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <a href={c.link} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 text-white rounded-full px-6 py-3 font-bold text-sm w-full transition-all hover:opacity-90 mb-2"
                                    style={{ background: c.tagColor }}>
                                    Abrir conta no {c.nome} <ExternalLink className="w-4 h-4" />
                                </a>
                                {c.linkDemo && (
                                    <a href={c.linkDemo} target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold text-sm w-full transition-all border-2 hover:opacity-80"
                                        style={{ borderColor: c.tagColor, color: c.tagColor }}>
                                        Experimentar conta demo gratuita
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <FooterSection />
        </div>
    );
}
