import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

interface IHeader {
  changeMenu: (item: string) => void;
}

const Header: React.FC<IHeader> = ({ changeMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="w-full mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Brunno Costa</h1>
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              <FaBars size={24} />
            </button>
          </div>
          <p className="hidden lg:flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="font-mono font-bold">brunnogpcosta@gmail.com</code>
          </p>
        </div>
      </div>
      <ul
        className={`lg:flex lg:justify-between ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <a href="#sobre" onClick={() => changeMenu("sobre")}>
          <li className="border-2 border-white p-4 rounded-md mb-2 cursor-pointer lg:w-full transition duration-300 ease-in-out hover:bg-green-400 hover:text-green-900 font-bold">
            Sobre
          </li>
        </a>
        <a href="#tecnologias" onClick={() => changeMenu("tecnologias")}>
          <li className="border-2 border-white p-4 rounded-md mb-2 cursor-pointer lg:w-full transition duration-300 ease-in-out hover:bg-green-400 hover:text-green-900 font-bold">
            Tecnologias
          </li>
        </a>
        <a href="#experiencias" onClick={() => changeMenu("experiencias")}>
          <li className="border-2 border-white p-4 rounded-md mb-2 cursor-pointer lg:w-full transition duration-300 ease-in-out hover:bg-green-400 hover:text-green-900 font-bold">
            Experiências
          </li>
        </a>
        <a href="#projetos" onClick={() => changeMenu("projetos")}>
          <li className="border-2 border-white p-4 rounded-md mb-2 cursor-pointer lg:w-full transition duration-300 ease-in-out hover:bg-green-400 hover:text-green-900 font-bold">
            Projetos
          </li>
        </a>
        <a href="#contato" onClick={() => changeMenu("contato")}>
          <li className="border-2 border-white p-4 rounded-md mb-2 cursor-pointer lg:w-full transition duration-300 ease-in-out hover:bg-green-400 hover:text-green-900 font-bold">
            Contato
          </li>
        </a>
      </ul>
    </header>
  );
};

export default Header;
