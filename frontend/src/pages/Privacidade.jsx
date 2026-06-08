import { Header } from "../components/landing/Header";
import { FooterSection } from "../components/landing/FooterSection";

export default function Privacidade() {
    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <Header />
            <main className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-extrabold text-[#0A1628] mb-8">Política de Privacidade</h1>
                    <div className="prose text-slate-600 space-y-6">
                        <p>O site <strong>aprenderainvestir.pt</strong> respeita a tua privacidade. Esta política explica como recolhemos e usamos informação.</p>
                        <h2 className="text-xl font-bold text-[#0A1628]">Links de afiliado</h2>
                        <p>Este site contém links de afiliado para corretoras e outros serviços financeiros. Se abrires conta através destes links, podemos receber uma compensação. Isto não tem qualquer custo para ti e não influencia as nossas recomendações.</p>
                        <h2 className="text-xl font-bold text-[#0A1628]">Aviso legal</h2>
                        <p>O conteúdo deste site é de caráter informativo e educativo. Não constitui aconselhamento financeiro, fiscal ou de investimento. Investe sempre de acordo com o teu perfil de risco e, se necessário, consulta um profissional certificado.</p>
                        <h2 className="text-xl font-bold text-[#0A1628]">Cookies</h2>
                        <p>Este site pode usar cookies para análise de tráfego (Google Analytics). Podes desativar os cookies nas definições do teu browser.</p>
                        <h2 className="text-xl font-bold text-[#0A1628]">Contacto</h2>
                        <p>Para questões sobre privacidade: info@aprenderainvestir.pt</p>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    );
}
