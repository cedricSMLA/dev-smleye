import React from 'react';
import styled from 'styled-components';
//Page Components
import Carrousel from '../components/Carrousel';

const Accueil = () => {
  return (
    <PageWrapper>
      <Title>Page d'Accueil</Title>
        <CarrouselWrapper>
        <CarrouselContainer>
        <CarrouselContent>
          <Carrousel />  {/* Ici le Carousel est utilisé */}
          </CarrouselContent>
        </CarrouselContainer>
        </CarrouselWrapper>  
    </PageWrapper>
  );
};



// Styled Components
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const CarrouselWrapper = styled.div`
  width: 80%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
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

export default Accueil;