import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

import { navLinks } from "../config";
import { Burger, BurgerMenu } from ".";

const StyledLinks = styled.div`
  background-color: #faf2e5;
  isolation: isolate;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;

  @media screen and (max-width: 640px) {
    display: none;
  }

  ul {
    position: absolute;
    right: 0;
    margin: 5vh 6vw 0 0;
  }

  li {
    font-size: 0.8em;
    font-weight: bold;
    display: inline;
    padding-left: 1vw;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

const BurgerContainer = styled.div`
  @media screen and (min-width: 1008px) {
    display: none;
  }

  @media screen and (min-width: 641px) and (max-width: 1007px) {
    display: none;
  }

  @media screen and (max-width: 641px) {
  }
`;

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledLinks>
        <ul>
          {navLinks &&
            navLinks.map(({ url, name }, i) => (
              <li key={i}>
                <Link
                  activeClass="active"
                  to={url}
                  spy={true}
                  smooth={true}
                  duration={600}
                >
                  {i + 1}. {name}
                </Link>
              </li>
            ))}
        </ul>
      </StyledLinks>
      <BurgerContainer>
        <Burger open={open} setOpen={setOpen} />
        <BurgerMenu open={open} setOpen={setOpen} />
      </BurgerContainer>
    </>
  );
};

export default Nav;
