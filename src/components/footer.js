import React from "react";
import styled from "styled-components";

import { socialMedia, email } from "../config";
import { Icon } from "../components/icons";

const FooterContainer = styled.div`
  background-color: #fb5704;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  left: 0;
  position: fixed;
  top: 0;
  width: 30px;
`;

const StyledSocialLinks = styled.div`
  ul {
    list-style-type: none;
    margin-bottom: 5px;
  }

  li {
    margin-bottom: 3px;
  }
`;

const DecorativeDiv = styled.div`
  background-color: black;
  height: 40px;
  margin-left: 50px;
  width: 3px;
`;

const StyledEmailSection = styled.div``;

const StyledEmail = styled.a`
  color: black;
  display: block;
  font-weight:bold;
  margin-left: 50px;
  margin-top: 140px;
  text-decoration: none;
  transform: rotate(-90deg);
`;

const StyledCopyright = styled.p`
  left: -80px;
  margin-left: 50px;
  position: relative;
  transform: rotate(-90deg);
  width: 160px;
`;

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <FooterContainer>
      <StyledEmailSection>
        <DecorativeDiv></DecorativeDiv>
        <StyledEmail href={`mailto:${email}`} target="_blank" rel="noreferrer">
          {email}
        </StyledEmail>
      </StyledEmailSection>
      <StyledCopyright>&copy; {Year} Maxwell Croy</StyledCopyright>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ url, name }, i) => (
              <li key={i}>
                <a
                  href={url}
                  aria-label={name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
        <DecorativeDiv></DecorativeDiv>
      </StyledSocialLinks>
    </FooterContainer>
  );
};

export default Footer;
