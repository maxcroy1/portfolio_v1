import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { navLinks } from "../config";

const StyledLinks = styled.div`

    li{
      font-weight: bold;
    }

    a {
      color: black;
      text-decoration: none;
    }
`;

const Nav = () => {
  return (
    <>
      <StyledLinks>
        <ol>
          {navLinks &&
            navLinks.map(({ url, name }, i) => (
              <li key={i}>
                <Link to={url}>{name}</Link>
              </li>
            ))}
        </ol>
      </StyledLinks>
    </>
  );
};

export default Nav;
