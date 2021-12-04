import React from "react";
import styled from "styled-components";

import { Nav, Footer } from "../components";

const ZOne = styled.div`
  position: relative;
  z-index: 1;
`;

const ZTwo = styled.div`
  position: fixed;

  @media screen and (min-width: 641px) {
    z-index: 2;
  }

  @media screen and (max-width: 640px) {
    z-index: 3;
  }
`;

const ZThree = styled.div`
  @media screen and (min-width: 641px) {
    position: fixed;
    z-index: 3;
  }

  @media screen and (max-width: 640px) {
    position: relative;
    z-index: 2;
  }
`;

const Layout = ({ children, innerWidth }) => {
  return (
    <>
      <ZTwo>
        <Nav innerWidth={innerWidth} />
      </ZTwo>
      <ZOne>{children}</ZOne>
      <ZThree>
        <Footer innerWidth={innerWidth} />
      </ZThree>
    </>
  );
};

export default Layout;
