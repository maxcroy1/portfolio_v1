import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { navLinks } from "../config";

const StyledLinks = styled.div`
  position: fixed;
  isolation: isolate;
  top: 0;
  left: 0;
  background-color: #FAF2E5;
  width: 100%;
  height: 100px;

  ul {
    position: absolute;
    right: 0;
    margin: 5vh 6vw 0 0;
  }

  li {
    font-weight: bold;
    font-size: 0.8em;
    display: inline;
    padding-left: 1vw;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

const Nav = () => {
  return (
    <StyledLinks>
      <ul>
        {navLinks &&
          navLinks.map(({ url, name }, i) => (
            <li key={i}>
              <Link to={url}>
                {i + 1}. {name}
              </Link>
            </li>
          ))}
      </ul>
    </StyledLinks>
  );
};

export default Nav;
