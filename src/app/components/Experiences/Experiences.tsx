import React, { useState } from "react";
import Image from "next/image";
import './Experience.css'

const experiencesData = [
  {
    empresa: "PLOORAL",
    cargo: "Desenvolvedor Fullstack Javascript (Agosto/2022 - Maio/2023)",
    atividades:
      "Desenvolvimento de aplicações web utilizando as tecnologias HTML, CSS, JAVASCRIPT, BOOTSTRAP, SQL, ANGULARJS, VUEJS e NODEJS. Criação de interfaces responsivas e intuitivas utilizando HTML, CSS e BOOTSTRAP. Implementação de lógica de negócio e interatividade utilizando JAVASCRIPT e frameworks como ANGULARJS e VUEJS. Integração com bancos de dados SQL para armazenamento e recuperação de dados. Desenvolvimento de APIs e serviços utilizando Node.js para comunicação entre front-end e back-end.",
    logo: "/plooral-logo.png"
    },
  {
    empresa: "SOTREQ S/A",
    cargo: "Analista de Sistemas (Março/2020 - Agosto/2022)",
    atividades:
      "Gestão de consultorias e projetos, acompanhamento e atendimento de chamados, desenvolvimento interno com as seguintes tecnologias: POWER AUTOMATE, POWER APPS, SHAREPOINT, JAVASCRIPT, NODE, HTML, CSS, POWERSHELL, NODE para geração de indicadores, criação de programas e melhoria em processos.",
      logo: "/sotreq-logo.jpg"
    },
  {
    empresa: "BNDES",
    cargo: "Estagiário de Análise de Sistemas (junho/2019 - Novembro/2019)",
    atividades:
      "Manutenção no site (INTRANET) chamado Catálogo Corporativo de Dados, utilizando JAVASCRIPT, JAVA, ANGULAR, GIT, TYPESCRIPT, SHELL, SQL como principais tecnologias. Extraia informações do banco de dados e apresentava em site de modo que a consulta pudesse ser feita por qualquer pessoa, independente de conhecimentos técnicos.",
      logo: "/bndes-logo.png"
    },
];

const Experiences = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex < experiencesData.length - 1 ? prevIndex + 1 : 0,
    );
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : experiencesData.length - 1,
    );
  };

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-2xl">Experiências</h2>

      <div className="flex">

        <button
          className="text-3xl p-4 z-10 relative left-[3px] rounded-s-md bg-black bg-opacity-10"
          onClick={handlePrevCard}
        >
          &#8249;
        </button>

        <div className="bg-slate-500 p-4 rounded-md min-w-full relative right-10">
          <div className="flex flex-col lg:flex-row">
            <div className=" flex justify-center items-center mr-4">
              <img src={experiencesData[currentCardIndex].logo} alt={experiencesData[currentCardIndex].empresa} style={{ borderRadius: "8px", width: "100%", height: "100%", maxWidth: 500 }} />
            </div>

            <div className="w-full lg:mt-0 mt-4">
              <div className="mb-2">
                <label className="font-bold">
                Empresa
                </label>
                <h3>{experiencesData[currentCardIndex].empresa}</h3>
              </div>


              <div className="mb-2">
                <label className="font-bold">
                Função
                </label>
                <p>{experiencesData[currentCardIndex].cargo}</p>
              </div>
        
              <div className="mb-2">
                <label className="font-bold">
                Atividades
                </label>
   
                <p>{experiencesData[currentCardIndex].atividades}</p>
              </div>
  
            </div>
          </div>
        </div>
        <button
          className="text-3xl p-4 z-10 relative right-[83px] rounded-e-md  bg-black bg-opacity-10"
          onClick={handleNextCard}
        >
          &#8250;
        </button>
      </div>

      <div className="position-indicators">
        {experiencesData.map((_, index) => (
          <div
            key={index}
            className={`position-indicator ${index === currentCardIndex ? 'active' : ''}`}
            onClick={() => setCurrentCardIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
