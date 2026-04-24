import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <nav className="navbar">

        {/* ===== LOGO ===== */}
        <img src={logo} alt="Perfect Evolution" className="logo" />

        {/* ===== MENU ===== */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li><a href="#hero">Início</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#portfolio">Portfólio</a></li>

          {/* 🔥 BOTÃO WHATSAPP NO MENU MOBILE */}
          <li>
            <a
              href="https://wa.me/5585981906528?text=Olá 👋 vim pelo site e quero entender melhor os serviços"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mobile"
            >
              Falar no WhatsApp
            </a>
          </li>

        </ul>

        {/* ===== BOTÃO PRINCIPAL (DESKTOP) ===== */}
        <a
          href="https://wa.me/5585981906528?text=Olá 👋 vim pelo site e quero entender melhor os serviços"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          Falar no WhatsApp
        </a>

        {/* ===== MENU HAMBÚRGUER ===== */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </nav>
    </header>
  );
}

export default Header;