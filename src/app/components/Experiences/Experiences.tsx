
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// import "./Experience.css";

const experiencesData = [
  {
    empresa: "PLOORAL",
    cargo: "Desenvolvedor Fullstack Javascript (Agosto/2022 - Maio/2023)",
    date: "2022 - 2023",
    atividades:
      "Desenvolvimento de aplicações web utilizando as tecnologias HTML, CSS, JAVASCRIPT, BOOTSTRAP, SQL, ANGULARJS, VUEJS e NODEJS. Criação de interfaces responsivas e intuitivas utilizando HTML, CSS e BOOTSTRAP. Implementação de lógica de negócio e interatividade utilizando JAVASCRIPT e frameworks como ANGULARJS e VUEJS. Integração com bancos de dados SQL para armazenamento e recuperação de dados. Desenvolvimento de APIs e serviços utilizando Node.js para comunicação entre front-end e back-end.",
    logo: "/plooral-logo.png"
  },
  {
    empresa: "SOTREQ S/A",
    cargo: "Analista de Sistemas (Março/2020 - Agosto/2022)",
    date: "2020 - 2022",
    atividades:
      "Gestão de consultorias e projetos, acompanhamento e atendimento de chamados, desenvolvimento interno com as seguintes tecnologias: POWER AUTOMATE, POWER APPS, SHAREPOINT, JAVASCRIPT, NODE, HTML, CSS, POWERSHELL, NODE para geração de indicadores, criação de programas e melhoria em processos.",
    logo: "/sotreq-logo.jpg"
  },
  {
    empresa: "BNDES",
    cargo: "Estagiário de Análise de Sistemas (junho/2019 - Novembro/2019)",
    date: "2019 - 2019",
    atividades:
      "Manutenção no site (INTRANET) chamado Catálogo Corporativo de Dados, utilizando JAVASCRIPT, JAVA, ANGULAR, GIT, TYPESCRIPT, SHELL, SQL como principais tecnologias. Extraia informações do banco de dados e apresentava em site de modo que a consulta pudesse ser feita por qualquer pessoa, independente de conhecimentos técnicos.",
    logo: "/bndes-logo.png"
  },
];

const Experiences = () => {
  return (
    <div className="min-h-screen p-8 sm:px-28 mb-8 ">
      <h2 className="font-bold mb-2 text-xl text-left text-white w-full">Experiências</h2>

      <div className="py-8">
        <VerticalTimeline className="">
          {experiencesData.map((experience, index) => (
            <VerticalTimelineElement
              visible={true}
              key={index}
              className="vertical-timeline-element--work text-white "
              contentStyle={{backgroundColor: "#303439"}}
                   
              date={experience.date}
              iconStyle={{ background: "#15d47b", color: "#000" }}
              icon={<FaBriefcase size={40} />}
            >
              <h3 className="vertical-timeline-element-title text-white font-bold">
                {experience.empresa}
              </h3>
              <p className="vertical-timeline-element-subtitle text-white">
                {experience.atividades}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

    </div>
  );
};

export default Experiences;
