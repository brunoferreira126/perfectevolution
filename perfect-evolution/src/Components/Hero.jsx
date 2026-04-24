import { motion } from "framer-motion";
import "./Hero.css";
import heroImg from "../assets/capa perfect.png";

function Hero() {
  return (
    <section className="hero">

      {/* FUNDO COM EFEITO */}
      <div className="hero-glow"></div>

      {/* TEXTO */}
      <motion.div 
        className="hero-text"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Conectando <span>Marcas</span> com Criatividade e Estratégia.
        </h1>

        <p>
          Nós estruturamos o digital da sua empresa para gerar presença,
          autoridade e crescimento real.
        </p>

        <div className="hero-buttons">
          <a 
            href="https://wa.me/5585981906528" 
            target="_blank"
            className="btn-primary"
          >
          Quero Mais Clientes
          </a>

        </div>
      </motion.div>

      {/* IMAGEM */}
      <motion.div 
        className="hero-image"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={heroImg} alt="Perfect Evolution" />
      </motion.div>

    </section>
  );
}

export default Hero;