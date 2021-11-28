import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  height: 100vh;
  position: relative;
  margin-left: 200px;
`;

const ContactMessageContainer = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 450px;
`;

const EmailButton = styled.a`
  padding: 1vh 1vw;
  border: solid black 2px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  color: black;
  display: inline-block;
`;

const Contact = () => {
  return (
    <ContactContainer  id="contact">
      <ContactMessageContainer>
        <h2>Contact</h2>
        <p>
          If you think I'd be a good fit for your team, feel free to reach out!
          web2 or web3 - I'm always on the lookout for interesting
          opportunities.
        </p>
        <p> Send me an email, and I'll do my best to get back to you.</p>
        <EmailButton href="mailto:me@maxcroy.com" target="_blank">
          Get In Touch
        </EmailButton>
      </ContactMessageContainer>
    </ContactContainer>
  );
};

export default Contact;
