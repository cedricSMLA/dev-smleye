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
      <MainContainer>
        <CarrouselSection>
          <CarrouselContainer>
            <CarrouselContent>
              <Carrousel />
              <TextOnCarousel>Immortalize the Moment</TextOnCarousel>
            </CarrouselContent>
          </CarrouselContainer>
        </CarrouselSection>
        <QuoteSection>
          <QuoteText>
            <h1>Vidéaste & Photographe en région Parisiennes</h1>
            "Le mariage, c'est l'art de grandir ensemble tout en restant fidèle
            à soi-même."
          </QuoteText>
        </QuoteSection>
        <ImageGallerySection>
          <ImageGallery />
        </ImageGallerySection>
      </MainContainer>
    </motion.div>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: #f5f5f5;
`;

const CarrouselSection = styled.section`
  width: 100%;
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
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 4rem;
  text-align: center;
  //background: rgba(0, 0, 0, 0.5); // Semi-transparent background
  padding: 20px 30px;
  font-family: "Scriptina"; // Use of Scriptina font

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 10px 15px;
  }
`;

const QuoteSection = styled.section`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  text-align: center;
`;

const QuoteText = styled.h2`
  color: #333;
  font-family: "Scriptina"; // Use of Scriptina font
  font-size: 2rem;
  font-weight: 400;
  margin: 30px 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ImageGallerySection = styled.section`
  width: 100%;
  padding: 20px;
  background-color: #f5f5f5;
`;

export default Accueil;
