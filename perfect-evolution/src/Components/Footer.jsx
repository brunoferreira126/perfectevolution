import "./Footer.css";
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">



      {/* COPYRIGHT */}
      <p className="copy">
        © {new Date().getFullYear()} Perfect Evolution — Todos os direitos reservados
      </p>

    </footer>
  );
}