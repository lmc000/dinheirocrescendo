import Header from "@/components/landing/Header";
import FooterSection from "@/components/landing/FooterSection";
import { Link } from "react-router-dom";

export default function Contacto() {
    return (
        <div className="min-h-screen" style={{ background: "#F8FAFC" }}>
            <Header />
            <main className="pt-28 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-2" style={{ color: "#0A1628" }}>
                        Contacto
                    </h1>
                    <p className="text-sm mb-10" style={{ color: "#334155" }}>Dinheiro Crescendo — Fala connosco</p>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-xl font-bold mb-3" style={{ color: "#0A1628" }}>Como nos contactar</h2>
                            <p className="leading-relaxed mb-4" style={{ color: "#334155" }}>
                                Estamos disponíveis para responder a questões, sugestões de conteúdo, correções de informação
                                ou qualquer outro assunto relacionado com o Dinheiro Crescendo.
                            </p>
                            <p className="leading-relaxed mb-4" style={{ color: "#334155" }}>
                                Tentamos responder a todos os contactos no prazo de 2 a 3 dias úteis.
                            </p>
                            <p className="mt-3 font-semibold" style={{ color: "#0A1628" }}>
                                E-mail:{" "}
                                <a href="mailto:mcostatti@gmail.com" style={{ color: "#1D4ED8" }} className="hover:underline">
                                    mcostatti@gmail.com
                                </a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3" style={{ color: "#0A1628" }}>Para que pode contactar-nos</h2>
                            <ul className="list-disc list-inside space-y-3" style={{ color: "#334155" }}>
                                <li><strong style={{ color: "#0A1628" }}>Sugestões de artigos</strong> — temas que gostaria de ver cobertos no blog</li>
                                <li><strong style={{ color: "#0A1628" }}>Correções de factos</strong> — se encontrar informação incorreta ou desatualizada</li>
                                <li><strong style={{ color: "#0A1628" }}>Parcerias editoriais</strong> — colaborações ou oportunidades relevantes para o nicho</li>
                                <li><strong style={{ color: "#0A1628" }}>Questões sobre afiliação</strong> — esclarecimentos sobre a nossa política de links de afiliado</li>
                                <li><strong style={{ color: "#0A1628" }}>Questões legais e privacidade</strong> — pedidos relacionados com os seus dados pessoais</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3" style={{ color: "#0A1628" }}>Responsável editorial</h2>
                            <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0" style={{ background: "#1D4ED8" }}>
                                        LC
                                    </div>
                                    <div>
                                        <p className="font-bold" style={{ color: "#0A1628" }}>Luís Costa</p>
                                        <p className="text-sm mt-0.5" style={{ color: "#334155" }}>Autor e Responsável Editorial</p>
                                        <p className="text-sm mt-1" style={{ color: "#334155" }}>Empresário digital · Licenciado em Gestão de Empresas</p>
                                        <a href="mailto:mcostatti@gmail.com" className="inline-block mt-3 text-sm font-semibold hover:underline" style={{ color: "#1D4ED8" }}>
                                            mcostatti@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="mt-8">
                        <Link to="/" className="font-semibold hover:underline" style={{ color: "#1D4ED8" }}>
                            ← Voltar ao início
                        </Link>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    );
}