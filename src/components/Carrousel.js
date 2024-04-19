import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

// Import des images
import portrait1 from "../img/_MG_8387.jpg"; // Ajuste le chemin en fonction de ton dossier
import portrait2 from "../img/A7403357.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <CarouselContainer>
      <StyledSlider {...settings}>
        <div>
          <CarouselImage src={portrait1} alt="Description de l'image 1" />
        </div>
        <div>
          <CarouselImage src={portrait2} alt="Description de l'image 2" />
        </div>
        {/* Ajouter plus d'images si nécessaire */}
      </StyledSlider>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div``;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none; // Supprime le contour lors du focus
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%; // Assure que l'image remplit le conteneur
  display: block;
  margin: auto;
`;

export default Carousel;
