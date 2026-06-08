import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import artigos from "../../data/artigos";

export const RecentArticles = () => {
    const recentes = artigos.slice(0, 6);

    return (
        <section className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28" style={{ background: "#F8FAFC" }}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block bg-blue-50 text-[#1D4ED8] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                            📖 Últimos artigos
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A1628] leading-tight">
                            Guias e análises recentes
                        </h2>
                    </div>
                    <Link to="/blog"
                        className="inline-flex items-center gap-2 text-[#1D4ED8] font-bold hover:gap-3 transition-all">
                        Ver todos os artigos <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recentes.map((artigo) => (
                        <Link key={artigo.slug} to={`/blog/${artigo.slug}`}
                            className="group bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs font-bold bg-blue-50 text-[#1D4ED8] px-3 py-1 rounded-full capitalize">
                                    {artigo.categoria}
                                </span>
                            </div>
                            <h3 className="font-extrabold text-[#0A1628] text-lg leading-snug mb-3 group-hover:text-[#1D4ED8] transition-colors flex-1">
                                {artigo.titulo}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                                {artigo.descricao}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                <div className="flex items-center gap-1 text-slate-400 text-xs">
                                    <Clock className="w-3.5 h-3.5" />
                                    {artigo.tempoLeitura}
                                </div>
                                <span className="text-[#1D4ED8] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Ler <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentArticles;
