import React from "react";
import styled from "styled-components";

import { socialMedia, email } from "../config";
import { Icon } from "../components/icons";

const FooterContainer = styled.div`
  background-color: #fb5704;
  left: 0;
  height: 100vh;
  width: 30px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
  height: 40px;
  width: 3px;
  background-color: black;
  margin-left: 50px;
`;

const StyledEmailSection = styled.div``;

const StyledEmail = styled.a`
  display: block;
  transform: rotate(-90deg);
  margin-left: 50px;
  margin-top: 135px;
  color: black;
`;

const StyledCopyright = styled.p`
  transform: rotate(-90deg);
  margin-left: 50px;
  width: 160px;
  position: relative;
  left: -80px;
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
