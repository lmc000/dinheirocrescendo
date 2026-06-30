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
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        <Analytics />
        </HelmetProvider>
    );
}
