import { ExternalLink, Star, CheckCircle, BookOpen } from "lucide-react";

const CORRETORAS = [
    {
        nome: "XP Investimentos",
        tag: "⭐ Recomendada",
        descricao: "A nossa recomendação principal. Corretagem zero, a maior prateleira de produtos do Brasil e plataforma completa.",
        rating: 4.9,
        destaque: ["Corretagem R$ 0", "Tesouro, CDBs, ETFs e ações", "Sem depósito mínimo"],
        link: "https://xp.com.br",
        cor: "#1D4ED8",
        tipo: "corretora",
    },
    {
        nome: "NuInvest",
        tag: "💜 Para quem usa Nubank",
        descricao: "A corretora do Nubank. Integração total com a conta digital e a interface mais amigável para iniciantes.",
        rating: 4.5,
        destaque: ["Corretagem R$ 0", "Integração com Nubank", "Fundos cripto"],
        link: "https://nuinvest.com.br",
        cor: "#7C3AED",
        tipo: "corretora",
    },
];

const CURSOS = [
    {
        nome: "Aprenda a Investir seu Dinheiro",
        plataforma: "Udemy",
        tag: "📚 Mais de 48.000 alunos",
        descricao: "Do zero à carteira completa — renda fixa, ações, ETFs, fundos e Tesouro Direto. Inclui 3 cursos extra de bônus.",
        rating: 4.7,
        destaque: ["Renda Fixa + ETFs + Ações", "Tesouro Direto incluído", "Garantia de 30 dias"],
        link: "https://trk.udemy.com/5ky1Wo",
        cor: "#A435F0",
        tipo: "curso",
    },
    {
        nome: "Geração de Renda com FIIs",
        plataforma: "Udemy",
        tag: "🏢 Renda passiva mensal",
        descricao: "Aprenda a investir em Fundos Imobiliários e receber proventos todo mês. Do zero à carteira de FIIs diversificada.",
        rating: 4.6,
        destaque: ["Mais de 20h de conteúdo", "Análise de FIIs na prática", "Sem conhecimento prévio"],
        link: "https://trk.udemy.com/vDQEGW",
        cor: "#059669",
        tipo: "curso",
    },
    {
        nome: "Investimento em Renda Fixa",
        plataforma: "Udemy",
        tag: "🔒 Do básico ao avançado",
        descricao: "CDB, LCI, LCA, Tesouro Direto e estratégias avançadas para maximizar rentabilidade na renda fixa brasileira.",
        rating: 4.8,
        destaque: ["CDB, LCI, LCA, Tesouro", "Estratégias avançadas", "Gestão ativa da carteira"],
        link: "https://trk.udemy.com/enekd1",
        cor: "#D97706",
        tipo: "curso",
    },
];

export const FeaturedProducts = () => {
    return (
        <section id="corretoras" className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Corretoras */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block bg-blue-50 text-[#1D4ED8] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                            🏦 Melhores corretoras 2026
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A1628] leading-tight">
                            Onde investir no Brasil
                        </h2>
                    </div>
                    <p className="text-slate-500 text-base md:text-lg max-w-md">
                        Comparamos as principais corretoras disponíveis para brasileiros em 2026.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {CORRETORAS.map((c) => (
                        <div key={c.nome}
                            className="group bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <span className="text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block"
                                        style={{ background: c.cor + "15", color: c.cor }}>
                                        {c.tag}
                                    </span>
                                    <h3 className="text-xl font-extrabold text-[#0A1628]">{c.nome}</h3>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    <span className="font-bold text-[#0A1628] text-sm">{c.rating}</span>
                                </div>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{c.descricao}</p>
                            <ul className="space-y-2 mb-6">
                                {c.destaque.map((d) => (
                                    <li key={d} className="flex items-center gap-2 text-sm text-slate-600">
                                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: c.cor }} />
                                        {d}
                                    </li>
                                ))}
                            </ul>
                            <a href={c.link} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 text-white rounded-full px-5 py-3 font-bold text-sm transition-all hover:opacity-90"
                                style={{ background: c.cor }}>
                                Abrir conta <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Cursos Udemy */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block bg-purple-50 text-[#A435F0] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                            📚 Cursos recomendados
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A1628] leading-tight">
                            Aprenda a investir melhor
                        </h2>
                    </div>
                    <p className="text-slate-500 text-base md:text-lg max-w-md">
                        Cursos em português, com garantia de reembolso de 30 dias.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {CURSOS.map((c) => (
                        <div key={c.nome}
                            className="group bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <span className="text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block"
                                        style={{ background: c.cor + "15", color: c.cor }}>
                                        {c.tag}
                                    </span>
                                    <h3 className="text-lg font-extrabold text-[#0A1628] leading-snug">{c.nome}</h3>
                                    <span className="text-xs text-slate-400 font-medium">{c.plataforma}</span>
                                </div>
                                <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    <span className="font-bold text-[#0A1628] text-sm">{c.rating}</span>
                                </div>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{c.descricao}</p>
                            <ul className="space-y-2 mb-6">
                                {c.destaque.map((d) => (
                                    <li key={d} className="flex items-center gap-2 text-sm text-slate-600">
                                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: c.cor }} />
                                        {d}
                                    </li>
                                ))}
                            </ul>
                            <a href={c.link} target="_blank" rel="noopener sponsored"
                                className="inline-flex items-center justify-center gap-2 text-white rounded-full px-5 py-3 font-bold text-sm transition-all hover:opacity-90"
                                style={{ background: c.cor }}>
                                <BookOpen className="w-4 h-4" />
                                Ver curso na Udemy <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>

                <p className="text-center text-slate-400 text-xs mt-8">
                    Links de afiliado Udemy — se você comprar, recebemos uma pequena comissão sem custo extra para você.
                </p>

            </div>
        </section>
    );
};

export default FeaturedProducts;
