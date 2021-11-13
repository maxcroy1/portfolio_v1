import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const AboutContainer = styled.div``;

const About = () => {
  return (
    <AboutContainer>
      <h2>About</h2>
      <StaticImage src="../../images/me.JPG" width={400} />
      <p>I'm Max, a software engineer based in Brooklyn, NY.</p>
      <p>
        While my passion for programming was sparked by an interest in web
        design, these days I'm focused on doing my part to help build web3 and
        the Metaverse - whatever that ends up being.
      </p>
      <p>
        My goal is to build first-class web3 experiences that solve tangible
        problems and look great doing it.
      </p>
      <p>
        Here's a list of some of the technologies I've been working with lately:
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Go</li>
          <li>Ruby</li>
          <li>Solidity</li>
          <li>Alchemy</li>
        </ul>
      </p>
    </AboutContainer>
  );
};

export default About;
