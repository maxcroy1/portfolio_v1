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
`;

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {window.innerWidth && window.innerWidth <= 640 ? (
        <BurgerContainer>
          <Burger open={open} setOpen={setOpen} />
          <BurgerMenu open={open} setOpen={setOpen} />
        </BurgerContainer>
      ) : (
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
      )}
    </>
  );
};

export default Nav;
