import { useState, useEffect } from "react";
import { TrendingUp, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
    { label: "Início", href: "/" },
    { label: "Artigos", href: "/blog" },
    { label: "Corretoras", href: "/corretoras" },
    { label: "Ferramentas", href: "/ferramentas" },
    { label: "Calculadoras", href: "/calculadoras/" },
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-[#0A1628]/95 backdrop-blur-xl border-b border-[#1E3A5F] shadow-lg" : "bg-transparent"
        }`}>
            <div className="px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <span className="w-10 h-10 rounded-full bg-[#1D4ED8] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="font-extrabold text-xl md:text-2xl text-white tracking-tight">
                        Dinheiro Crescendo
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <Link key={item.label} to={item.href}
                            className="text-slate-300 font-semibold hover:text-white transition-colors relative group">
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] rounded-full transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <Link to="/blog"
                        className="bg-[#1D4ED8] hover:bg-[#1E40AF] text-white rounded-full px-6 py-3 font-bold transition-all duration-300 shadow-sm hover:shadow-md inline-block">
                        Começar a Investir 📈
                    </Link>
                </div>

                <button onClick={() => setOpen(!open)}
                    className="lg:hidden w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center text-white">
                    {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {open && (
                <div className="lg:hidden bg-[#0A1628] border-t border-[#1E3A5F] px-6 py-6 flex flex-col gap-4 shadow-lg">
                    {NAV_ITEMS.map((item) => (
                        <Link key={item.label} to={item.href} onClick={() => setOpen(false)}
                            className="text-slate-300 font-semibold py-2 hover:text-white">{item.label}</Link>
                    ))}
                    <Link to="/blog" onClick={() => setOpen(false)}
                        className="bg-[#1D4ED8] text-white rounded-full px-6 py-3 font-bold text-center mt-2">
                        Começar a Investir 📈
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
