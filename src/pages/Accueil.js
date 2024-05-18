import React, { useState } from "react";
import Carrousel from "../components/Carrousel";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ImageGallery from "../components/ImageGallery";
import { styled } from "styled-components";

// import Cards
import Card1 from "../components/Cards/Card1";
import Card2 from "../components/Cards/Card2";
import Card3 from "../components/Cards/Card3";

const Accueil = () => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

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
              <TextOnCarousel>L’art de voir autrement</TextOnCarousel>
            </CarrouselContent>
          </CarrouselContainer>
        </CarrouselSection>

        <QuoteSection>
          <QuoteText>
            <h1>Vidéaste & Photographe en région Parisiennes</h1>
            <p>
              "Le mariage, c'est l'art de grandir ensemble tout en restant
              fidèle à soi-même."
            </p>
          </QuoteText>
          <CardContainer>
            <Card1
              isOpen={openCardIndex === 0}
              onClick={() => handleCardClick(0)}
            />
            <Card2
              isOpen={openCardIndex === 1}
              onClick={() => handleCardClick(1)}
            />
            <Card3
              isOpen={openCardIndex === 2}
              onClick={() => handleCardClick(2)}
            />
          </CardContainer>
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
  padding-top: 45%; // Maintains a 16:9 aspect ratio
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
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  letter-spacing: 0.1em;

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
  font-family: "Nunito", sans-serif;
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

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ImageGallerySection = styled.section`
  width: 100%;
  padding: 20px;
  background-color: #f5f5f5;
`;

export default Accueil;
