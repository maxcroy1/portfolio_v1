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

  @media screen and (max-width: 640px) {
    h1 {
      font-size: 3.3em;
    }
  }

  @media screen and (min-width: 641px) {
    h1 {
      font-size: 7em;
    }

    h2 {
      font-size: 3.8em;
      margin: 0;
    }

    h3 {
      margin: 0;
      font-size: 1.5em;
    }

    h4 {
      margin: 0;
    }
  }

  h1 {
    line-height: 1em;
    margin: auto;
    text-transform: uppercase;
  }

  h2 {
    text-decoration: underline;
    text-transform: uppercase;
  }

  p {
    font-weight: bold;
  }

  h3 {
    a {
      color: black;
    }
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
