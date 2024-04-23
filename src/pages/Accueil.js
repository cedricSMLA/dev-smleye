import React from "react";
import styled from "styled-components";
//Page Components
import Carrousel from "../components/Carrousel";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
//Gallery
import { Gallery } from "react-grid-gallery";

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
      <Gallery images={images} />

    </motion.div>
  );
};

// Styled Components
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background-color: transparent;
`;

/*const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;*/

const CarrouselWrapper = styled.div`
  width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const CarrouselContainer = styled.div`
  width: 100%;
  height: 0;
  padding-top: 42.55%; /* Ratio 16:9 */
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

const images = [
  {
     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
     width: 320,
     height: 174,
     isSelected: true,
     caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
     width: 320,
     height: 212,
     tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
     ],
     alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
     width: 320,
     height: 212,
  },
];


export default Accueil;
