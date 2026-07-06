import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import Artigo from "./pages/Artigo";
import Corretoras from "./pages/Corretoras";
import Ferramentas from "./pages/Ferramentas";
import Sobre from "./pages/Sobre";
import Contacto from "./pages/Contacto";
import Privacidade from "./pages/Privacidade";
import Calculadoras from "./pages/calculadoras/Calculadoras";
import Rescisao from "./pages/calculadoras/Rescisao";
import SalarioLiquido from "./pages/calculadoras/SalarioLiquido";
import CltVsPj from "./pages/calculadoras/CltVsPj";
import Ferias from "./pages/calculadoras/Ferias";
import DecimoTerceiro from "./pages/calculadoras/DecimoTerceiro";
import Termos from "./pages/Termos";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <HelmetProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<Artigo />} />
                <Route path="/corretoras" element={<Corretoras />} />
                <Route path="/ferramentas" element={<Ferramentas />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/privacidade" element={<Privacidade />} />
                <Route path="/calculadoras" element={<Calculadoras />} />
                <Route path="/calculadoras/rescisao" element={<Rescisao />} />
                <Route path="/calculadoras/salario-liquido" element={<SalarioLiquido />} />
                <Route path="/calculadoras/clt-vs-pj" element={<CltVsPj />} />
                <Route path="/calculadoras/ferias" element={<Ferias />} />
                <Route path="/calculadoras/decimo-terceiro" element={<DecimoTerceiro />} />
                <Route path="/termos" element={<Termos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        <Analytics />
        </HelmetProvider>
    );
}
