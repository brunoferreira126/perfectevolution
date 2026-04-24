import "./About.css";

export default function About() {
  return (
    <section className="about">

      <h2>Quem Somos</h2>

      <p className="sub" id="sobre">
        Mais do que posts, criamos posicionamento que gera vendas.
      </p>

      {/* VIDEO */}
      <div className="video-container">
        <iframe
          src="https://www.instagram.com/reel/DPSCIUXAV2g/embed"
          title="Vídeo institucional"
          allowFullScreen
        ></iframe>
      </div>

      {/* TEXTO */}
      <div className="about-text">
        <p>
          A Perfect Evolution nasceu com um objetivo claro:
          ajudar empresas a saírem do amadorismo no digital
          e se posicionarem de forma estratégica.
        </p>

        <p>
          Não trabalhamos com volume, trabalhamos com resultado.
          Cada projeto é pensado para atrair, conectar e converter.
        </p>
      </div>

      {/* CTA LEVE */}
      <a
        href="https://wa.me/5585981906528"
        target="_blank"
        className="about-btn"
      >
        Quero entender melhor
      </a>

    </section>
  );
}