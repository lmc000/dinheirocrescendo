import { ArrowRight, Shield, BookOpen, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-24 pb-16 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0A1628 0%, #0F2044 50%, #0A1628 100%)" }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "#1D4ED8" }} />
                <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: "#3B82F6" }} />
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl -translate-x-1/2 -translate-y-1/2" style={{ background: "#60A5FA" }} />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-flex items-center gap-2 bg-[#1E3A5F]/60 backdrop-blur-sm border border-[#1D4ED8]/40 text-[#60A5FA] text-sm font-bold px-4 py-2 rounded-full mb-6 shadow-sm">
                            📈 Guias de investimento para brasileiros
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white mb-6" style={{ lineHeight: "1.3" }}>
                            Aprenda a fazer o seu{" "}
                            <span style={{ color: "#3B82F6" }}>dinheiro crescer</span>{" "}
                            por você. 💰
                        </h1>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                            Guias honestos sobre ETFs, corretoras, poupança e investimento adaptados à realidade brasileira. Sem jargão, sem promessas falsas.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/blog"
                                className="inline-flex items-center gap-2 text-white rounded-full px-7 py-4 font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                style={{ background: "linear-gradient(135deg, #1D4ED8, #1E40AF)" }}>
                                Ver Guias de Investimento <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/corretoras"
                                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-7 py-4 font-bold transition-all hover:bg-white/20 hover:shadow-md">
                                🏦 Comparar Corretoras
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-[#1E3A5F]">
                            <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                                <Shield className="w-4 h-4 text-[#3B82F6]" /> Conteúdo independente
                            </div>
                            <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                                <BookOpen className="w-4 h-4 text-[#3B82F6]" /> Adaptado ao Brasil
                            </div>
                            <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                                <TrendingUp className="w-4 h-4 text-[#3B82F6]" /> Atualizado em 2026
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex justify-center relative">
                        <div className="relative w-full max-w-lg">
                            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20 scale-95" style={{ background: "#1D4ED8" }} />
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#1E3A5F]" style={{ aspectRatio: "4/3" }}>
                                <img
                                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80"
                                    alt="Investimento e finanças pessoais"
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-[#0F2044] rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-[#1E3A5F]">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#1D4ED8]/20">
                                    📊
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-medium">Melhor corretora 2026</p>
                                    <p className="text-sm font-bold text-white">XP — corretagem R$ 0</p>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 bg-[#0F2044] rounded-2xl shadow-xl px-4 py-3 border border-[#1E3A5F]">
                                <p className="text-xs text-slate-400 mb-1">Retorno médio histórico</p>
                                <p className="text-sm font-bold text-[#3B82F6]">S&P 500: +10,5%/ano</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
