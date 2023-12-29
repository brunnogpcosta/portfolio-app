import React, { useEffect, useState } from "react";
import Image from "next/image";

const About = () => {

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-2xl">Sobre</h2>

      <div className="flex flex-col lg:flex-row">
        <Image
          src="/eu-executivo.jpg"
          alt="Next.js Logo"
          width={200}
          height={200}
          priority
          style={{ borderRadius: 8, borderColor: "#fff", borderWidth: 2, borderStyle: "solid" ,   width: "100%", maxWidth: 400, height: "100%" }}        />

        <div className="lg:ml-8">
          <div className="mb-2 lg:mt-0 mt-2">
            <label className="font-bold">
              Quem sou?
            </label>
            <p>Nome: Brunno Costa </p>
            <p>Idade: {new Date().getFullYear() - 1993} anos </p>
            <p>Profissão: Programador Fullstack Javascript </p>
          </div>

          <div className="mb-2">
            <label className="font-bold">
              O que busco?
            </label>
            <p>Me tornar referência no mundo da programação, fazendo parte de projetos que revolucionem o mundo. </p>
          </div>

          <div className="mb-2">
            <label className="font-bold">
              Em que me formei?
            </label>
            <ul className=" ml-4">
              <li className="list-disc">Tecnólogo em Análise e Desenvolvimento de Sistemas na UNIGRANRIO, concluído em Junho de 2022.</li>
              <li className="list-disc">Ciência da Computação na UNICARIOCA, 5 períodos concluídos (Trancado).</li>
              <li className="list-disc">Ensino Médio - Técnico em Eletrônica na FAETEC, concluído em 2012.</li>
            </ul>
          </div>

          
          <div className="mb-2">
            <label className="font-bold">
              Quais sites eu tenho?
            </label>
            <ul className=" ml-4">
              <li className="list-disc"><a href="https://www.pregarei.com/" target="_blank">Pregarei.com</a></li>
              <li className="list-disc"><a href="https://bibleconvert.com/" target="_blank">Bibleconvert.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
