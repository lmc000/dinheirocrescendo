import { ExternalLink, CheckCircle, XCircle, Star, Shield } from "lucide-react";
import { Header } from "../components/landing/Header";
import { FooterSection } from "../components/landing/FooterSection";

const CORRETORAS = [
    {
        nome: "XP Investimentos",
        tag: "⭐ Recomendada para o Brasil",
        tagColor: "#1D4ED8",
        descricao: "A nossa recomendação principal para brasileiros. Corretagem zero em ações e ETFs, a maior prateleira de produtos do país e plataforma completa para todos os níveis.",
        rating: 4.9,
        link: "PLACEHOLDER_XP_LINK",
        pros: [
            "Corretagem zero em ações, ETFs e FIIs",
            "Maior variedade de produtos do Brasil",
            "Tesouro Direto, CDBs, fundos, BDRs e cripto",
            "Conteúdo educativo gratuito de qualidade",
            "App e home broker completos",
            "Sem depósito mínimo",
        ],
        cons: [
            "Oferta gigante pode confundir iniciantes",
            "Alguns fundos da prateleira têm taxas altas",
        ],
        detalhe: [
            { label: "Corretagem ETFs", value: "R$ 0" },
            { label: "Corretagem ações", value: "R$ 0" },
            { label: "Regulação", value: "CVM + Banco Central" },
            { label: "Depósito mínimo", value: "R$ 0" },
            { label: "Tesouro Direto", value: "Taxa zero" },
        ],
    },
    {
        nome: "Rico",
        tag: "🟢 Simplicidade",
        tagColor: "#059669",
        descricao: "Do mesmo grupo da XP, com interface mais simples e direta. Ideal para quem quer praticidade sem abrir mão da variedade de produtos.",
        rating: 4.7,
        link: "PLACEHOLDER_RICO_LINK",
        pros: [
            "Corretagem zero em ações e ETFs",
            "Interface simples e intuitiva",
            "Tesouro Direto sem taxa de custódia",
            "Sem depósito mínimo",
            "Boa prateleira de renda fixa",
        ],
        cons: [
            "Menos ferramentas avançadas que a XP",
            "Sem assessoria dedicada",
        ],
        detalhe: [
            { label: "Corretagem ETFs", value: "R$ 0" },
            { label: "Corretagem ações", value: "R$ 0" },
            { label: "Regulação", value: "CVM + Banco Central" },
            { label: "Depósito mínimo", value: "R$ 0" },
            { label: "Tesouro Direto", value: "Taxa zero" },
        ],
    },
    {
        nome: "NuInvest",
        tag: "💜 Para quem usa Nubank",
        tagColor: "#7C3AED",
        descricao: "A corretora do Nubank. Integração total com a conta digital e a interface mais amigável do mercado — perfeita para o primeiro investimento.",
        rating: 4.5,
        link: "PLACEHOLDER_NUINVEST_LINK",
        pros: [
            "Corretagem zero em ações e ETFs",
            "Integração total com a conta Nubank",
            "Interface mais amigável do mercado",
            "Fundos cripto disponíveis",
        ],
        cons: [
            "Prateleira de renda fixa menor que XP/Rico",
            "Menos ferramentas para investidores avançados",
        ],
        detalhe: [
            { label: "Corretagem ETFs", value: "R$ 0" },
            { label: "Corretagem ações", value: "R$ 0" },
            { label: "Regulação", value: "CVM + Banco Central" },
            { label: "Depósito mínimo", value: "R$ 0" },
            { label: "Fundos cripto", value: "Sim" },
        ],
    },
    {
        nome: "Clear",
        tag: "📊 Para traders",
        tagColor: "#0891B2",
        descricao: "Corretagem zero absoluta e plataformas rápidas de execução. A favorita de quem faz day trade e operações frequentes.",
        rating: 4.4,
        link: "PLACEHOLDER_XP_LINK",
        pros: [
            "Corretagem zero em tudo, inclusive day trade",
            "Plataformas rápidas de execução",
            "Boa para operações alavancadas",
        ],
        cons: [
            "Focada em trading, não em quem busca simplicidade",
            "Prateleira de produtos limitada",
        ],
        detalhe: [
            { label: "Corretagem ETFs", value: "R$ 0" },
            { label: "Corretagem day trade", value: "R$ 0" },
            { label: "Regulação", value: "CVM + Banco Central" },
            { label: "Depósito mínimo", value: "R$ 0" },
            { label: "Ideal para", value: "Traders ativos" },
        ],
    },
    {
        nome: "Avenue",
        tag: "🇺🇸 Para investir nos EUA",
        tagColor: "#DC2626",
        descricao: "Conta internacional em dólar feita para brasileiros. Ações americanas, ETFs como VOO e VT, e REITs — com fração de ações a partir de poucos dólares.",
        rating: 4.6,
        link: "PLACEHOLDER_AVENUE_LINK",
        pros: [
            "Conta em dólar nos EUA com CPF brasileiro",
            "Fração de ações — comece com poucos dólares",
            "Acesso a milhares de ações e ETFs americanos",
            "Remessa de câmbio simplificada",
        ],
        cons: [
            "Declaração de IR um pouco mais trabalhosa (ativos no exterior)",
            "Spread cambial na remessa",
        ],
        detalhe: [
            { label: "Corretagem", value: "Planos com US$ 0" },
            { label: "Regulação", value: "SEC + FINRA (EUA)" },
            { label: "Depósito mínimo", value: "US$ 0" },
            { label: "Fração de ações", value: "Sim" },
            { label: "Ideal para", value: "Dolarizar a carteira" },
        ],
    },
    {
        nome: "Binance",
        tag: "🪙 Para criptomoedas",
        tagColor: "#D97706",
        descricao: "A maior exchange de criptomoedas do mundo, com depósito via PIX. Para quem quer comprar Bitcoin e outras criptos diretamente.",
        rating: 4.3,
        link: "PLACEHOLDER_BINANCE_LINK",
        pros: [
            "Depósito e saque via PIX em reais",
            "Maior liquidez do mercado cripto",
            "Centenas de criptomoedas disponíveis",
            "Taxas de negociação baixas",
        ],
        cons: [
            "Cripto é a classe de ativo mais volátil — limite a 1-5% da carteira",
            "Exige cuidado redobrado com segurança (2FA)",
        ],
        detalhe: [
            { label: "Depósito", value: "PIX (R$)" },
            { label: "Taxa spot", value: "~0,10%" },
            { label: "Criptomoedas", value: "Centenas" },
            { label: "Depósito mínimo", value: "~R$ 20" },
            { label: "Ideal para", value: "Exposição a cripto" },
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
                            Melhores Corretoras do Brasil em 2026
                        </h1>
                        <p className="text-slate-500 text-lg max-w-2xl">
                            Comparamos as principais corretoras disponíveis para residentes no Brasil — taxas reais, segurança e facilidade de uso.
                        </p>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-10 flex gap-3 max-w-2xl">
                        <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-800">
                            <strong>Nota:</strong> Este site contém links de afiliados de corretoras parceiras. As recomendações são baseadas em análise independente e isso não tem nenhum custo para você.
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
                                    Abrir conta na {c.nome} <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <FooterSection />
        </div>
    );
}
