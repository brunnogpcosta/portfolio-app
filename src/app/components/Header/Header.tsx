import React, { useState } from "react";
import { FaBars, FaDownload } from "react-icons/fa";

interface IHeader {
  changeMenu: (item: string) => void;
}

const Header: React.FC<IHeader> = ({ changeMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mb-8">
      <div className="w-full mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">{`Brunno Costa`}</h1>
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              <FaBars size={24} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-[#15d47b] p-2 rounded-md text-black font-bold flex items-center justify-center">
              <FaDownload className="mr-2"/>
              Baixar CV</button>
          </div>

        </div>
      </div>
      <ul
        className={`lg:flex lg:justify-between ${isMenuOpen ? "block" : "hidden"
          }`}
      >
        <a href="#sobre" onClick={() => changeMenu("sobre")}>
          <li className="border-2 border-white p-4 rounded-md mb-2 cursor-pointer lg:w-full transition duration-300 ease-in-out hover:bg-[#15d47b] hover:text-green-900 font-bold">
            Sobre
          </li>
        </a>
        <a href="#tecnologias" onClick={() => changeMenu("tecnologias")}>
          <li className="border-2 border-white p-4 rounded-md mb-2 cursor-pointer lg:w-full transition duration-300 ease-in-out hover:bg-[#15d47b] hover:text-green-900 font-bold">
            Tecnologias
          </li>
        </a>
        <a href="#experiencias" onClick={() => changeMenu("experiencias")}>
          <li className="border-2 border-white p-4 rounded-md mb-2 cursor-pointer lg:w-full transition duration-300 ease-in-out hover:bg-[#15d47b] hover:text-green-900 font-bold">
            Experiências
          </li>
        </a>
        <a href="#projetos" onClick={() => changeMenu("projetos")}>
          <li className="border-2 border-white p-4 rounded-md mb-2 cursor-pointer lg:w-full transition duration-300 ease-in-out hover:bg-[#15d47b] hover:text-green-900 font-bold">
            Projetos
          </li>
        </a>
        <a href="#contato" onClick={() => changeMenu("contato")}>
          <li className="border-2 border-white p-4 rounded-md mb-2 cursor-pointer lg:w-full transition duration-300 ease-in-out hover:bg-[#15d47b] hover:text-green-900 font-bold">
            Contato
          </li>
        </a>
      </ul>
    </header>
  );
};

export default Header;
