import React, { useEffect, useState } from "react";
import Image from "next/image";

const Intro = () => {

  return (
    <div className="min-h-screen p-8 sm:px-28">
      <div className="flex sm:flex-row flex-col-reverse">

        <div>
          <div className="flex flex-col h-full justify-center w-full sm:text-left text-center mt-8 sm:mt-0 ">
            <p className="text-xl">Oi, eu sou Brunno Costa </p>
            <p className="font-bold sm:text-6xl text-2xl w-auto sm:w-2/3">
              Eu sou um desenvolvedor
              <span className="bg-gradient-to-r from-[#15d47b] to-[#a4ffd5] text-transparent bg-clip-text"> full-stack</span>
            </p>

            <p className="text-slate-400 text-xl">Alguém apaixonado por transformar idéias em código.</p>
          </div>
        </div>


        <Image
          className="rounded-full"
          src="/eu.png"
          alt="Next.js Logo"
          width={200}
          height={200}
          priority
          style={{ backgroundColor: "#15d47b", borderColor: "#fff", borderWidth: 2, borderStyle: "solid", width: "100%", maxWidth: 400, height: "100%" }} />


      </div>
    </div>
  );
};

export default Intro;
