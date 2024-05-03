import React from "react";
import styled from "styled-components";
import Carrousel from "../components/Carrousel";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ImageGallery from "../components/ImageGallery";

const Accueil = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <PageWrapper>
        <CarrouselWrapper>
          <CarrouselContainer>
            <CarrouselContent>
              <Carrousel />
              <TextOnCarousel>Explorez notre monde</TextOnCarousel>
            </CarrouselContent>
          </CarrouselContainer>
        </CarrouselWrapper>
        <TextBelow>Découvrez des images captivantes ci-dessous</TextBelow>
      </PageWrapper>
      <ImageGallery />
    </motion.div>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  min-height: 100vh;
  background-color: transparent;
`;

const CarrouselWrapper = styled.div`
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const CarrouselContainer = styled.div`
  width: 100%;
  height: 0;
  padding-top: 56.25%; // Maintains a 16:9 aspect ratio
  position: relative;
`;

const CarrouselContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const TextOnCarousel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2rem; // Responsive font size
  font-weight: bold;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  max-width: 90%; // Ensure the text does not overflow on small devices
`;

const TextBelow = styled.h2`
  color: #666;
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 0 10%; // Responsive padding
  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 5px; // Reduced space in mobile view
  }
`;

export default Accueil;
