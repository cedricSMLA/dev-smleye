import React from "react";
import { About, Description, Image } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import portrait1 from "../img/_MG_8387.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const AboutSection = () => {
  return (
    <About>
      <StyledImage>
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          src={portrait1}
          alt="Photographe tenant un appareil photo"
        />
      </StyledImage>
      <Description>
        <StyledTitle>
          <motion.h2 variants={titleAnim}>Capturer vos</motion.h2>
          <motion.h2 variants={titleAnim}><span>moments uniques</span></motion.h2>
          <motion.h2 variants={titleAnim}>avec excellence.</motion.h2>
        </StyledTitle>
        <StyledDescription variants={fade}>
        <p>
            Bienvenue chez <span>SMLEYE</span> by CEDRIC. 
            Depuis des années, je suis passionné par l'art
             de la photographie. Chaque clic de mon appareil
              capture <span>une émotion</span>, <span>une histoire</span>, <span>un moment unique</span>.
          </p>
          <p>
            Spécialisé dans les <span>portraits</span>,
            les <span>mariages</span> et les <span>clips</span>, je mets tout mon cœur
            à saisir l'essence de chaque instant. Mon objectif
            est de transformer vos moments les plus précieux 
            en <span>souvenirs éternels</span>. Avec une approche
            artistique et une attention minutieuse aux détails,
            je m'engage à rendre chaque séance <span>inoubliable</span>.
          </p>
          <p>
            Explorez mon univers et découvrez comment je peux <span>immortaliser</span> vos plus
             beaux moments. Chaque projet est une nouvelle aventure, et j'ai hâte de partager <span>la vôtre</span>.
          </p>
          <Link to="/contact">
          <StyledButton variants={fade}>Contactez-moi</StyledButton>
        </Link>
        </StyledDescription>
      </Description>
      <Wave />
    </About>
  );
};

const StyledImage = styled(Image)`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: top;
    border-radius: 1.5rem;
  }
`;

const StyledDescription = styled(motion.div)`
  text-align: justify;
  padding: 20px;
  margin: auto;
  max-width: 50ch; // Ajusté pour environ 10 mots par ligne
`;

const StyledTitle = styled(motion.div)`
  text-align: center;
  margin: 20px 0;
`;

const StyledButton = styled(motion.button)`
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 15px;
  font-size: 1.1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #2980b9;
  }
`;

export default AboutSection;
