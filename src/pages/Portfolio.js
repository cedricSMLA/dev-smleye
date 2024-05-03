import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import pierre from "../img/P1015068-2.jpg";
import arabe from "../img/A7405093.jpg";
import mayotte from "../img/DJI_0087.jpg";
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
        <motion.h2 variants={fade}>Clémence & Pierre</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/portfolio/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={pierre} alt="athlete" />
          </Hide>
        </Link>
      </Movie>

      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <h2>Samira et Sofiane</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/portfolio/the-racer">
          <img src={arabe} alt="theracer" />
        </Link>
      </Movie>

      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>mayotte</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/portfolio/good-times">
          <img src={mayotte} alt="goodtimes" />
        </Link>
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
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
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
