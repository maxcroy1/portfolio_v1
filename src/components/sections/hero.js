import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const HeroContainer = styled.div`
  height: 100vh;
  position: relative;
  isolation: isolate;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: right;
  right: 0;
  margin-right: 5%;

  p {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.8em;
    margin: 2vh auto 4vh;
  }

  a {
    padding: 1vh 1vw;
    border: solid black 2px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>
          Maxwell
          <br />
          <u>Croy</u>
        </h1>
        <p>
          Software Engineer
          <br />
          {`//`} web3 Developer
        </p>
        <Link
          to="contact"
          smooth={true}
          duration={600}
        >
          Get In Touch
        </Link>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
