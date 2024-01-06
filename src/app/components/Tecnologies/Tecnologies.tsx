import React, { useState } from "react";

const Tecnologies = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      image: "/html-verde.png",
      title: "HTML5",
      link: "https://dev.w3.org/html5/spec-LC/",
      flipped: false,
    },
    {
      id: 2,
      image: "/css-verde.png",
      title: "CSS",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      flipped: false,
    },
    {
      id: 3,
      image: "/js-verde.png",
      title: "Javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      flipped: false,
    },
    {
      id: 4,
      image: "/ts-verde.png",
      title: "Typescript",
      link: "https://www.typescriptlang.org/docs/",
      flipped: false,
    },
    {
      id: 5,
      image: "/react-verde.png",
      title: "React e React Native",
      link: "https://react.dev/",
      flipped: false,
    },
    {
      id: 7,
      image: "/node-verde.png",
      title: "NodeJs",
      link: "https://nodejs.org/en/docs",
      flipped: false,
    },
    {
      id: 8,
      image: "/sql-verde.png",
      title: "Banco de Dados",
      link: "https://www.alura.com.br/artigos/sql-nosql-bancos-relacionais-nao-relacionais",
      flipped: false,
    },
  ]);

  return (
    <div className=" p-8 sm:px-28 mb-8">
      <h2 className="mb-4 text-2xl">Tecnologias</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {cards.map((card) => (
          <div key={card.id} >
            <div className="rounded">
              <a href={card.link} target="_black">
                <img src={card.image} alt={card.title} style={{ borderRadius: "8px", width: "100%", height: "100%" }} />
              </a>
              <h3 className="mt-2">{card.title}</h3>
              {/* <p>{card.title}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tecnologies;
