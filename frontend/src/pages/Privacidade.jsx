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
                        <p>O site <strong>dinheirocrescendo.com.br</strong> respeita a sua privacidade. Esta política explica como coletamos e usamos informações.</p>
                        <h2 className="text-xl font-bold text-[#0A1628]">Links de afiliados</h2>
                        <p>Este site contém links de afiliados para corretoras parceiras, plataformas de cursos (como a Udemy) e outros serviços financeiros. Se você abrir conta ou comprar através desses links, podemos receber uma compensação. Isso não tem nenhum custo para você e não influencia as nossas recomendações.</p>
                        <h2 className="text-xl font-bold text-[#0A1628]">Aviso legal</h2>
                        <p>O conteúdo deste site é de caráter informativo e educativo. Não constitui aconselhamento financeiro, tributário ou de investimento. Investimentos envolvem riscos. Invista sempre de acordo com o seu perfil de risco e, se necessário, consulte um profissional certificado.</p>
                        <h2 className="text-xl font-bold text-[#0A1628]">Cookies</h2>
                        <p>Este site pode usar cookies para análise de tráfego (Google Analytics) e exibição de anúncios (Google AdSense). Você pode desativar os cookies nas configurações do seu navegador.</p>
                        <h2 className="text-xl font-bold text-[#0A1628]">Contato</h2>
                        <p>Para questões sobre privacidade: contato@dinheirocrescendo.com.br</p>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    );
}
