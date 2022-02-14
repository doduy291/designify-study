import React from "react";
import Hero from "../containers/Home/Hero";
import Features from "../containers/Home/Features";
import Clients from "../containers/Home/Clients";
import Content from "../containers/Home/Content";
import { Heading } from "../globalStyles";
import { heroOne, heroTwo, heroThree, heroFour } from "../data/HeroData";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Clients />
      <Heading id="projects">Our Projects</Heading>
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Content {...heroFour} />
    </>
  );
};

export default HomePage;
