import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import "./Header.css";
import logo from "../assets/logo.png";

const links = [
  { href: "#hero", label: "Inicio" },
  { href: "#servicos", label: "Servicos" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#sobre", label: "Sobre" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar" aria-label="Navegacao principal">
        <a href="#hero" className="brand" aria-label="Perfect Evolution">
          <img src={logo} alt="Perfect Evolution" className="brand-logo" />
          <span>Perfect Evolution</span>
        </a>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}

          <li className="mobile-action">
            <a
              href="https://wa.me/5585981906528?text=Ola%2C%20vim%20pelo%20site%20e%20quero%20entender%20melhor%20os%20servicos."
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </li>
        </ul>

        <a
          href="https://wa.me/5585981906528?text=Ola%2C%20vim%20pelo%20site%20e%20quero%20entender%20melhor%20os%20servicos."
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta desktop-action"
        >
          <FaWhatsapp />
          Falar agora
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}

export default Header;
