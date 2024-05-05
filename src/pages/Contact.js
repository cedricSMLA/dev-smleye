import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Importez useNavigate


const Contact = () => {
  const navigate = useNavigate(); // Hook pour la navigation
  const [formData, setFormData] = useState({
    //firstName: "",   // Prénom
    lastName: "",    // Nom
    email: "",
    phone: "",
    date: "",        // Date, assurez-vous que cette clé est correcte
    lieu: "",        // Lieu
    message: "",
    serviceType: "", // Type de service
  });

  const [submitted, setSubmitted] = useState(false); // Ajout pour gérer l'affichage du message de confirmation
  const [countdown, setCountdown] = useState(5); // Initialisation du compte à rebours à 5 secondes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    console.log(formData); // Affiche les données du formulaire dans la console
  
    // Envoie les données au serveur backend
    fetch('http://localhost:3001/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Réponse du serveur:', data.message);
      setSubmitted(true);
      // Commence le compte à rebours
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
  
      setTimeout(() => {
        clearInterval(timer); // Arrête le compte à rebours
        setFormData({
          lastName: "",
          email: "",
          phone: "",
          date: "",
          lieu: "",
          message: "",
          serviceType: "",
        });
        setSubmitted(false);
        setCountdown(5); // Réinitialise le compte à rebours pour la prochaine utilisation
      }, 4000); // Nettoie le formulaire et cache le message après 4 secondes
  
      setTimeout(() => {
        navigate('/portfolio'); // Navigue vers la page portfolio après 5 secondes
      }, 5000);
    })
    .catch(error => {
      console.error('Erreur:', error);
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
      <LabelField label="Date" required>
        <Input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="01 juin 2024"
          required
        />
      </LabelField>
      <LabelField label="Téléphone">
        <Input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </LabelField>
      <LabelField label="Lieu" required>
        <Input
          type="text"
          name="lieu"
          value={formData.lieu}
          onChange={handleChange}
          required
        />
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
      </LabelField>
      <LabelField label="Message" required>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="N'hésitez pas à me donner un maximum de détails sur votre projet, cela m'aidera à vous répondre au mieux :)"
          required
        />
      </LabelField>
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

export default Contact;
