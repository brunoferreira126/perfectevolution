import { FaBullhorn, FaChartLine, FaLayerGroup, FaLaptopCode } from "react-icons/fa";
import "./Services.css";

const services = [
  {
    icon: <FaLayerGroup />,
    title: "Posicionamento",
    text: "Diagnostico da marca, narrativa, oferta e direcao criativa para parecer maior desde o primeiro contato.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Landing pages",
    text: "Paginas com ritmo, prova, clareza e chamada para acao, pensadas para transformar trafego em conversa.",
  },
  {
    icon: <FaBullhorn />,
    title: "Conteudo estrategico",
    text: "Instagram, campanhas e pecas visuais criadas para construir autoridade sem parecer amador.",
  },
  {
    icon: <FaChartLine />,
    title: "Crescimento",
    text: "Ajustes constantes de percepcao, funil e comunicacao para gerar resultado real, nao so curtidas.",
  },
];

export default function Services() {
  return (
    <section className="services" id="servicos">
      <div className="section-heading">
        <span>Metodo Perfect</span>
        <h2>Do invisivel ao inevitavel.</h2>
        <p>
          A gente nao entrega uma peca solta. Criamos um ecossistema visual e
          comercial para sua marca ser lembrada, desejada e escolhida.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <div className="service-index">0{index + 1}</div>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
