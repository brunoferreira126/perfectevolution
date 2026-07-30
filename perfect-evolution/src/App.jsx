import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaCheck,
  FaInstagram,
  FaPlay,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { HiArrowUpRight, HiOutlineSparkles } from "react-icons/hi2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";

import logo from "./assets/logo.png";
import instituto from "./assets/optimized/instituto.webp";
import algg from "./assets/optimized/algg.webp";
import rf from "./assets/optimized/rf.webp";
import rfImportsNew from "./assets/optimized/rf-imports-new.webp";
import bussolaSocial from "./assets/optimized/bussola-social.webp";
import goretteSocial from "./assets/optimized/gorette-social.webp";
import xoppiSocial from "./assets/optimized/xoppi-social.webp";
import acaiteriaSocial from "./assets/optimized/acaiteria-social.webp";
import fikchikSocial from "./assets/optimized/fikchik-social.webp";
import domPizzariaSocial from "./assets/optimized/dom-pizzaria-social.webp";
import comunidadeSocial from "./assets/optimized/comunidade-social.webp";
import lojaVirgemSocial from "./assets/optimized/loja-virgem-social.webp";
import barbeariaGgSocial from "./assets/optimized/barbearia-gg-social.webp";
import seletaSocial from "./assets/optimized/seleta-social.webp";
import asBrazSocial from "./assets/optimized/as-braz-social.webp";
import fsMotosSocial from "./assets/optimized/fs-motos-social.webp";
import siteBussola from "./assets/sites/bussola.png";
import siteGg from "./assets/sites/ggdocorte.png";
import siteSeleta from "./assets/sites/seleta.png";
import siteRegistroGg from "./assets/sites/registro-gg.png";
import siteFsMotos from "./assets/sites/fs-motos.png";

gsap.registerPlugin(ScrollTrigger);

const whatsapp =
  "https://wa.me/5585981906528?text=Ol%C3%A1%2C%20conheci%20a%20Perfect%20Evolution%20pelo%20site%20e%20quero%20evoluir%20a%20minha%20marca.";

const sites = [
  {
    number: "01",
    title: "Instituto da Natureza",
    category: "Landing page institucional",
    description:
      "Uma experiência digital acolhedora para apresentar propósito, projetos e formas de participar.",
    image: instituto,
    href: "https://institutodanatureza.com.br/",
    tone: "green",
  },
  {
    number: "02",
    title: "ALGG Serviços Impressos",
    category: "Site comercial",
    description:
      "Portfólio de produtos organizado para transformar variedade em clareza e novos pedidos.",
    image: algg,
    href: "https://alggservicosimpressos.netlify.app",
    tone: "blue",
  },
  {
    number: "03",
    title: "RF Imports",
    category: "Landing page de vendas",
    description:
      "Uma vitrine direta e sofisticada, criada para valorizar o produto e acelerar a decisão.",
    image: rf,
    href: "https://rf-imports.netlify.app",
    tone: "orange",
  },
];

const socials = [
  {
    label: "RF Imports",
    category: "Tecnologia & varejo",
    metric: "10,2 mil seguidores",
    image: rfImportsNew,
    color: "#f3b61f",
  },
  {
    label: "Bússola Cosméticos",
    category: "Beleza & acessórios",
    image: bussolaSocial,
    color: "#d2a958",
  },
  {
    label: "Gorette Cavalcanti",
    category: "Presença pública",
    image: goretteSocial,
    color: "#3f8be8",
  },
  {
    label: "Xoppi Pindoretama",
    category: "Varejo local",
    image: xoppiSocial,
    color: "#f18532",
  },
  {
    label: "Açaiteria do Rei",
    category: "Gastronomia",
    image: acaiteriaSocial,
    color: "#a84aff",
  },
  {
    label: "Barbearia GG do Corte",
    category: "Beleza & serviços",
    image: barbeariaGgSocial,
    color: "#e13f39",
  },
  {
    label: "Seleta Hortifruti",
    category: "Alimentação saudável",
    image: seletaSocial,
    color: "#4ca66a",
  },
  {
    label: "FS Motos",
    category: "Automotivo",
    image: fsMotosSocial,
    color: "#f1c21b",
  },
  {
    label: "AS BRAZ Construtora",
    category: "Construção civil",
    image: asBrazSocial,
    color: "#e98332",
  },
  {
    label: "Dom Pizzaria",
    category: "Gastronomia",
    image: domPizzariaSocial,
    color: "#e54b3c",
  },
  {
    label: "Comunidade Filhos do Céu",
    category: "Comunidade & fé",
    image: comunidadeSocial,
    color: "#49a6c8",
  },
  {
    label: "Loja Virgem de Guadalupe",
    category: "Moda religiosa",
    image: lojaVirgemSocial,
    color: "#2eb7a7",
  },
  {
    label: "Fikchik Pindoretama",
    category: "Moda & varejo",
    image: fikchikSocial,
    color: "#e95b87",
  },
];

