import React from "react";
import styled from "styled-components";

import { socialMedia, email } from "../config";
import { Icon } from "../components/icons";

const FooterContainer = styled.div`
  @media screen and (min-width: 1008px) {
    background-color: #fb5704;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    left: 0;
    position: fixed;
    top: 0;
    width: 30px;
  }

  @media screen and (min-width: 641px) and (max-width: 1007px) {
    display: none;
  }

  @media screen and (max-width: 640px) {
    position: relative;
    width: 100%auto;
  }
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
  font-weight: bold;
  margin-left: 50px;
  margin-top: 140px;
  text-decoration: none;
  transform: rotate(-90deg);
`;

const StyledCopyright = styled.p`
  @media screen and (min-width: 1008px) {
    left: -80px;
    margin-left: 50px;
    position: relative;
    transform: rotate(-90deg);
    width: 160px;
  }

  @media screen and (max-width: 640px) {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
`;

const Footer = ({ innerWidth }) => {
  const Year = new Date().getFullYear();

  return (
    <FooterContainer>
      {innerWidth && innerWidth >= 1008 ? (
        <StyledEmailSection>
          <DecorativeDiv></DecorativeDiv>
          <StyledEmail
            href={`mailto:${email}`}
            target="_blank"
            rel="noreferrer"
          >
            {email}
          </StyledEmail>
        </StyledEmailSection>
      ) : (
        <></>
      )}
      <StyledCopyright>&copy; {Year} Maxwell Croy</StyledCopyright>
      {innerWidth && innerWidth >= 1008 ? (
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
      ) : (
        <></>
      )}
    </FooterContainer>
  );
};

export default Footer;
