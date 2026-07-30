import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-content">
        <span>Agora e a sua vez</span>
        <h2>Sua marca pode parecer pequena hoje. Ela nao precisa continuar assim.</h2>
        <p>
          Chame a Perfect Evolution e receba uma leitura direta do que precisa
          mudar para sua presenca digital gerar mais confianca e mais clientes.
        </p>

        <a
          href="https://wa.me/5585981906528?text=Ola%2C%20quero%20evoluir%20a%20presenca%20digital%20da%20minha%20marca."
          target="_blank"
          rel="noopener noreferrer"
          className="cta-action"
        >
          <FaWhatsapp />
          Falar com a Perfect
        </a>

        <div className="redes" aria-label="Redes sociais">
          <a href="https://wa.me/5585981906528" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/perfectevolutiontwo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com/@perfectevolution4" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>
          <a href="https://www.facebook.com/ferreira.brunomendes" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
}
