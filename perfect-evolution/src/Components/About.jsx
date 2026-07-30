import { FaCheckCircle, FaInstagram } from "react-icons/fa";
import "./About.css";

const principles = [
  "Design com intencao comercial",
  "Comunicacao clara para vender sem parecer forca",
  "Presenca digital consistente em todos os canais",
];

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-copy">
        <span>Sobre a Perfect</span>
        <h2>Criatividade bonita e estrategia afiada na mesma mesa.</h2>
        <p>
          A Perfect Evolution nasceu para tirar negocios do visual improvisado e
          colocar marcas em uma presenca digital com criterio, desejo e
          conversao.
        </p>

        <div className="principles">
          {principles.map((item) => (
            <p key={item}>
              <FaCheckCircle />
              {item}
            </p>
          ))}
        </div>

        <a
          href="https://www.instagram.com/perfectevolutiontwo/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-link"
        >
          <FaInstagram />
          Ver a Perfect no Instagram
        </a>
      </div>

      <div className="about-video" aria-label="Video institucional">
        <iframe
          src="https://www.instagram.com/reel/DPSCIUXAV2g/embed"
          title="Video institucional Perfect Evolution"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