const moreSites = [
  {
    title: "Bússola Cosméticos",
    category: "Catálogo & campanhas",
    image: siteBussola,
    href: "https://bussolacosmeticos.netlify.app/",
  },
  {
    title: "GG do Corte",
    category: "Site institucional",
    image: siteGg,
    href: "https://ggdocorte.netlify.app/",
  },
  {
    title: "Seleta Hortifruti",
    category: "Site comercial",
    image: siteSeleta,
    href: "https://siteseletahortifruti.netlify.app/",
  },
  {
    title: "Gestão GG do Corte",
    category: "Plataforma de gestão",
    image: siteRegistroGg,
    href: "https://registroggdocorte.netlify.app/",
  },
  {
    title: "FS Motos",
    category: "Site institucional",
    image: siteFsMotos,
    href: "https://fsmotos.netlify.app/",
  },
];

const services = [
  {
    title: "Marca & posicionamento",
    text: "Organizamos discurso, identidade e direção criativa para sua empresa ser reconhecida com facilidade.",
    tags: ["Estratégia", "Identidade", "Direção visual"],
  },
  {
    title: "Sites & landing pages",
    text: "Criamos páginas bonitas, rápidas e objetivas, construídas para apresentar valor e gerar conversas.",
    tags: ["UI/UX", "Desenvolvimento", "Conversão"],
  },
  {
    title: "Conteúdo & social media",
    text: "Transformamos o Instagram em uma presença coerente, profissional e simples de acompanhar.",
    tags: ["Planejamento", "Design", "Gestão"],
  },
];

