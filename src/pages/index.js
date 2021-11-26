import * as React from "react";
import { createGlobalStyle } from "styled-components";

import {
  Layout,
  Hero,
  About,
  Experience,
  Projects,
  Contact,
} from "../components";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #FAF2E5;
    font-family: Helvetica, sans-serif;
  }

  h1 {
    font-size: 7em;
    text-transform: uppercase;
    line-height: 1em;
    margin: auto;
  }

  h2 {
    font-size: 3.8em;
    text-transform: uppercase;
    margin: 0;
  }

  p {
    font-weight: bold;
  }

  h3 {
    margin: 0;
    font-size: 1.5em;

    a {
      color: black;
    }
  }

  h4 {
    margin: 0;
  }
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default IndexPage;
