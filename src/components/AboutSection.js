import React from "react";
import { About, Description, Image } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import portrait1 from "../img/_MG_8387.jpg";
import styled from "styled-components";

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
            Dès mon plus jeune âge, la magie de la photographie m'a captivé, un
            héritage précieux transmis par mon père. Aujourd'hui, à travers{" "}
            <span>SMLEYE</span> by CEDRIC, je transforme des instants éphémères
            en souvenirs éternels.
          </p>
          <p>
            Depuis plus de deux ans, je me spécialise dans la capture d'émotions
            pures à travers des portraits, des vidéos de mariage,
            des clips et bien plus. Chaque image est une fenêtre sur
            une histoire, chaque cadre un battement de cœur. Avec passion et
            délicatesse, je m'engage à immortaliser vos moments les plus
            précieux, pour que vous puissiez les chérir toute votre vie.
          </p>
        </StyledDescription>
        <motion.button variants={fade}>Contactez-moi</motion.button>
      </Description>
      <Wave />
    </About>
  );
};

const StyledImage = styled(Image)`
  img {
    width: 100%;
    height: auto; // Adjust height automatically
    object-fit: cover;
    object-position: top;
    border-radius: 1.5rem;
  }
`;

const StyledDescription = styled(motion.div)`
  text-align: justify;
  padding: 20px;
  margin: auto;
  max-width: 800px; // Responsive max width
`;

const StyledTitle = styled(motion.div)`
  text-align: center;
  margin: 20px 0;
`;

export default AboutSection;
