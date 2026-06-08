import { Mail } from "lucide-react";

export const Newsletter = () => {
    return (
        <section className="relative px-6 md:px-12 lg:px-24 py-20" style={{ background: "#0F2044" }}>
            <div className="max-w-3xl mx-auto text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#1D4ED8]/20 flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-7 h-7 text-[#3B82F6]" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                    Recebe os melhores guias
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                    Artigos sobre ETFs, corretoras e poupança adaptados à realidade portuguesa. Sem spam.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="O teu email"
                        className="flex-1 px-5 py-3 rounded-full bg-[#0A1628] border border-[#1E3A5F] text-white placeholder-slate-500 focus:outline-none focus:border-[#1D4ED8]"
                    />
                    <button type="submit"
                        className="bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold px-6 py-3 rounded-full transition-colors whitespace-nowrap">
                        Subscrever
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
