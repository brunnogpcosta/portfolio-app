"use client"

import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Tecnologies from "./components/Tecnologies/Tecnologies";
import Experiences from "./components/Experiences/Experiences";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Carousel from "./components/Carousel/Carousel";

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

  const menuClick = (item: string) => {
    const targetElement = document.getElementById(item);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Use useInView to detect when a section is in the viewport
  const [aboutRef, aboutInView] = useInView();
  const [technologiesRef, technologiesInView] = useInView();
  const [experiencesRef, experiencesInView] = useInView();
  const [projectsRef, projectsInView] = useInView();
  const [contactRef, contactInView] = useInView();

  // Define animações para as seções
  const aboutAnimation = useSpring({
    opacity: aboutInView ? 1 : 0,
    transform: aboutInView ? "translateX(0)" : "translateX(-100px)",
  });

  const technologiesAnimation = useSpring({
    opacity: technologiesInView ? 1 : 0,
    transform: technologiesInView ? "translateX(0)" : "translateX(-100px)",
  });

  const experiencesAnimation = useSpring({
    opacity: experiencesInView ? 1 : 0,
    transform: experiencesInView ? "translateX(0)" : "translateX(-100px)",
  });

  const projectsAnimation = useSpring({
    opacity: projectsInView ? 1 : 0,
    transform: projectsInView ? "translateX(0)" : "translateX(-100px)",
  });

  const contactAnimation = useSpring({
    opacity: contactInView ? 1 : 0,
    transform: contactInView ? "translateX(0)" : "translateX(-100px)",
  });

  return (
    <main className="p-8">
      <Header changeMenu={(value: string) => menuClick(value)} />

      <div
        className="flex items-center justify-center"
        style={{ minHeight: `calc(100vh - 220px)` }}
      >
        <Carousel />
      </div>

      <animated.div ref={aboutRef} id="sobre" style={aboutAnimation}>
        <About />
      </animated.div>

      <animated.div ref={technologiesRef} id="tecnologias" style={technologiesAnimation}>
        <Tecnologies />
      </animated.div>

      <animated.div ref={experiencesRef} id="experiencias" style={experiencesAnimation}>
        <Experiences />
      </animated.div>

      <animated.div ref={projectsRef} id="projetos" style={projectsAnimation}>
        <Projects />
      </animated.div>

      <animated.div ref={contactRef} id="contato" style={contactAnimation}>
        <Contact />
      </animated.div>
    </main>
  );
}

