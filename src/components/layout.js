import React from "react";
import styled from "styled-components";

import { Nav, Footer } from "../components";

//* https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const StyledContent = styled.div`
`;

const Layout = ({ children }) => {
  return (
    <>
      <StyledContent>
        <Nav />
        <div id="content">{children}</div>
        <Footer />
      </StyledContent>
    </>
  );
};

export default Layout;
