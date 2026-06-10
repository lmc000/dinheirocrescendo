import { BookOpen, CheckCircle, Download, Shield } from "lucide-react";

// 🔧 SUBSTITUA PELO SEU LINK DO GUMROAD
const GUMROAD_URL = "PLACEHOLDER_GUMROAD_LINK";

const BENEFICIOS = [
  "Plano passo a passo para o primeiro investimento",
  "Como montar a reserva de emergência (Tesouro Selic e CDB)",
  "Carteiras modelo com ETFs da B3 (BOVA11, IVVB11, WRLD11)",
  "Imposto de Renda sem mistério: isenções e DARF",
  "Erros de iniciante que custam caro — e como evitar",
];

export const EbookSection = () => {
  return (
    <section
      id="ebook"
      className="px-6 md:px-12 lg:px-24 py-14"
      style={{ background: "linear-gradient(135deg, #2a0e04 0%, #3d1a0a 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Capa mini */}
          <div className="flex-shrink-0 relative">
            <div
              className="w-36 rounded-xl overflow-hidden shadow-2xl border border-white/10"
              style={{ background: "linear-gradient(160deg, #FF6B35, #E55A24)" }}
            >
              <div className="p-5 text-center">
                <div className="text-3xl mb-2">📈</div>
                <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest">
                  Guia para Começar
                </p>
                <p className="text-white font-black text-base leading-tight">
                  A INVESTIR
                </p>
                <p className="text-white/50 text-[9px] mt-1">PDF · download imediato</p>
              </div>
              <div className="bg-black/20 py-1.5 text-center">
                <p className="text-white/50 text-[9px] font-bold tracking-wider">
                  DinheiroCrescendo.com.br
                </p>
              </div>
            </div>
            {/* Badge preço */}
            <div
              className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-white/10 text-center"
              style={{ background: "#FF6B35" }}
            >
              <span className="text-white font-black text-sm leading-none">R$ 19</span>
              <span className="text-white/70 text-[9px] leading-none mt-0.5">ou mais</span>
            </div>
          </div>

          {/* Texto */}
          <div className="flex-1 text-white">
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-orange-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              E-book PDF — download imediato
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-2">
              Guia para Começar{" "}
              <span style={{ color: "#FF9F87" }}>a Investir no Brasil</span>
            </h2>
            <p className="text-white/60 text-sm mb-4">
              Tudo o que o iniciante precisa: reserva de emergência, Tesouro Direto,
              ETFs da B3 e Imposto de Renda — explicado de forma simples e direta.
            </p>

            <ul className="space-y-2 mb-5">
              {BENEFICIOS.map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 text-orange-400" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={GUMROAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-sm text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: "#FF6B35" }}
              >
                <Download className="w-4 h-4" />
                Baixar — R$ 19 ou quanto você quiser
              </a>
              <div className="flex items-center gap-1.5 text-white/30 text-xs">
                <Shield className="w-3.5 h-3.5" />
                Pagamento seguro via Gumroad
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EbookSection;
