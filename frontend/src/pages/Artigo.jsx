import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, AlertCircle } from "lucide-react";
import { Header } from "../components/landing/Header";
import { FooterSection } from "../components/landing/FooterSection";
import artigos from "../data/artigos";

function parseLine(text) {
    // Bold **texto**
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={i} className="font-bold text-[#0A1628]">{part.slice(2, -2)}</strong>;
        }
        // Links [texto](url)
        const linkParts = part.split(/(\[[^\]]+\]\([^)]+\))/g);
        return linkParts.map((lp, j) => {
            const match = lp.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
            if (match) {
                return (
                    <a key={j} href={match[2]} target="_blank" rel="noopener noreferrer"
                        className="text-[#1D4ED8] font-semibold hover:underline inline-flex items-center gap-1">
                        {match[1]} →
                    </a>
                );
            }
            return lp;
        });
    });
}

function renderContent(content) {
    const lines = content.split("\n");
    const elements = [];
    let key = 0;
    let i = 0;

    while (i < lines.length) {
        const line = lines[i];

        if (line.trim() === "" || line.trim() === "---") {
            if (line.trim() === "---") {
                elements.push(<hr key={key++} className="border-slate-200 my-8" />);
            }
            i++;
            continue;
        }

        // Tabela
        if (line.includes("|") && lines[i + 1]?.includes("|---")) {
            const tableLines = [];
            while (i < lines.length && lines[i].includes("|")) {
                tableLines.push(lines[i]);
                i++;
            }
            const headers = tableLines[0].split("|").filter(Boolean).map(h => h.trim());
            const rows = tableLines.slice(2).map(r => r.split("|").filter(Boolean).map(c => c.trim()));
            elements.push(
                <div key={key++} className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-[#0A1628] text-white">
                                {headers.map((h, j) => <th key={j} className="px-4 py-3 text-left font-bold">{h}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, j) => (
                                <tr key={j} className={j % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    {row.map((cell, k) => <td key={k} className="px-4 py-3 border-b border-slate-100 text-slate-700">{parseLine(cell)}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
            continue;
        }

        // H2
        if (line.startsWith("## ")) {
            elements.push(<h2 key={key++} className="text-2xl font-extrabold text-[#0A1628] mt-10 mb-4">{line.slice(3)}</h2>);
            i++; continue;
        }

        // H3
        if (line.startsWith("### ")) {
            elements.push(<h3 key={key++} className="text-xl font-bold text-[#0A1628] mt-8 mb-3">{line.slice(4)}</h3>);
            i++; continue;
        }

        // Lista com - ou *
        if (line.startsWith("- ") || line.startsWith("* ")) {
            const items = [];
            while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
                items.push(lines[i].slice(2)); i++;
            }
            elements.push(
                <ul key={key++} className="list-disc list-inside space-y-2 my-4 text-slate-600">
                    {items.map((item, j) => <li key={j} className="leading-relaxed">{parseLine(item)}</li>)}
                </ul>
            );
            continue;
        }

        // Parágrafo
        elements.push(<p key={key++} className="text-slate-600 leading-relaxed my-3">{parseLine(line)}</p>);
        i++;
    }

    return elements;
}

export default function Artigo() {
    const { slug } = useParams();
    const artigo = artigos.find((a) => a.slug === slug);

    if (!artigo) {
        return (
            <div className="min-h-screen bg-[#F8FAFC]">
                <Header />
                <div className="pt-40 text-center text-slate-500">
                    <p className="text-xl font-bold text-[#0A1628] mb-4">Artigo não encontrado</p>
                    <Link to="/blog" className="text-[#1D4ED8] font-bold hover:underline">← Voltar ao blog</Link>
                </div>
                <FooterSection />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <Header />
            <main className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl mx-auto">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-[#1D4ED8] font-bold mb-8 hover:gap-3 transition-all">
                        <ArrowLeft className="w-4 h-4" /> Voltar ao blog
                    </Link>

                    <span className="inline-block bg-blue-50 text-[#1D4ED8] text-sm font-bold px-4 py-1.5 rounded-full mb-4 capitalize">
                        {artigo.categoria}
                    </span>

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628] leading-tight mb-6">
                        {artigo.titulo}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-8 pb-8 border-b border-slate-200">
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {artigo.tempoLeitura}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {artigo.data}</span>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 flex gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-800">
                            <strong>Aviso:</strong> Este artigo é de caráter informativo e não constitui aconselhamento financeiro. Investe sempre de acordo com o teu perfil de risco e objetivos pessoais.
                        </p>
                    </div>

                    <div className="prose max-w-none">{renderContent(artigo.conteudo)}</div>
                </div>
            </main>
            <FooterSection />
        </div>
    );
}
