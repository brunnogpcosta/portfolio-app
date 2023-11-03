import React from "react";
import Image from "next/image";

const About = () =>{
    return(
        <div className="min-h-screen">
         <h2 className="mb-8 text-2xl">Sobre</h2>

         <div className="flex">
            <Image
                    src="/eu-executivo.jpg"
                    alt="Next.js Logo"
                    width={300}
                    height={300}
                    priority
                    style={{borderRadius: 8,  borderColor: "#fff", borderWidth: 2, borderStyle: "solid" }}
                />

                <div className="ml-8">
                    <div className="mb-2">
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
                </div>
         </div>
  
        </div>

    )
}


export default About