import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="p-8 sm:px-28 bg-[#0f0f0f] flex items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center">

        <div className="w-full sm:mr-8">
          <div className="flex flex-col h-full justify-center w-full sm:text-left text-center mt-8 sm:mt-0 ">
            <p className="text-xl">Oi, eu sou Brunno Costa </p>
            <p className="font-bold sm:text-6xl text-2xl w-auto sm:w-2/3">
              Eu sou um desenvolvedor
              <span className="bg-gradient-to-r from-[#15d47b] to-[#a4ffd5] text-transparent bg-clip-text"> full-stack</span>
            </p>

            <p className="text-slate-400 text-xl">Alguém apaixonado por transformar ideias em código.</p>
          </div>
        </div>

        <div className="w-full max-w-md sm:mt-0 mt-8">
          <Image
            className="rounded-full"
            src="/eu.png"
            alt="Next.js Logo"
            width={200}
            height={200}
            priority
            style={{ backgroundColor: "#15d47b", borderColor: "#fff", borderWidth: 2, borderStyle: "solid", width: "100%", height: "100%" }}
          />
        </div>

      </div>
    </div>
  );
};

export default Intro;
