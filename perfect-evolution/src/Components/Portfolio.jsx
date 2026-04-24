import "./Portfolio.css";
import instituto from "../assets/projetos/instituto.png";
import algg from "../assets/projetos/algg.png";
import rf from "../assets/projetos/rf.png";
// ===============================
// INSTAGRAM (16 IMAGENS AUTOMÁTICO)
// ===============================
const instagramPerfis = Array.from({ length: 13 }, (_, i) => ({
  nome: `Cliente ${i + 1}`,
  imagem: new URL(`../assets/projetos/insta-${i + 1}.png`, import.meta.url).href
}));

// ===============================
// SITES / LANDING PAGES
// ===============================
const sites = [
  {
    nome: "Instituto",
    imagem: instituto,
    link: "https://institutodanatureza.com.br/"
    
  },
   
   {
    nome: "Algg",
    imagem: algg,
    link: "https://alggservicosimpressos.netlify.app"
  },
  {
    nome: "RF",
    imagem: rf,
    link: "rf-imports.netlify.app"
  }
];
 

export default function Portfolio() {
  return (
    <section className="portfolio">

      {/* ===== INSTAGRAM ===== */}
      <h2>Resultados Reais</h2>
      <p>Perfis que já passaram pela nossa estratégia</p>

      <div className="carousel">
        <div className="carousel-track">

          {[...instagramPerfis, ...instagramPerfis].map((item, index) => (
            <div className="card" key={index}>
              <img src={item.imagem} alt={item.nome} />
              <h3>{item.nome}</h3>
            </div>
          ))}

        </div>
      </div>

      {/* ===== SITES ===== */}
      <h2 className="mt">Sites e Landing Pages</h2>
      <p>Projetos pensados para atrair e converter clientes</p>

      <div className="carousel">
        <div className="carousel-track slow">

          {[...sites].map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              key={index}
              className="card"
            >
              <img src={item.imagem} alt={item.nome} />
              <h3>{item.nome}</h3>
              <button>Visite</button>
            </a>
          ))}

        </div>
      </div>

      {/* ===== BLOCO FINAL ===== */}
      <div className="conversao">

        <p>
          Ter apenas um Instagram não é suficiente.
          Seu cliente precisa entender, confiar e agir.
        </p>

        <p>
          Uma landing page bem estruturada apresenta sua empresa,
          responde dúvidas e transforma visitas em clientes.
        </p>

        <a
          href="https://wa.me/5585981906528"
          target="_blank"
          className="btn"
        >
          Falar no WhatsApp
        </a>

      </div>

    </section>
  );
}