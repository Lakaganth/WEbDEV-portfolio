import React from "react";
import LazyLoad from "react-lazyload";
import { HeroComp } from "../components/hero/HeroComp";
import { AboutComp } from "../components/about/AboutComp";
import { Skills } from "../components/skills/Skills";
import { ProjectCard } from "../components/projects/ProjectCard";

export const HomePage = () => {
  return (
    <div>
      <HeroComp></HeroComp>
      <LazyLoad height={40}>
        <AboutComp></AboutComp>
        <Skills></Skills>
        <ProjectCard></ProjectCard>
      </LazyLoad>
    </div>
  );
};
