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
              <TextOnCarousel>
                Immortalize the Moment
              </TextOnCarousel>
            </CarrouselContent>
          </CarrouselContainer>
        </CarrouselWrapper>
        <TextBelow>
          Discover a World of Visual Wonders
        </TextBelow>
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
  border-radius: 12px;
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
  color: #fff;
  font-size: 5rem;
  //font-weight: 600;
  text-align: center;
  padding: 15px 25px;
  background: rgba(0, 0, 0, 0.0); // Fond transparent
  font-family: 'Scriptina'; // Utilisation de la police Scriptina
`;

const TextBelow = styled.h2`
  color: #333;
  font-family: 'Scriptina'; // Utilisation de la police Scriptina
  font-size: 2rem;
  font-weight: 400;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  padding: 0 10%;
`;

export default Accueil;
