import React from "react";
import styled from "styled-components";
//Page Components
import Carrousel from "../components/Carrousel";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// Image Gallery
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
              <Carrousel /> {/* Ici le Carousel est utilisé */}
            </CarrouselContent>
          </CarrouselContainer>
        </CarrouselWrapper>
      </PageWrapper>
      <ImageGallery />
    </motion.div>
  );
};

// Styled Components
const PageWrapper = styled.div`
  display: flex; // Applique un affichage flexible pour aligner les éléments enfant
  flex-direction: column; // Les enfants sont disposés en colonne (de haut en bas)
  align-items: center; // Centre les enfants horizontalement dans le conteneur
  padding: 5px; // Ajoute un padding tout autour du conteneur pour espace intérieur
  min-height: 100vh; // Hauteur minimale du conteneur est fixée à 100% de la hauteur de la fenêtre de visualisation (viewport height)
  background-color: transparent; // Le fond du conteneur est transparent, affichant ainsi le fond derrière ou la couleur par défaut du parent
`;

/*const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;*/

const CarrouselWrapper = styled.div`
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const CarrouselContainer = styled.div`
  width: 100%;
  height: 0;
  padding-top: 56.25%; /* Ratio 16:9 */
  //padding-top: 75%; /* Ratio 4:3 */
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

export default Accueil;
