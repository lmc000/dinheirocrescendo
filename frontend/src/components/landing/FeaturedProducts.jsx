import { ExternalLink, Star, CheckCircle } from "lucide-react";

const CORRETORAS = [
    {
        nome: "XTB",
        tag: "⭐ Recomendada",
        descricao: "A nossa recomendação principal. Zero comissões, suporte em português e conta demo gratuita para aprender sem risco.",
        rating: 4.9,
        destaque: ["Suporte em português", "Zero comissões", "Conta demo grátis"],
        link: "https://geolink.xtb.com/ETemo",
        cor: "#1D4ED8",
    },
    {
        nome: "DEGIRO",
        tag: "🇵🇹 Regulada CMVM",
        descricao: "Registada na CMVM portuguesa. ETFs europeus core gratuitos e relatório fiscal específico para Portugal.",
        rating: 4.7,
        destaque: ["ETFs gratuitos", "Regulada CMVM", "Relatório fiscal PT"],
        link: "https://www.degiro.pt",
        cor: "#059669",
    },
    {
        nome: "Trading 212",
        tag: "🆓 Para começar",
        descricao: "Zero comissões em tudo e fractional shares a partir de 1€. Ideal para quem começa com pouco capital.",
        rating: 4.5,
        destaque: ["0€ comissões", "Fractional shares", "Depósito 1€"],
        link: "https://www.trading212.com",
        cor: "#7C3AED",
    },
];

export const FeaturedProducts = () => {
    return (
        <section id="corretoras" className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block bg-blue-50 text-[#1D4ED8] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                            🏦 Melhores corretoras 2026
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A1628] leading-tight">
                            Onde investir em Portugal
                        </h2>
                    </div>
                    <p className="text-slate-500 text-base md:text-lg max-w-md">
                        Comparámos as principais corretoras disponíveis para portugueses em 2026.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {CORRETORAS.map((c) => (
                        <div key={c.nome} className="group bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <span className="text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block" style={{ background: c.cor + "15", color: c.cor }}>
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
            </div>
        </section>
    );
};

export default FeaturedProducts;
