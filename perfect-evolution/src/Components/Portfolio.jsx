import "./Portfolio.css";
import instituto from "../assets/projetos/instituto.png";
import algg from "../assets/projetos/algg.png";
import rf from "../assets/projetos/rf.png";

const instagramPerfis = Array.from({ length: 13 }, (_, i) => ({
  nome: `Projeto ${String(i + 1).padStart(2, "0")}`,
  imagem: new URL(`../assets/projetos/insta-${i + 1}.png`, import.meta.url).href,
}));

const sites = [
  {
    nome: "Instituto da Natureza",
    imagem: instituto,
    link: "https://institutodanatureza.com.br/",
  },
  {
    nome: "ALGG Servicos Impressos",
    imagem: algg,
    link: "https://alggservicosimpressos.netlify.app",
  },
  {
    nome: "RF Imports",
    imagem: rf,
    link: "https://rf-imports.netlify.app",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="section-heading">
        <span>Prova visual</span>
        <h2>Quando a marca muda de nivel, o cliente percebe antes de ler.</h2>
        <p>
          Uma selecao de identidades, perfis e landing pages criadas para gerar
          autoridade imediata.
        </p>
      </div>

      <div className="portfolio-marquee" aria-label="Projetos de Instagram">
        <div className="portfolio-track">
          {[...instagramPerfis, ...instagramPerfis].map((item, index) => (
            <article className="insta-card" key={`${item.nome}-${index}`}>
              <img src={item.imagem} alt={item.nome} />
              <span>{item.nome}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="site-showcase">
        {sites.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={item.nome}
            className="site-card"
          >
            <img src={item.imagem} alt={`Preview do projeto ${item.nome}`} />
            <div>
              <span>Landing page</span>
              <h3>{item.nome}</h3>
            </div>
          </a>
        ))}
      </div>

      <div className="conversion-panel">
        <p>
          Uma marca forte nao depende da sorte do algoritmo. Ela cria contexto,
          prova e desejo em cada ponto de contato.
        </p>
        <a
          href="https://wa.me/5585981906528?text=Ola%2C%20quero%20uma%20landing%20page%20e%20uma%20presenca%20digital%20mais%20forte."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Quero esse nivel para minha marca
        </a>
      </div>
    </section>
  );
}
