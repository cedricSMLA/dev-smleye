import React from "react";
import styled from "styled-components";

const LabelField = ({ label, children, required }) => (
  <Label>
    {label}
    {required && <span style={{ color: "red" }}> *</span>}
    {children}
  </Label>
);

const Label = styled.label`
  width: 100%;
  margin: 10px 0;
`;

export default LabelField;
