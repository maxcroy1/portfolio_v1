import React from "react";

import { Nav, Footer } from "../components";

//* https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Nav />
        <div id="content">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
