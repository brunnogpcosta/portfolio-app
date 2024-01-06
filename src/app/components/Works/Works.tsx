import React, { useEffect, useState } from "react";


const works = [
  {
    title: "Pregarei.com",
    description:
      "Uma rede social cristã dedicada a auxiliar pessoas na disseminação do Ide do evangelho, conectando comunidades e promovendo a troca de experiências espirituais.",
    thumbnail: "/pregarei.png",
    link: "https://www.pregarei.com/"
  },
  {
    title: "ExtractLight",
    description:
      "Uma ferramenta eficaz para a gestão do consumo de energia elétrica, permitindo a visualização do consumo por fatura e possibilitando o download de faturas para uma análise mais detalhada.",
    thumbnail: "/extract-light.png",
    link: "https://extract-light.vercel.app/"
  },
  {
    title: "BibleConvert",
    description:
      "Um site dedicado a facilitar a conversão de medidas bíblicas antigas para as medidas atuais, proporcionando uma compreensão mais clara e contextualizada das referências bíblicas.",
    thumbnail: "/bibleconvert.png",
    link: "https://bibleconvert.com/"
  },
  {
    title: "ABEC",
    description:
      "O portal online de uma associação brasileira de empreendedores cristãos, oferecendo recursos e informações valiosas para a comunidade de empreendedores que compartilham valores cristãos.",
    thumbnail: "/abec.png",
    link: "https://portal-abec-frontend.vercel.app/"
  },
  {
    title: "Laboratório de Sábios",
    description:
      "Um site inovador que disponibiliza diversas ferramentas úteis, incluindo gerador de currículos, código de cores, conversor binário, cronômetro, gerador de viagens, gerador de div HTML e inversor de texto.",
    thumbnail: "/laboratoriodesabios.png",
    link: "https://www.laboratoriodesabios.com/"
  },
];



const Works = () => {
  return (
    <div className="min-h-screen  p-8 sm:px-28 mb-8 bg-[#0f0f0f]">
      <h2 className="font-bold mb-2 text-xl">{`Projetos`}</h2>
      <p className="text-slate-400 text-justify mb-8">Abaixo destaco alguns dos projetos desenvolvidos por mim..</p>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8">
        {works.map((work) => (
          <a href={work.link} target="_blank" key={work.title}>
            <div className="flex flex-col">
              <img
                className="mb-2 rounded"
                src={work.thumbnail}
                alt={'Imagem de '+ work.title}
                style={{ width: "100%", height: "250px" }}
              />
              <div className="">
                <div className="mb-2 font-bold">
                  <p>{work.title}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-justify">{work.description}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Works;