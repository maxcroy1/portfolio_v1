import React, { useState, useEffect } from "react";
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
    line-height: 1em;
    margin: auto;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
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
    @media screen and (min-width: 641px) {
      border-bottom: 2px solid black;
    }
  }

  @media screen and (max-width: 640px) {
    h1 {
      font-size: 3.3em;
    }

    h2 {
      font-size: 2.5em;
    }

    p {
      font-size: .95em;
    }
  }

  @media screen and (min-width: 641px) {
    h1 {
      font-size: 7em;
    }

    h2 {
      font-size: 3.8em;
    }

    h3 {
      margin: 0;
      font-size: 1.5em;
    }

    h4 {
      margin: 0;
    }
  }
`;

const IndexPage = () => {
  const [innerWidth, setInnerWidth] = useState(641);

  useEffect(() => {
    if (window !== undefined) {
      setInnerWidth(window.innerWidth);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Layout innerWidth={innerWidth}>
        <Hero />
        <About />
        <Experience innerWidth={innerWidth} />
        <Projects innerWidth={innerWidth} />
        <Contact />
      </Layout>
    </>
  );
};

export default IndexPage;
