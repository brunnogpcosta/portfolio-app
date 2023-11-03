import Image from "next/image";
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
      id: 4,
      image: "/react-verde.png",
      title: "ReactJs",
      flipped: false,
    },
  ]);


  return (
    <div className="min-h-screen">
         <h2 className="mb-8 text-2xl">Tecnologias</h2>
      <div className="flex">
        {cards.map((card) => (
          <div key={card.id} className={`mr-4 card ${card.flipped ? "flipped" : ""}`}>
            <div className="">
              <Image src={card.image} alt={card.title}  width={200}
                    height={200} style={{borderRadius: 8}}/>
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
