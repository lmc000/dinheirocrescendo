import { useState } from "react";
import { Search, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "../components/landing/Header";
import { FooterSection } from "../components/landing/FooterSection";
import artigos from "../data/artigos";

const CATEGORIAS = [
    { id: "todos", label: "Todos" },
    { id: "etfs", label: "ETFs" },
    { id: "poupanca", label: "Poupança" },
    { id: "corretoras", label: "Corretoras" },
    { id: "impostos", label: "Impostos" },
    { id: "reforma", label: "Reforma" },
    { id: "internacional", label: "Internacional" },
    { id: "basicos", label: "Básicos" },
];

export default function Blog() {
    const [search, setSearch] = useState("");
    const [categoria, setCategoria] = useState("todos");

    const filtered = artigos.filter((a) => {
        const matchSearch = a.titulo.toLowerCase().includes(search.toLowerCase()) ||
            a.descricao.toLowerCase().includes(search.toLowerCase());
        const matchCat = categoria === "todos" || a.categoria === categoria;
        return matchSearch && matchCat;
    });

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <Header />
            <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <span className="inline-block bg-blue-50 text-[#1D4ED8] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                            📖 Todos os artigos
                        </span>
                        <h1 className="text-4xl font-extrabold text-[#0A1628] mb-4">
                            Guias de Investimento
                        </h1>
                        <p className="text-slate-500 text-lg max-w-2xl">
                            Artigos sobre ETFs, corretoras, poupança e finanças pessoais adaptados à realidade portuguesa.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Pesquisar artigos..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-200 bg-white text-[#0A1628] placeholder-slate-400 focus:outline-none focus:border-[#1D4ED8] shadow-sm"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {CATEGORIAS.map((cat) => (
                                <button key={cat.id}
                                    onClick={() => setCategoria(cat.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                                        categoria === cat.id
                                            ? "bg-[#1D4ED8] text-white shadow-md"
                                            : "bg-white border border-slate-200 text-slate-600 hover:border-[#1D4ED8]"
                                    }`}>
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {filtered.length === 0 ? (
                        <div className="text-center py-20 text-slate-400">
                            Nenhum artigo encontrado.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map((artigo) => (
                                <Link key={artigo.slug} to={`/blog/${artigo.slug}`}
                                    className="group bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs font-bold bg-blue-50 text-[#1D4ED8] px-3 py-1 rounded-full capitalize">
                                            {artigo.categoria}
                                        </span>
                                    </div>
                                    <h2 className="font-extrabold text-[#0A1628] text-lg leading-snug mb-3 group-hover:text-[#1D4ED8] transition-colors flex-1">
                                        {artigo.titulo}
                                    </h2>
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
                    )}
                </div>
            </div>
            <FooterSection />
        </div>
    );
}
