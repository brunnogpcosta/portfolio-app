import React, { useEffect, useState } from "react";
import Image from "next/image";

const skills = [

]

const About = () => {
  const [cards] = useState([
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
      id: 12,
      image: "/css-verde.png",
      title: "Tailwind",
      link: "https://tailwindui.com/S",
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
      id: 9,
      image: "/react-verde.png",
      title: "NextJs",
      link: "https://nextjs.org/docs",
      flipped: false,
    },
    
    {
      id: 5,
      image: "/react-verde.png",
      title: "ReactJs",
      link: "https://react.dev/",
      flipped: false,
    },
    {
      id: 20,
      image: "/react-verde.png",
      title: " React Native",
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
      id: 10,
      image: "/node-verde.png",
      title: "ExpressJs",
      link: "https://expressjs.com/pt-br/starter/installing.html",
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
    <div className="min-h-screen flex items-center p-8 sm:px-28 mb-8 bg-[#0f0f0f]">

      <div className="mb-2 lg:mt-0 mt-2">
        <h2 className="font-bold mb-2 text-xl">Sobre mim</h2>
        <p className="mb-4 text-3xl font-bold bg-gradient-to-r from-[#15d47b] to-[#a4ffd5] text-transparent bg-clip-text">Brunno Costa </p>
        <p className="text-slate-400"> Desenvolvedor fullstack que quer se tornar referência no mundo da programação, fazendo parte de projetos que revolucionem o mundo. </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {cards.map(card => (
            <a href={card.link} target="_blank" key={card.id}><p className="p-2 bg-[#303439] hover:bg-[#15d47b] rounded-md mr-2">{card.title}</p></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
