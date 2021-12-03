import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";
import { Link } from "react-scroll";

const StyledMenu = styled.nav`
  background: #faf2e5;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: fixed;
  right: 0;
  text-align: right;
  top: 0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(+100%)")};
  transition: transform 0.3s ease-in-out;
  width: 100%;

  ul {
    list-style: none;
    padding: 0;
    text-align: center;
  }

  li {
    margin: 10px 0;
  }

  a {
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem 0;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s linear;
  }
`;

const BurgerMenu = ({ navLinks, open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
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
                onClick={() => setOpen(!open)}
              >
                {i + 1}. {name}
              </Link>
            </li>
          ))}
      </ul>
    </StyledMenu>
  );
};

BurgerMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default BurgerMenu;
