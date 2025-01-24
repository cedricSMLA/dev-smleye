import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LabelField from "../components/LabelField";
import ConfirmationOverlay from "../components/ConfirmationOverlays";
import {
  FormContainer,
  Input,
  Select,
  Textarea,
  Button,
  ErrorMessage,
} from "../styles/formStyles";

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3001/submit-form";

// Fonction de validation du formulaire
const validateForm = (formData) => {
  const errors = {};

  // Validation du champ "Nom"
  if (!formData.lastName.trim()) {
    errors.lastName = "Le nom est requis.";
  }

  // Validation du champ "Email"
  if (!formData.email.trim()) {
    errors.email = "L'email est requis.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "L'email n'est pas valide.";
  }

  // Validation du champ "Téléphone"
  if (formData.phone && !/^\d+$/.test(formData.phone)) {
    errors.phone =
      "Le numéro de téléphone doit contenir uniquement des chiffres.";
  }

  // Validation du champ "Date"
  if (!formData.date) {
    errors.date = "La date est requise.";
  } else if (new Date(formData.date) < new Date()) {
    errors.date = "La date ne peut pas être dans le passé.";
  }

  // Validation du champ "Lieu"
  if (!formData.lieu.trim()) {
    errors.lieu = "Le lieu est requis.";
  }

  // Validation du champ "Type de service"
  if (!formData.serviceType) {
    errors.serviceType = "Le type de service est requis.";
  }

  // Validation du champ "Message"
  if (!formData.message.trim()) {
    errors.message = "Le message est requis.";
  } else if (formData.message.length > 700) {
    errors.message = "Le message ne doit pas dépasser 700 caractères.";
  }

  return errors;
};

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

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const handleDateChange = useCallback((date) => {
    setFormData((prevState) => ({ ...prevState, date }));
  }, []);

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

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de l'envoi du formulaire.");
        }
        return response.json();
      })
      .then(() => {
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
      .catch((error) => {
        console.error("Erreur:", error);
        alert("Impossible d'envoyer le formulaire. Veuillez réessayer.");
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
        {errors.serviceType && (
          <ErrorMessage>{errors.serviceType}</ErrorMessage>
        )}
      </LabelField>
      <LabelField label="Message" required>
        <Textarea
          name="message"
          value={formData.message}
          onChange={(e) => {
            if (e.target.value.length <= 700) handleChange(e);
          }}
          placeholder="N'hésitez pas à me donner un maximum de détails sur votre projet, cela m'aidera à vous répondre au mieux :)"
          required
          maxLength="700"
        />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        <div>{700 - formData.message.length} caractères restants</div>
      </LabelField>
      <Button type="submit">Envoyer</Button>
      {submitted && (
        <ConfirmationOverlay countdown={countdown}>
          Merci, {formData.lastName} ! Votre message a été envoyé avec succès.
          Vous serez redirigé sous {countdown} secondes.
        </ConfirmationOverlay>
      )}
    </FormContainer>
  );
};

export default Contact;
