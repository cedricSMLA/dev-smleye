import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import pierre from "../img/Mariages/clemence_pierre/A7402467.jpg";
import merrick from "../img/Portraits/Merrick/A7405747.jpg";
import mayotte from "../img/Mayotte/DJI_0484-2.jpg";
import cdo1 from "../img/Clip/A7406627.jpg";
import amira1 from "../img/Mariages/amira_sofiane/A7405093.jpg";
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const Portfolio = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  return (
    <PortfolioCss
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>Romane et Maxime</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        {/* Affichage direct de la vidéo Dropbox */}
        <Hide>
          <motion.video
            variants={photoAnim}
            src="https://www.dropbox.com/scl/fi/trz823jchnu6cbh56ulno/insta_finale_teaser.mp4?rlkey=oalwancimgriavblvbfb3e0u3&st=s42w7utb&dl=1"
            controls
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Hide>
      </Movie>

      <ScrollTop />
    </PortfolioCss>
  );
};

const PortfolioCss = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
    text-align: center;
    font-family: "Mulish", sans-serif;
    font-weight: 0;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #006aff;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9; // Ajustez ce ratio en fonction de vos besoins
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default Portfolio;
