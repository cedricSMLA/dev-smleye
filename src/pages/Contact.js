import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    lastName: "",
    email: "",
    phone: "",
    date: null,
    lieu: "",
    message: "",
    serviceType: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(5);
  // const [captchaValue, setCaptchaValue] = useState(null);

  const validateEmail = email =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase());

  const validatePhone = phone =>
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(String(phone));

  const validateForm = (data) => {
    const errors = {};
    if (!validateEmail(data.email)) errors.email = 'Adresse email invalide.';
    if (data.phone && !validatePhone(data.phone)) errors.phone = 'Numéro de téléphone invalide.';
    if (data.message.length > 700) errors.message = 'Le message est trop long.';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prevState) => ({ ...prevState, date }));
  };

  // const onCaptchaChange = value => {
  //   setCaptchaValue(value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      console.error('Validation errors:', validationErrors);
      setErrors(validationErrors);
      alert('Veuillez corriger les erreurs dans le formulaire.');
      return;
    }

    const dataToSend = {
      ...formData,
      date: formData.date ? formData.date.toISOString() : "", // Convert date to ISO string
    };

    fetch('http://localhost:3001/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Réponse du serveur:', data.message);
        setSubmitted(true);

        const timer = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        setTimeout(() => {
          clearInterval(timer);
          resetForm();
          setSubmitted(false);
          setCountdown(5);
        }, 4000);

        setTimeout(() => {
          navigate('/portfolio');
        }, 5000);
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
  };

  const resetForm = () => {
    setFormData({
      lastName: "",
      email: "",
      phone: "",
      date: null,
      lieu: "",
      message: "",
      serviceType: "",
    });
    setErrors({});
  };

  return (
    <FormContainer
      as="form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LabelField label="Nom" required>
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
      </LabelField>
      <LabelField label="Email" required>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </LabelField>
      <LabelField label="Date" required>
        <DatePicker
          selected={formData.date}
          onChange={handleDateChange}
          dateFormat="dd MMMM yyyy"
          placeholderText="Sélectionnez une date"
          required
        />
        {errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
      </LabelField>
      <LabelField label="Téléphone">
        <Input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
      </LabelField>
      <LabelField label="Lieu" required>
        <Input
          type="text"
          name="lieu"
          value={formData.lieu}
          onChange={handleChange}
          required
        />
        {errors.lieu && <ErrorMessage>{errors.lieu}</ErrorMessage>}
      </LabelField>
      <LabelField label="Type de service" required>
        <Select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          required
        >
          <option value="">Sélectionnez le type de service</option>
          <option value="mariage">Mariage</option>
          <option value="portrait_photo">Portrait photo</option>
          <option value="video">Portrait Vidéo</option>
          <option value="drone">Prestation au drone</option>
          <option value="autre">Autre</option>
        </Select>
        {errors.serviceType && <ErrorMessage>{errors.serviceType}</ErrorMessage>}
      </LabelField>
      <LabelField label="Message" required>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="N'hésitez pas à me donner un maximum de détails sur votre projet, cela m'aidera à vous répondre au mieux :)"
          required
          maxLength="700"
        />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        <div>
          {700 - formData.message.length} caractères restants
        </div>
      </LabelField>
      {/* <ReCAPTCHA
        sitekey="6LeA4NIpAAAAAIb-W-bS0xbjDj-Mn45LBH6IcKMI"
        onChange={onCaptchaChange}
      /> */}
      <Button type="submit">Envoyer</Button>
      {submitted && (
        <Overlay>
          <ConfirmationMessage>Merci ! Votre demande a été envoyée. Redirection dans {countdown} secondes.</ConfirmationMessage>
        </Overlay>
      )}
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
  transform: translateY(50px);
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

const Select = styled.select`
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
  color: #4CAF50;
  font-size: 16px;
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

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;

export default Contact;
