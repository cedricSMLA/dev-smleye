import styled from "styled-components";
import { motion } from "framer-motion";

export const FormContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 500px;
  margin: auto;
  background: #f8f8f8;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(50px);
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  height: 150px;
  resize: none;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 20px;
  border: none;
  background-color: #353535;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;
