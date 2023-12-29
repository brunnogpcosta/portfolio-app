import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import "./Contact.css"

const Contact = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      image: <FaEnvelope size={100} />,
      title: "Email",
      description: "brunnogpcosta@gmail.com",
      link: "mailto:brunnogpcosta@gmail.com",
      flipped: false,
    },
    {
      id: 2,
      image: <FaPhone size={100} />,
      title: "Celular",
      description: "+55 (21) 97035-6311",
      link: "https://wa.me/5521970356311",
      flipped: false,
    },
    {
      id: 3,
      image: <FaLinkedin size={100} />,
      title: "Linkedin",
      description: "https://www.linkedin.com/in/brunnogpcosta",
      link: "https://www.linkedin.com/in/brunnogpcosta",
      flipped: false,
    },
  ]);

  return (
    <div>
      <h2 className="mb-4 text-2xl">Contato</h2>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`mb-8 ${card.flipped ? "flipped" : ""}`}
            >
            
                <div className="rounded">
                <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                  <div className="bg-[#15d47b] h-[200px] rounded-md flex justify-center items-center cursor-pointer ">
                    {card.image}
                  </div>
                  </a>
                  <h3 className="mt-2 font-bold">{card.title}</h3>
                  <p className=" mt-2 flex w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <code className="font-mono font-bold overflow-auto no-scrollbar lg:pl-0 pl-4">
                      {card.description}
                    </code>
                  </p>
                </div>
    
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Contact;
