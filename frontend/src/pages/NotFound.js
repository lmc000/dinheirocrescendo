import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", textAlign: "center", padding: "40px" }}>
            <div style={{ fontSize: "80px", marginBottom: "16px" }}>404</div>
            <h1 style={{ fontSize: "28px", marginBottom: "12px", color: "#1a1a1a" }}>Página não encontrada</h1>
            <p style={{ fontSize: "16px", color: "#666", marginBottom: "32px" }}>A página que procuras não existe ou foi removida.</p>
            <Link to="/" style={{ background: "#2D6A4F", color: "#fff", padding: "12px 28px", borderRadius: "8px", textDecoration: "none", fontWeight: "600", fontSize: "16px" }}>
                Voltar ao início
            </Link>
        </div>
    );
}
