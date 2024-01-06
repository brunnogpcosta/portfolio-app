import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaCopy } from "react-icons/fa";
import "./Contact.css"

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState<boolean | null>(null);
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
      image: <img src="whatsapp-xxl.png" width={100} height={100} />,
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
      link: "https://www.linkedin.com/in/brunnocosta",
      flipped: false,
    },
  ]);


  const handleCopyClick = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => setCopySuccess(true))
      .catch(() => setCopySuccess(false));

    setTimeout(() => setCopySuccess(null), 1500);
  };

  return (
    <div className="min-h-screen  flex flex-col justify-center p-8 sm:px-28  bg-[#0f0f0f]">
      <h2 className="font-bold mb-2 text-xl">Contato</h2>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`w-full mb-8`}
          >

            <div className="rounded-sm w-full">
              <a
              className="w-full"
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="bg-[#15d47b] h-[200px] m-w-full rounded-md flex justify-center items-center cursor-pointer ">
                  {card.image}
                </div>
              </a>
              <h3 className="mt-2 font-bold">{card.title}</h3>
              <div className="w-full justify-between mt-2 flex  border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <code className="w-full font-mono font-bold overflow-auto no-scrollbar lg:pl-0 pl-4 mr-4">
                  {card.description}
                </code>
                <div className="cursor-pointer sm:mr-0 mr-4" onClick={() => handleCopyClick(card.description)}>
                  <FaCopy size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* {copySuccess === true && <p className="text-green-200 absolute bg-green-800 p-4 rounded-md">Copiado para a área de transferência!</p>}
            {copySuccess === false && <p className="text-red-200 absolute bg-red-800 p-4 rounded-md">Erro ao copiar. Tente novamente.</p>} */}
    </div>

  );
};

export default Contact;
