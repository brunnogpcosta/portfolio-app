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
    <header className="p-8 sm:px-28 mb-8">
      <div className="w-full mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{`Brunno `}<span className="text-[#15d47b]">Costa</span></h1>
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              <FaBars size={24} />
            </button>
          </div>

          <div className="sm:flex items-center justify-between hidden">
            <a href="/curriculum/brunno_cv.pdf" download="brunno_cv" className="bg-[#15d47b] p-2 rounded-md text-black font-bold flex items-center justify-center">
              <FaDownload className="mr-2" />
              Baixar CV</a>
          </div>

        </div>

        <div className="flex items-center justify-between sm:hidden w-full mt-6">
          <a href="/curriculum/brunno_cv.pdf" download="brunno_cv" className="w-full bg-[#15d47b] p-2 rounded-md text-black font-bold flex items-center justify-center">
            <FaDownload className="mr-2" />
            Baixar CV</a>
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
        {/* <a href="#tecnologias" onClick={() => changeMenu("tecnologias")}>
          <li className="border-2 border-white p-4 rounded-md mb-2 cursor-pointer lg:w-full transition duration-300 ease-in-out hover:bg-[#15d47b] hover:text-green-900 font-bold">
            Tecnologias
          </li>
        </a> */}
        <a href="#projetos" onClick={() => changeMenu("projetos")}>
          <li className="border-2 border-white p-4 rounded-md mb-2 cursor-pointer lg:w-full transition duration-300 ease-in-out hover:bg-[#15d47b] hover:text-green-900 font-bold">
            Projetos
          </li>
        </a>
        <a href="#experiencias" onClick={() => changeMenu("experiencias")}>
          <li className="border-2 border-white p-4 rounded-md mb-2 cursor-pointer lg:w-full transition duration-300 ease-in-out hover:bg-[#15d47b] hover:text-green-900 font-bold">
            Experiências
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