function App() {
  const pageRef = useRef(null);
  const [introVisible, setIntroVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSocial, setActiveSocial] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(
      () => setHeroSlide((current) => (current + 1) % socials.length),
      2800,
    );
    return () => window.clearInterval(timer);
  }, []);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIntroVisible(false);
      return undefined;
    }

    const context = gsap.context(() => {
      document.body.style.overflow = "hidden";

      const introTimeline = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          setIntroVisible(false);
        },
      });

      introTimeline
        .fromTo(
          ".intro-logo",
          { scale: 0.55, opacity: 0, rotation: -18 },
          { scale: 1, opacity: 1, rotation: 0, duration: 0.65, ease: "back.out(1.8)" },
        )
        .fromTo(
          ".intro-word span",
          { yPercent: 115 },
          { yPercent: 0, duration: 0.58, stagger: 0.07, ease: "power3.out" },
          "-=0.22",
        )
        .fromTo(
          ".intro-color",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.42, stagger: 0.06, ease: "power2.out" },
          "-=0.3",
        )
        .to(".intro-content", { opacity: 0, scale: 1.04, duration: 0.3, ease: "power2.in" }, "+=0.3")
        .to(".intro-panel-top", { yPercent: -102, duration: 0.7, ease: "power4.inOut" })
        .to(".intro-panel-bottom", { yPercent: 102, duration: 0.7, ease: "power4.inOut" }, "<")
        .from(
          ".hero-copy > *",
          {
            y: 34,
            opacity: 0,
            duration: 0.85,
            stagger: 0.09,
            ease: "power3.out",
          },
          "-=0.34",
        )
        .from(
          ".hero-art > *",
          {
            y: 40,
            opacity: 0,
            scale: 0.96,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.9",
        );

      /* Hero transitions are part of the opening sequence above. */
      gsap.set(".hero-copy, .hero-art", { visibility: "visible" });

      /* Remaining sections reveal as the visitor scrolls. */
      gsap.set(
        ".service-row, .project-card, .more-project-card, .process-steps article",
        { y: 48, opacity: 0 },
      );

      const revealItems =
        ".service-row, .project-card, .more-project-card, .process-steps article";
      ScrollTrigger.batch(revealItems, {
          start: "top 88%",
          once: true,
          onEnter: (items) =>
            gsap.to(items, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
            }),
        });

      gsap.utils
        .toArray(".section-intro, .work-heading, .social-copy, .studio-copy")
        .forEach((element) => {
          gsap.from(element, {
            scrollTrigger: { trigger: element, start: "top 84%", once: true },
            y: 42,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          });
        });
    }, pageRef);

    return () => {
      document.body.style.overflow = "";
      context.revert();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" ref={pageRef}>
      {introVisible && (
        <div className="intro-screen" aria-hidden="true">
          <div className="intro-panel intro-panel-top"></div>
          <div className="intro-panel intro-panel-bottom"></div>
          <div className="intro-content">
            <img className="intro-logo" src={logo} alt="" />
            <div className="intro-word">
              <span>Perfect</span>
              <span>Evolution</span>
            </div>
            <div className="intro-colors">
              <i className="intro-color"></i>
              <i className="intro-color"></i>
              <i className="intro-color"></i>
              <i className="intro-color"></i>
            </div>
            <small>Estratégia • design • presença digital</small>
          </div>
        </div>
      )}
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <img src={logo} alt="" />
          <span>Perfect Evolution</span>
        </a>

        <nav className={menuOpen ? "is-open" : ""} aria-label="Navegação principal">
          <a href="#servicos" onClick={closeMenu}>O que fazemos</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#social" onClick={closeMenu}>Social media</a>
          <a href="#studio" onClick={closeMenu}>Quem somos</a>
        </nav>

        <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">
          Vamos conversar <HiArrowUpRight />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><HiOutlineSparkles /> Estratégia, design e presença digital</p>
            <h1>
              Sua marca<br />
              <span>impossível</span><br />
              de ignorar.
            </h1>
            <p className="hero-description">
              Criamos marcas, sites e conteúdos que deixam claro — em poucos
              segundos — por que o cliente deve escolher você.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">
                Quero evoluir minha marca <FaArrowRight />
              </a>
              <a className="text-link" href="#projetos">Explorar projetos <span>↓</span></a>
            </div>
          </div>

          <div className="hero-art" aria-label="Seleção de trabalhos da Perfect Evolution">
            <div className="browser-mockup">
              <div className="browser-top"><i></i><i></i><i></i><span>perfect project</span></div>
              <img src={instituto} alt="Site Instituto da Natureza criado pela Perfect Evolution" />
            </div>
            <div className="phone-mockup phone-one">
              <img
                key={`first-${heroSlide}`}
                className="hero-phone-switch"
                src={socials[heroSlide].image}
                alt={`Perfil de ${socials[heroSlide].label} desenvolvido pela Perfect Evolution`}
              />
            </div>
            <div className="phone-mockup phone-two">
              <img
                key={`second-${heroSlide}`}
                className="hero-phone-switch"
                src={socials[(heroSlide + 1) % socials.length].image}
                alt={`Projeto de ${socials[(heroSlide + 1) % socials.length].label} desenvolvido pela Perfect Evolution`}
              />
            </div>
          </div>
        </section>

        <section className="services section" id="servicos">
          <div className="section-intro">
            <p className="section-number">01 — O que fazemos</p>
            <h2>Não basta aparecer.<br /><em>É preciso marcar.</em></h2>
            <p className="section-lead">
              Da primeira ideia ao ponto de contato final, construímos uma
              presença que faz sentido, gera desejo e conduz o cliente.
            </p>
          </div>

          <div className="service-list">
            {services.map((service, index) => (
              <article className="service-row" key={service.title}>
                <span>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.tags.map((tag) => <li key={tag}><FaCheck /> {tag}</li>)}
                </ul>
              </article>
            ))}
          </div>

        </section>

        <section className="work section" id="projetos">
          <div className="work-heading">
            <div>
              <p className="section-number light">02 — Sites & landing pages</p>
              <h2>Projetos feitos<br />para <em>serem vistos.</em></h2>
            </div>
            <p>
              Cada página ganha uma direção própria. Nada de encaixar sua marca
              em um modelo pronto.
            </p>
          </div>

          <div className="projects-list">
            {sites.map((site) => (
              <a
                className={`project-card ${site.tone}`}
                href={site.href}
                target="_blank"
                rel="noreferrer"
                key={site.title}
              >
                <div className="project-meta">
                  <span>{site.number}</span>
                  <p>{site.category}</p>
                  <HiArrowUpRight />
                </div>
                <div className="project-browser">
                  <div className="browser-top"><i></i><i></i><i></i><span>{site.title}</span></div>
                  <img src={site.image} alt={`Página inicial do projeto ${site.title}`} />
                </div>
                <div className="project-copy">
                  <h3>{site.title}</h3>
                  <p>{site.description}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="more-work">
            <div className="more-work-heading">
              <p className="section-number light">Mais projetos no ar</p>
              <h3>De vitrines de venda a plataformas de gestão.</h3>
              <p>
                Soluções diferentes, construídas para negócios e objetivos
                diferentes.
              </p>
            </div>
            <div className="more-work-grid">
              {moreSites.map((site, index) => (
                <a
                  className="more-project-card"
                  href={site.href}
                  target="_blank"
                  rel="noreferrer"
                  key={site.title}
                >
                  <div className="more-project-image">
                    <img src={site.image} alt={`Página inicial do projeto ${site.title}`} />
                    <span>0{index + 4}</span>
                  </div>
                  <div>
                    <p>{site.category}</p>
                    <h4>{site.title}</h4>
                    <HiArrowUpRight />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="social section" id="social">
          <div className="social-copy">
            <p className="section-number">03 — Instagram & conteúdo</p>
            <h2>Um perfil bonito.<br /><em>Uma marca coerente.</em></h2>
            <p>
              Planejamento, visual e rotina editorial trabalhando juntos para
              o seu Instagram deixar de parecer improvisado.
            </p>
            <div className="social-benefits">
              <span><FaCheck /> Visual que reforça a marca</span>
              <span><FaCheck /> Conteúdo com intenção</span>
              <span><FaCheck /> Gestão mais simples</span>
            </div>
            <a
              href="https://www.instagram.com/perfectevolutiontwo/"
              target="_blank"
              rel="noreferrer"
              className="instagram-feature"
            >
              <span className="instagram-feature-icon"><FaInstagram /></span>
              <span className="instagram-feature-copy">
                <small>A Perfect também acontece por lá</small>
                <strong>@perfectevolutiontwo</strong>
                <em>Bastidores, projetos e ideias para marcas que querem evoluir.</em>
              </span>
              <span className="instagram-feature-action">
                Seguir perfil <HiArrowUpRight />
              </span>
            </a>
          </div>

          <div className="social-showcase">
            <div className="social-phone" style={{ "--social-color": socials[activeSocial].color }}>
              <div className="phone-speaker"></div>
              <img src={socials[activeSocial].image} alt={`Projeto de Instagram para ${socials[activeSocial].label}`} />
              <span>
                <small>{socials[activeSocial].category}</small>
                {socials[activeSocial].label}
                {socials[activeSocial].metric && <b>{socials[activeSocial].metric}</b>}
              </span>
            </div>
            <div className="social-picker" role="tablist" aria-label="Escolha um projeto">
              {socials.map((item, index) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeSocial === index}
                  className={activeSocial === index ? "active" : ""}
                  onClick={() => setActiveSocial(index)}
                  key={item.label}
                >
                  <img src={item.image} alt="" />
                  <span>
                    <small>{item.category}</small>
                    {item.label}
                  </span>
                  <b>0{index + 1}</b>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="studio section" id="studio">
          <div className="studio-video">
            <iframe
              src="https://www.instagram.com/reel/DPSCIUXAV2g/embed"
              title="Conheça a equipe Perfect Evolution"
              allowFullScreen
            ></iframe>
            <div className="video-label"><FaPlay /> Aperte o play e conheça a Perfect</div>
          </div>

          <div className="studio-copy">
            <p className="section-number light">04 — Por trás da Perfect</p>
            <h2>Ideias grandes.<br /><em>Pessoas de verdade.</em></h2>
            <p>
              A Perfect Evolution nasceu da vontade de fazer empresas pequenas
              e médias ocuparem o digital com a mesma força das grandes marcas.
            </p>
            <div className="studio-team-line" aria-label="Especialidades da equipe">
              <span>Estratégia</span>
              <span>Design</span>
              <span>Conteúdo</span>
              <span>Desenvolvimento</span>
            </div>
            <blockquote>
              “A gente não entrega só uma peça bonita. Entrega clareza,
              presença e um próximo passo.”
            </blockquote>
            <a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">
              Conhecer nosso jeito de trabalhar <HiArrowUpRight />
            </a>
          </div>
        </section>

        <section className="process section">
          <div className="process-heading">
            <p className="section-number">05 — Como acontece</p>
            <h2>Simples de começar.<br /><em>Bom de acompanhar.</em></h2>
          </div>
          <div className="process-steps">
            {[
              ["01", "A gente escuta", "Entendemos o momento, o objetivo e o que hoje impede sua marca de avançar."],
              ["02", "A gente direciona", "Desenhamos a estratégia, o visual e os pontos de contato mais importantes."],
              ["03", "A marca evolui", "Você acompanha a construção e recebe uma presença pronta para ser percebida."],
            ].map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-orbit">Perfect Evolution • Estratégia • Design •</div>
          <p>Se sua marca está pronta para o próximo nível,</p>
          <h2>vamos fazer ela<br /><em>ser percebida.</em></h2>
          <a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">
            <FaWhatsapp /> Começar uma conversa
          </a>
        </section>
      </main>

      <footer>
        <a className="footer-brand" href="#inicio">
          <img src={logo} alt="" />
          <strong>Perfect Evolution</strong>
        </a>
        <p>Marcas, sites e conteúdo que evoluem negócios.</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/perfectevolutiontwo/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://tiktok.com/@perfectevolution4" target="_blank" rel="noreferrer">TikTok</a>
          <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <small>© {new Date().getFullYear()} Perfect Evolution</small>
      </footer>
    </div>
  );
}

export default App;
