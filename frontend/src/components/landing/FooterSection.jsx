import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const FooterSection = () => {
    return (
        <footer className="bg-[#0A1628] border-t border-[#1E3A5F] px-6 md:px-12 lg:px-24 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-9 h-9 rounded-full bg-[#1D4ED8] flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </span>
                            <span className="font-extrabold text-lg text-white">Aprender a Investir</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Guias honestos sobre investimento, poupança e finanças pessoais para portugueses. Conteúdo independente, sem publicidade.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Navegar</h4>
                        <ul className="space-y-2">
                            {[
                                { label: "Início", href: "/" },
                                { label: "Artigos", href: "/blog" },
                                { label: "Corretoras", href: "/corretoras" },
                                { label: "Ferramentas", href: "/ferramentas" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link to={item.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Temas</h4>
                        <ul className="space-y-2">
                            {["ETFs", "Ações", "Poupança", "Impostos", "Reforma"].map((t) => (
                                <li key={t}>
                                    <Link to={`/blog?categoria=${t.toLowerCase()}`} className="text-slate-400 hover:text-white text-sm transition-colors">
                                        {t}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="border-t border-[#1E3A5F] pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <p className="text-slate-500 text-xs">
                        © 2026 Aprender a Investir. Este site contém links de afiliado. Não constitui aconselhamento financeiro.
                    </p>
                    <Link to="/privacidade" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
                        Política de Privacidade
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
