import logo from "../assets/logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#hero" className="footer-brand" aria-label="Voltar ao inicio">
        <img src={logo} alt="Perfect Evolution" />
        <span>Perfect Evolution</span>
      </a>
      <p>Design, estrategia e crescimento digital.</p>
      <small>© {new Date().getFullYear()} Perfect Evolution. Todos os direitos reservados.</small>
    </footer>
  );
}
