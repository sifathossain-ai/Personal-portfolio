import React from "react";
import Hero from "./Hero/Hero";
import Experience from "./Experience/Experience";
import Achievements from "./Achievements/Achievements";
import Skills from "./Skills/Skills";
import ProblemSolving from "./ProblemSolving/ProblemSolving";
import Projects from "./Projects/Projects";
import Education from "./Education/Education";
import ContactMe from "./ContactMe/ContactMe";

const Home = () => {
  return (
    <div className="space-y-20 md:space-y-28">
      <Hero />
      <Experience />
      <Achievements />
      <Skills />
      <ProblemSolving />
      <Projects />
      <Education />
      <ContactMe />
    </div>
  );
};

export default Home;
