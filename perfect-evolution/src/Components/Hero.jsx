import { FaArrowRight, FaBolt, FaChartLine, FaWhatsapp } from "react-icons/fa";
import "./Hero.css";
import heroImg from "../assets/capa perfect.png";
import instaOne from "../assets/projetos/insta-1.png";
import instaTen from "../assets/projetos/insta-10.png";
import sitePreview from "../assets/projetos/instituto.png";

const proofItems = [
  { value: "13+", label: "perfis reposicionados" },
  { value: "3", label: "sites em vitrine" },
  { value: "360", label: "presenca digital" },
];

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <img src={heroImg} alt="" aria-hidden="true" />
      </div>

      <div className="hero-content">
        <p className="hero-kicker">
          <FaBolt />
          Estrategia, design e conversao para marcas que querem liderar.
        </p>

        <h1>Perfect Evolution</h1>

        <p className="hero-copy">
          Transformamos presenca digital em desejo, autoridade e vendas com
          paginas, conteudo e posicionamento que fazem a marca parecer tao forte
          quanto ela realmente e.
        </p>

        <div className="hero-actions">
          <a
            href="https://wa.me/5585981906528?text=Ola%2C%20vim%20pelo%20site%20da%20Perfect%20Evolution%20e%20quero%20uma%20presenca%20digital%20mais%20profissional."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaWhatsapp />
            Comecar minha evolucao
          </a>

          <a href="#portfolio" className="btn-secondary">
            Ver resultados
            <FaArrowRight />
          </a>
        </div>

        <div className="hero-proof" aria-label="Indicadores Perfect Evolution">
          {proofItems.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-showcase">
        <div className="showcase-frame main-frame">
          <img src={sitePreview} alt="Landing page criada pela Perfect Evolution" />
        </div>

        <div className="showcase-card card-top">
          <FaChartLine />
          <span>Marca pronta para converter</span>
        </div>

        <div className="showcase-frame phone-frame phone-a">
          <img src={instaOne} alt="Perfil social produzido pela Perfect Evolution" />
        </div>

        <div className="showcase-frame phone-frame phone-b">
          <img src={instaTen} alt="Identidade visual de cliente Perfect Evolution" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
