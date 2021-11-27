import React from "react";
import styled from "styled-components";

import { Nav, Footer } from "../components";

//* https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const Layout = ({ children }) => {
  return (
    <>
      <ContentContainer>
        <div style={{ zIndex: "2", position: "fixed" }}>
          <Nav />
        </div>
        <div style={{ zIndex: "1", position: "relative" }}>
          <div id="content">{children}</div>
        </div>
        <div style={{ zIndex: "3", position: "relative" }}>
          <Footer />
        </div>
      </ContentContainer>
    </>
  );
};

export default Layout;
