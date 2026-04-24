import "./Services.css";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBullhorn, FaChartLine } from "react-icons/fa";

export default function Services() {
  return (
    <section className="services">

      <h2>O que fazemos</h2>
      <p>Não entregamos serviços. Entregamos crescimento.</p>

      <div className="services-grid">

        <motion.div 
          className="service-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaLaptopCode className="icon" />
          <h3>Landing Pages</h3>
          <p>
            Criamos páginas pensadas para transformar visitantes em clientes.
          </p>
        </motion.div>

        <motion.div 
          className="service-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaBullhorn className="icon" />
          <h3>Estratégia Digital</h3>
          <p>
            Posicionamos sua marca para atrair e converter no digital.
          </p>
        </motion.div>

        <motion.div 
          className="service-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaChartLine className="icon" />
          <h3>Crescimento</h3>
          <p>
            Aplicamos estratégias que geram resultados reais e consistentes.
          </p>
        </motion.div>

      </div>

    </section>
  );
}