import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const AboutContainer = styled.div`
  height: 100vh;
  position: relative;

  @media screen and (max-width: 640px) {
    margin: 0 5%;
  }

  @media screen and (min-width: 641px) {
    margin-left: 200px;
  }
`;

const AboutContentContainer = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (min-width: 641px) {
    float: left;
    width: 50%;
  }
`;

const AboutContent = styled.div`
  @media screen and (min-width: 641px) {
    width: 400px;
  }
`;

const ImageContainer = styled.div`
  float: left;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const ImageContent = styled.div`
  box-shadow: 15px 15px black;
  width: 400px;
`;

const AboutList = styled.ul`
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  line-height: 1.5em;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContentContainer>
        <AboutContent>
          <h2>
            <u>About</u>
          </h2>
          <p>I'm Max, a software engineer based in Brooklyn, NY.</p>
          <p>
            While my passion for programming was sparked by an interest in web
            design, these days I'm focused on doing my part to help build web3
            and the Metaverse - whatever that ends up being.
          </p>
          <p>
            My goal is to build first-class web3 experiences that solve tangible
            problems and look great doing it.
          </p>
          <p>
            Here's a list of some of the technologies I've been working with
            lately:
            <AboutList>
              <li>JavaScript</li>
              <li>Solidity</li>
              <li>Go</li>
              <li>React</li>
              <li>Alchemy</li>
              <li>Ruby</li>
            </AboutList>
          </p>
        </AboutContent>
      </AboutContentContainer>
      <ImageContainer>
        <ImageContent>
          <StaticImage src="../../images/me.JPG" width={400} />
        </ImageContent>
      </ImageContainer>
    </AboutContainer>
  );
};

export default About;
