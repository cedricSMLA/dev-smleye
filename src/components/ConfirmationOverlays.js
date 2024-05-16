import React from "react";
import styled from "styled-components";

const ConfirmationOverlay = ({ countdown }) => (
  <Overlay>
    <ConfirmationMessage>
      Merci ! Votre demande a été envoyée. Redirection dans {countdown}{" "}
      secondes.
    </ConfirmationMessage>
  </Overlay>
);

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ConfirmationMessage = styled.p`
  padding: 20px;
  border-radius: 10px;
  background: white;
  color: #4caf50;
  font-size: 16px;
`;

export default ConfirmationOverlay;
