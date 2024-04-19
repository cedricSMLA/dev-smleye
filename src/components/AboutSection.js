import React from "react";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
//Photo
import portrait1 from "../img/_MG_8387.jpg";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={portrait1}
          alt="guy with a camera"
          style={{
            width: "100%",
            height: "1000px", // Définis une hauteur fixe pour le conteneur de l'image
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

export default AboutSection;
