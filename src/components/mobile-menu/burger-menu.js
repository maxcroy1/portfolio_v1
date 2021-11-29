import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";

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
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(+100%)'};;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 640px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 640px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

const BurgerMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">1. About</a>
      <a href="/">2. Experience</a>
      <a href="/">3. Projects</a>
      <a href="/">4. Contact</a>
    </StyledMenu>
  );
};

BurgerMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default BurgerMenu;
