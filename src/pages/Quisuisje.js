import React from "react";
import styled from "styled-components";
//Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const Container = styled(motion.div)`
  & > *:nth-child(1) {
    margin-bottom: -80px; /* Ajustez cette valeur selon vos besoins */
  }
  & > *:nth-child(2) {
    margin-bottom: -20px; /* Ajustez cette valeur selon vos besoins */
  }
  & > *:nth-child(3) {
    margin-bottom: 20px; /* Ajustez cette valeur selon vos besoins */
  }
  & > *:nth-child(4) {
    margin-bottom: 0;
  }
`;

const Quisuisje = () => {
  return (
    <Container
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </Container>
  );
};

export default Quisuisje;
