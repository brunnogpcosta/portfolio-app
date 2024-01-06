import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const Projects = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [projects, setProjects] = useState<any>([]);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex < projects.length - 1 ? prevIndex + 1 : 0,
    );
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 1,
    );
  };

  const capitalizeWords = (text: string) => {
    return text
      .replace(/_/g, " ")
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/brunnogpcosta/repos?type=public`)
      .then((response: any) => {
        setProjects(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="py-20 p-8 sm:px-28 mb-8 bg-[#0f0f0f]">
        <h2 className="font-bold mb-2 text-xl">{`Projetos (${projects.length})`}</h2>

      <div className="flex">
        <button
          className="text-3xl p-4 z-10 relative left-[3px] rounded-s-md  bg-black bg-opacity-10"
          onClick={handlePrevCard}
        >
          &#8249;
        </button>
        <div className="bg-slate-500 p-4 rounded-md min-w-full relative right-10">
          {projects[currentCardIndex] && (
            <a href={projects[currentCardIndex].html_url} target="_blank">
              <div className="flex">
                {/* <div className=" flex justify-center items-center mr-4">
                <Image
                    src={projects[currentCardIndex].logo}
                    width={300}
                    height={300}
                    alt={""}
                    style={{ borderRadius: 8 }}
                />
                </div> */}

                {projects[currentCardIndex].name && (
                  <div className="w-full mx-9">
                    <div className="mb-2">
                      <label className="font-bold">Nome</label>
                      <p>{capitalizeWords(projects[currentCardIndex].name)}</p>
                    </div>

                    {projects[currentCardIndex].description && (
                      <div>
                        <label className="font-bold">Descrição</label>
                        <p>{projects[currentCardIndex].description}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </a>
          )}
        </div>

        <button
          className="text-3xl p-4 z-10 relative right-[83px] rounded-e-md  bg-black bg-opacity-10"
          onClick={handleNextCard}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Projects;
