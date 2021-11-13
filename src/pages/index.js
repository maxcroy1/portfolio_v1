import * as React from "react";

import { Layout, Hero, About, Experience, Projects, Contact } from "../components";

const IndexPage = () => {
  return (
    <>
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
