import React from "react";
import styled from "styled-components";

import { Nav, Footer } from "../components";

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
