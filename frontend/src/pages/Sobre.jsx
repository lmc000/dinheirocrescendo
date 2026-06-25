import { Link } from "react-router-dom";
import Header from "../components/landing/Header";
import FooterSection from "../components/landing/FooterSection";

export default function Sobre() {
    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <Header />
            <main className="pt-28 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628] mb-2">
                        Sobre o Autor
                    </h1>
                    <p className="text-[#334155] text-sm mb-10">Luís Costa — Autor e Responsável Editorial</p>

                    <div className="space-y-8 text-[#0A1628]">

                        <section>
                            <h2 className="text-xl font-bold mb-3">1. Quem Sou</h2>
                            <p className="leading-relaxed text-[#334155] mb-4">
                                Olá, o meu nome é Luís Costa. Sou empresário digital, entusiasta de tecnologia e apaixonado
                                pelo ecossistema da internet. Dedico o meu percurso profissional à criação e desenvolvimento
                                de websites com foco na produção de conteúdos informativos e educativos sobre temáticas de
                                relevância pública.
                            </p>
                            <p className="leading-relaxed text-[#334155]">
                                O meu principal objetivo é transformar conceitos complexos em guias acessíveis, práticos e
                                acionáveis — capacitando os leitores a tomarem decisões informadas no seu dia a dia, seja
                                na escolha de uma ferramenta, de um produto ou na compreensão de um tema técnico.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3">2. Experiência e Credibilidade</h2>
                            <p className="leading-relaxed text-[#334155] mb-4">
                                A qualidade da informação partilhada nos meus projetos assenta numa base académica e
                                profissional sólida:
                            </p>
                            <ul className="list-disc list-inside space-y-3 text-[#334155]">
                                <li>
                                    <strong className="text-[#0A1628]">Licenciatura em Gestão de Empresas</strong> — confere-me
                                    uma visão analítica rigorosa, capacidade de auditoria de processos e uma abordagem estruturada
                                    na triagem de dados e fontes fiáveis.
                                </li>
                                <li>
                                    <strong className="text-[#0A1628]">Vários anos de experiência no setor digital</strong> — ao
                                    longo de anos de dedicação contínua à criação de plataformas digitais, adquiri um conhecimento
                                    aprofundado sobre comportamento do utilizador, curadoria de conteúdos e validação de fontes
                                    na internet.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3">3. Metodologia Editorial (E-E-A-T)</h2>
                            <p className="leading-relaxed text-[#334155] mb-4">
                                Para garantir que os conteúdos cumprem os mais elevados padrões de qualidade exigidos pelo
                                Google News Publisher Center, adotamos um processo rigoroso de verificação:
                            </p>
                            <ul className="list-disc list-inside space-y-3 text-[#334155]">
                                <li>
                                    <strong className="text-[#0A1628]">Investigação independente e empírica</strong> — todos os
                                    artigos são fundamentados em fontes fidedignas, estudos, documentação técnica oficial e,
                                    sempre que aplicável, na experimentação direta de produtos e serviços.
                                </li>
                                <li>
                                    <strong className="text-[#0A1628]">Atualização frequente</strong> — o mercado e a tecnologia
                                    evoluem rapidamente. Comprometemo-nos a rever e atualizar periodicamente os conteúdos para
                                    assegurar que a informação se mantém exata e atual.
                                </li>
                                <li>
                                    <strong className="text-[#0A1628]">Ausência de conflitos de interesse</strong> — mantemos
                                    independência editorial absoluta. Não aceitamos artigos patrocinados dissimulados nem
                                    compensações financeiras para alterar avaliações ou favorecer marcas.
                                </li>
                                <li>
                                    <strong className="text-[#0A1628]">Declaração de afiliados</strong> — alguns links presentes
                                    nos artigos são links de afiliado. Se efetuar uma compra através deles, poderemos receber uma
                                    pequena comissão, sem qualquer custo adicional para si. Esta comissão serve exclusivamente para
                                    financiar os custos de manutenção e investigação independente do website. A existência destes
                                    links nunca influencia as nossas opiniões, críticas ou recomendações.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-3">4. Transparência e Contacto</h2>
                            <p className="leading-relaxed text-[#334155] mb-4">
                                A proximidade e a responsabilidade editorial são pilares fundamentais da nossa integridade.
                                Estamos totalmente recetivos a sugestões, correções de factos ou pedidos de esclarecimento
                                da nossa comunidade de leitores.
                            </p>
                            <p className="leading-relaxed text-[#334155]">
                                Pode contactar o autor e responsável editorial diretamente através do seguinte endereço:
                            </p>
                            <p className="mt-3 font-semibold text-[#0A1628]">
                                E-mail:{" "}
                                <a href="mailto:mcostatti@gmail.com" className="text-[#1D4ED8] hover:underline">
                                    mcostatti@gmail.com
                                </a>
                            </p>
                        </section>

                    </div>

                    <div className="mt-12 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#1D4ED8] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                LC
                            </div>
                            <div>
                                <p className="font-bold text-[#0A1628]">Luís Costa</p>
                                <p className="text-[#334155] text-sm">Autor e Responsável Editorial</p>
                                <p className="text-[#334155] text-sm mt-1">Empresário digital · Licenciado em Gestão de Empresas</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Link to="/" className="text-[#1D4ED8] font-semibold hover:underline">
                            ← Voltar ao início
                        </Link>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    );
}