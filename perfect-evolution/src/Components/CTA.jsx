import "./CTA.css";
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="cta">

      {/* FUNDO COM EFEITO */}
      <div className="cta-bg"></div>

      <h2>
        Pronto para <span>crescer de verdade</span> no digital?
      </h2>

      <p>
        Seu concorrente já está online.  
        A diferença é quem converte mais.
      </p>

      {/* BOTÃO PRINCIPAL */}
      <a
        href="https://wa.me/5585981906528"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn"
      >
        <FaWhatsapp /> Quero mais clientes
      </a>

      {/* REDES SOCIAIS */}
      <div className="redes">

        <a href="https://wa.me/5585981906528" target="_blank">
          <FaWhatsapp />
        </a>

        <a href="https://www.instagram.com/perfect_evolutiontwo/" target="_blank">
          <FaInstagram />
        </a>

        <a href="https://tiktok.com/@perfectevolution4" target="_blank">
          <FaTiktok />
        </a>

        <a href="https://www.facebook.com/ferreira.brunomendes" target="_blank">
          <FaFacebook />
        </a>

      </div>

    </section>
  );
}