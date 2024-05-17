import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import pierre from "../img/Mariages/clemence_pierre/A7402467.jpg";
import merrick from "../img/Portraits/Merrick/A7400434-2.jpg";
import mayotte from "../img/Mayotte/DJI_0087.jpg";
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
        <motion.h2 variants={fade}>Clémence & Pierre</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/portfolio/clemence_pierre">
          <Hide>
            <motion.img
              variants={photoAnim}
              src={pierre}
              alt="clemence_pierre"
            />
          </Hide>
        </Link>
      </Movie>

      <Movie
        ref={element3}
        variants={fade}
        animate={controls3}
        initial="hidden"
      >
        <h2>Loubard Starr</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/portfolio/cdo">
          <img src={cdo1} alt="goodtimes" />
        </Link>
      </Movie>

      <Movie
        ref={element4}
        variants={fade}
        animate={controls4}
        initial="hidden"
      >
        <h2>Amira & Sofiane</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/portfolio/cdo">
          <img src={amira1} alt="goodtimes" />
        </Link>
      </Movie>

      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <h2>Merrick</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/portfolio/the-racer">
          <img src={merrick} alt="theracer" />
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
