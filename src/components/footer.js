import React from "react";
import styled from "styled-components";

import { socialMedia, email } from "../config";
import { Icon } from "../components/icons";

const StyledSocialLinks = styled.div`
  ul {
    list-style-type: none;
  }
`;

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ url, name }, i) => (
              <li key={i}>
                <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>
      <p>&copy; {Year} Maxwell Croy</p>
      <a href={`mailto:${email}`} target="_blank" rel="noreferrer">{email}</a>
    </>
  );
};

export default Footer;
