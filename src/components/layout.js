import React from "react";
import styled from "styled-components";

import { Nav, Footer } from "../components";

const ZOne = styled.div`
  position: relative;
  z-index: 1;
`;

const ZTwo = styled.div`
  position: fixed;
  z-index: 2;
`;

const ZThree = styled.div`
  position: fixed;
  z-index: 3;
`;

const Layout = ({ children }) => {
  return (
    <>
      <ZTwo>
        <Nav />
      </ZTwo>
      <ZOne>{children}</ZOne>
      <ZThree>
        <Footer />
      </ZThree>
    </>
  );
};

export default Layout;
