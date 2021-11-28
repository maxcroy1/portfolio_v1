import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const HeroContainer = styled.div`
  height: 100vh;
  isolation: isolate;
  position: relative;
`;

const HeroContent = styled.div`
  margin-right: 5%;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: right;

  p {
    font-size: 1.8em;
    font-weight: bold;
    margin: 2vh auto 4vh;
    text-transform: uppercase;
  }

  a {
    border: solid black 2px;
    color: black;
    font-weight: bold;
    padding: 1vh 1vw;
    text-transform: uppercase;
    text-decoration: none;
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
