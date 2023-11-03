"use client";

import Image from "next/image";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Tecnologies from "./components/Tecnologies/Tecnologies";
import Experiences from "./components/Experiences/Experiences";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();


  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);


const menuClick = (item: string) =>{
  const targetElement = document.getElementById(item);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}



  return (
    <main className="p-8 pl-24 pr-24">
      <Header changeMenu={ (value: string) => menuClick(value)}/>

      <div
        className="flex items-center justify-center"
        style={{ minHeight: `calc(100vh - 220px)` }}
      >
        <h2 className="text-2xl">Portifolio Oficial</h2>
      </div>

      <div id="sobre">
        <About />
      </div>

      <div id="tecnologias">
        <Tecnologies />
      </div>

      <div id="experiencias">
        <Experiences />
      </div>

      <div id="projetos">
        <Projects />
      </div>

      <div id="contato">
        <Contact />
      </div>
    </main>
  );
}
