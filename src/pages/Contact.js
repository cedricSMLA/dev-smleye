import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <FormContainer
      as="form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LabelField label="Prénom" required>
        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </LabelField>
      <LabelField label="Nom" required>
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </LabelField>
      <LabelField label="Email" required>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </LabelField>
      <LabelField label="Téléphone (Optionel)">
        <Input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </LabelField>
      <LabelField label="Parlons de vous :)" required>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </LabelField>
      <Button type="submit">Envoyer</Button>
    </FormContainer>
  );
};

const FormContainer = styled(motion.div)`
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
  transform: translateY(50px); // Déplace le formulaire de 50px vers le bas
`;

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

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  height: 150px;
  resize: none;
`;

const Button = styled.button`
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

export default Contact;
