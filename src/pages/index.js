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
    line-height: 1em;
    margin: auto;
    text-transform: uppercase;
  }

  h2 {
    font-size: 3.8em;
    margin: 0;
    text-decoration: underline;
    text-transform: uppercase;
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

  a:hover {
    cursor: pointer;
  }

  a.active {
    border-bottom: 2px solid black;
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
