import React, { useState } from "react";

const Tecnologies = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      image: "/html-verde.png",
      title: "HTML5",
      flipped: false,
    },
    {
      id: 2,
      image: "/css-verde.png",
      title: "CSS",
      flipped: false,
    },
    {
      id: 3,
      image: "/js-verde.png",
      title: "Javascript",
      flipped: false,
    },
    {
      id: 4,
      image: "/ts-verde.png",
      title: "Typescript",
      flipped: false,
    },
    {
      id: 5,
      image: "/react-verde.png",
      title: "ReactJs",
      flipped: false,
    },
    {
      id: 6,
      image: "/react-verde.png",
      title: "React native",
      flipped: false,
    },
    {
      id: 7,
      image: "/node-verde.png",
      title: "NodeJs",
      flipped: false,
    },
    {
      id: 8,
      image: "/sql-verde.png",
      title: "Banco de Dados",
      flipped: false,
    },
  ]);

  return (
    <div className="min-h-screen">
      <h2 className="mb-8 text-2xl">Tecnologias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div key={card.id} className={`mb-8 ${card.flipped ? "flipped" : ""}`}>
            <div className="p-4 rounded">
              <img src={card.image} alt={card.title} style={{ borderRadius: "8px", width: "100%", height: "100%" }} />
              <h3 className="mt-2">{card.title}</h3>
              <p>{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tecnologies;
