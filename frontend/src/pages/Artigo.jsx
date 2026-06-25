import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, AlertCircle, ExternalLink } from "lucide-react";
import { Header } from "../components/landing/Header";
import { FooterSection } from "../components/landing/FooterSection";
import artigos from "../data/artigos";

function parseLine(text) {
    // Regex que apanha: bold+link **[texto](url)**, link [texto](url), bold **texto**, isoladamente
    const regex = /\*\*\[([^\]]+)\]\(([^)]+)\)\*\*|\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
    const parts = [];
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = regex.exec(text)) !== null) {
        // texto antes do match
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }

        if (match[1] && match[2]) {
            // **[texto](url)** — bold + link
            parts.push(
                <a key={key++} href={match[2]} target="_blank" rel="sponsored noopener noreferrer"
                    className="text-[#1D4ED8] font-bold hover:underline inline-flex items-center gap-1">
                    {match[1]} →
                </a>
            );
        } else if (match[3] && match[4]) {
            // [texto](url) — link simples
            parts.push(
                <a key={key++} href={match[4]} target="_blank" rel="sponsored noopener noreferrer"
                    className="text-[#1D4ED8] font-semibold hover:underline inline-flex items-center gap-1">
                    {match[3]} →
                </a>
            );
        } else if (match[5]) {
            // **texto** — bold simples
            parts.push(
                <strong key={key++} className="font-bold text-[#0A1628]">{match[5]}</strong>
            );
        }

        lastIndex = regex.lastIndex;
    }

    // texto restante
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts.length === 0 ? text : parts;
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

function extractTOC(conteudo) {
    return conteudo.split('\n')
        .filter(l => l.startsWith('## '))
        .map(l => l.slice(3).trim())
        .slice(0, 8);
}

function extractFAQs(conteudo) {
    const lines = conteudo.split('\n');
    const faqs = [];
    let q = null, a = [];
    for (const line of lines) {
        if (line.startsWith('## ')) {
            if (q && a.length > 0) faqs.push({ q, a: a.join(' ').trim() });
            q = line.slice(3).trim().replace(/—.*$/, '').trim();
            if (!q.endsWith('?')) q += '?';
            a = [];
        } else if (q && line.trim() && !line.startsWith('#') && !line.startsWith('|') && !line.startsWith('-') && !line.startsWith('>')) {
            a.push(line.trim());
        }
    }
    if (q && a.length > 0) faqs.push({ q, a: a.join(' ').trim() });
    return faqs.filter(f => f.a.length > 40).slice(0, 5);
}
export default function Artigo() {
    const { slug } = useParams();
    const artigo = artigos.find((a) => a.slug === slug);
    const toc = artigo ? extractTOC(artigo.conteudo) : [];
    const related = artigo ? artigos.filter(a => a.slug !== artigo.slug && a.categoria === artigo.categoria).slice(0, 3) : [];
    const shareUrl = artigo ? `https://www.dinheirocrescendo.com.br/blog/$`{artigo.slug}` : '';

    useEffect(() => {
        if (!artigo) return;
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', 'article');
        script.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": artigo.titulo,
            "description": artigo.descricao,
            "datePublished": artigo.data,
            "dateModified": artigo.data,
            "image": `https://www.dinheirocrescendo.com.br/images/artigos/${artigo.slug}.jpg`,
            "author": { "@type": "Person", "name": "Luís Costa", "url": "https://www.dinheirocrescendo.com.br/sobre" },
            "url": `https://www.dinheirocrescendo.com.br/blog/${artigo.slug}`,
            "inLanguage": "pt-BR",
            "publisher": {
                "@type": "Organization",
                "name": "Dinheiro Crescendo",
                "url": "https://www.dinheirocrescendo.com.br"
            }
        });
        document.head.appendChild(script);
        return () => { try { document.head.removeChild(script); } catch(e) {} };
    }, [artigo]);
    useEffect(() => {
        if (!artigo) return;
        const scripts = [];

        // FAQ schema
        const faqs = extractFAQs(artigo.conteudo);
        if (faqs.length >= 2) {
            const fs = document.createElement('script');
            fs.type = 'application/ld+json';
            fs.setAttribute('data-schema', 'faq');
            fs.text = JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": { "@type": "Answer", "text": f.a.substring(0, 500) }
                }))
            });
            document.head.appendChild(fs);
            scripts.push(fs);
        }

        // BreadcrumbList schema
        const bs = document.createElement('script');
        bs.type = 'application/ld+json';
        bs.setAttribute('data-schema', 'breadcrumb');
        bs.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.dinheirocrescendo.com.br" },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.dinheirocrescendo.com.br/blog" },
                { "@type": "ListItem", "position": 3, "name": artigo.titulo, "item": `https://www.dinheirocrescendo.com.br/blog/${artigo.slug}` }
            ]
        });
        document.head.appendChild(bs);
        scripts.push(bs);

        return () => { scripts.forEach(s => { try { document.head.removeChild(s); } catch(e) {} }); };
    }, [artigo]);

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
                            <strong>Aviso:</strong> Este artigo é de caráter informativo e não constitui aconselhamento financeiro. Invista sempre de acordo com o seu perfil de risco e objetivos pessoais.
                        </p>
                    </div>

                    
                    {toc.length >= 3 && (
                        <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Neste artigo</p>
                            <ol className="space-y-1.5 list-none">
                                {toc.map((text, i) => (
                                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                                        <span className="font-bold text-gray-300">{i + 1}.</span>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    )}

                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-sm text-gray-500 font-medium">Partilhar:</span>
                        <a href={`https://wa.me/?text=${encodeURIComponent(artigo.titulo + ' ' + shareUrl)}`}
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-bold px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                            WhatsApp
                        </a>
                        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(artigo.titulo)}&url=${encodeURIComponent(shareUrl)}`}
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 bg-black text-white text-xs font-bold px-4 py-2 rounded-full hover:opacity-80 transition-opacity">
                            𝕏 Twitter
                        </a>
                    </div>
<div className="prose max-w-none">{renderContent(artigo.conteudo)}
                    {related.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-base font-bold text-gray-700 mb-4">Artigos relacionados</h3>
                            <div className="grid gap-3 sm:grid-cols-3">
                                {related.map(a => (
                                    <Link key={a.slug} to={`/blog/${a.slug}`} className="block p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                                        <p className="font-semibold text-gray-800 text-sm leading-snug mb-1">{a.titulo}</p>
                                        <p className="text-xs text-gray-400">{a.tempoLeitura}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}</div>
                </div>
            </main>
            <FooterSection />
        </div>
    );
}
