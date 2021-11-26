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
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactMessageContainer>
        <h2>Contact</h2>
      </ContactMessageContainer>
    </ContactContainer>
  );
};

export default Contact;
