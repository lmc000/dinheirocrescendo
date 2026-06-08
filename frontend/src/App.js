import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import Artigo from "./pages/Artigo";
import Corretoras from "./pages/Corretoras";
import Ferramentas from "./pages/Ferramentas";
import Privacidade from "./pages/Privacidade";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<Artigo />} />
                <Route path="/corretoras" element={<Corretoras />} />
                <Route path="/ferramentas" element={<Ferramentas />} />
                <Route path="/privacidade" element={<Privacidade />} />
            </Routes>
        </BrowserRouter>
    );
}
