import React from "react";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
//Photo
import portrait1 from "../img/_MG_8387.jpg";
//Styled component
import styled from "styled-components";


const AboutSection = () => {
  return (
    <About>
      <Description>
        <StyledTitle>
          <Hide>
            <motion.h2 variants={titleAnim}>Capturer vos</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
             <span>moments uniques</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>avec excellence.</motion.h2>
          </Hide>
        </StyledTitle>
        <StyledDescription variants={fade}>
        <p style={{ width: '350px'}}>
          Dès mon plus jeune âge, la magie de la photographie m'a captivé, 
        un héritage précieux transmis par mon père. Aujourd'hui, à travers <span>SMLEYE</span> by CEDRIC
        , je transforme des instants éphémères en <span>souvenirs éternels</span>.
        </p>
        <p style={{ width: '350px'}}>
         Depuis plus de deux ans,
         je me spécialise dans la capture d'émotions pures à travers des portraits, des vidéos
          de <span>mariage</span>, des clips et bien plus. <br></br>Chaque image est une fenêtre sur une histoire, 
          chaque cadre un battement de cœur. Avec passion et délicatesse, je m'engage 
          à immortaliser vos moments les plus précieux, pour que vous puissiez les chérir toute votre vie.
          </p>
        </StyledDescription>
        <motion.button variants={fade}>Contactez-moi</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={portrait1}
          alt="guy with a camera"
          style={{
            width: "90%",
            height: "900px", // Définis une hauteur fixe pour le conteneur de l'image
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: "1.5rem", // Ajuste la position de l'image vers le haut pour rogner le bas
          }}
        />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components
const StyledDescription = styled(motion.p)`

  text-align: justify; // Justifie le texte à l'intérieur du composant
  padding: 20px; // Exemple de padding, ajustez selon vos besoins
  margin-left: 200px;
`;

const StyledTitle = styled(motion.div)`
  left: 0;
  margin-left: 200px;
`;

export default AboutSection;
