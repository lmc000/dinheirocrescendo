import { TrendingUp, PiggyBank, BarChart2, Building2, FileText, Globe, Landmark, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const CATEGORIES = [
    { id: "etfs", label: "ETFs", icon: TrendingUp, desc: "Fundos índice e diversificação" },
    { id: "poupanca", label: "Poupança", icon: PiggyBank, desc: "Hábitos e estratégias" },
    { id: "acoes", label: "Ações", icon: BarChart2, desc: "Bolsa e dividendos" },
    { id: "corretoras", label: "Corretoras", icon: Building2, desc: "Comparação de plataformas" },
    { id: "impostos", label: "Impostos", icon: FileText, desc: "IR e ganhos de capital" },
    { id: "internacional", label: "Internacional", icon: Globe, desc: "Investir no exterior" },
    { id: "reforma", label: "Aposentadoria", icon: Landmark, desc: "Previdência e planejamento" },
    { id: "basicos", label: "Básicos", icon: Lightbulb, desc: "Começar do zero" },
];

export const Categories = () => {
    return (
        <section id="categorias" className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28" style={{ background: "#0F2044" }}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block bg-[#1D4ED8]/20 text-[#60A5FA] text-sm font-bold px-4 py-1.5 rounded-full mb-4 border border-[#1D4ED8]/30">
                            📚 Explore por tema
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                            Tudo sobre investimento,
                            <br />organizado para você.
                        </h2>
                    </div>
                    <p className="text-slate-400 text-base md:text-lg max-w-md">
                        Do básico ao avançado. Conteúdo adaptado à realidade fiscal e financeira brasileira.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <Link key={cat.id} to={`/blog?categoria=${cat.id}`}
                                className="group bg-[#0A1628] rounded-3xl border border-[#1E3A5F] p-4 md:p-5 aspect-square flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1 hover:border-[#1D4ED8]">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-2 transition-all group-hover:scale-110 bg-[#1D4ED8]/10">
                                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#3B82F6]" strokeWidth={2.25} />
                                </div>
                                <span className="font-bold text-white text-xs md:text-sm">{cat.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Categories;
