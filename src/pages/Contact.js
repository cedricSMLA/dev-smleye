import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LabelField from "../components/LabelField";
import ConfirmationOverlay from "../components/ConfirmationOverlays";
import { validateForm } from "../utils/validation";
import {
  FormContainer,
  Input,
  Select,
  Textarea,
  Button,
  ErrorMessage,
} from "../styles/formStyles";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prevState) => ({ ...prevState, date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert("Veuillez corriger les erreurs dans le formulaire.");
      return;
    }

    const dataToSend = {
      ...formData,
      date: formData.date ? formData.date.toISOString() : "",
    };

    fetch("http://localhost:3001/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitted(true);
        const timer = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        setTimeout(() => {
          clearInterval(timer);
          resetForm();
          setSubmitted(false);
          setCountdown(5);
          navigate("/portfolio");
        }, 5000);
      })
      .catch((error) => console.error("Erreur:", error));
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
        {errors.serviceType && (
          <ErrorMessage>{errors.serviceType}</ErrorMessage>
        )}
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
        <div>{700 - formData.message.length} caractères restants</div>
      </LabelField>
      <Button type="submit">Envoyer</Button>
      {submitted && <ConfirmationOverlay countdown={countdown} />}
    </FormContainer>
  );
};

export default Contact;
