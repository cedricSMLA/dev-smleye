import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import styled from "styled-components";
//import { motion } from "framer-motion";
//import { pageAnimation } from "../animation";
// import des images
import Img1 from "../img/img1.jpeg";
import Img2 from "../img/img2.jpeg";
import Img3 from "../img/img3.jpeg";
import Img4 from "../img/img4.jpeg";
import Img5 from "../img/img5.jpeg";
import Img6 from "../img/img6.jpeg";
import Img7 from "../img/img7.jpeg";
import Img8 from "../img/img8.jpeg";
import Img9 from "../img/img9.jpeg";
import Img10 from "../img/img10.jpeg";

const ImageGallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, SetTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    SetTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <ModelContainer className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt={`au clique une fenetre s ouvre`} />
        <CloseIcon onClick={() => setModel(false)} />
      </ModelContainer>
      <GalleryWrapper>
        {data.map((item, index) => {
          return (
            <PictureContainer key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} alt={`les pics sont la ${index + 1}`} />
            </PictureContainer>
          );
        })}
      </GalleryWrapper>
    </>
  );
};

const GalleryWrapper = styled.div`
  text-align: center;
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  padding: 0 12px;

  @media (max-width: 991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }

  @media (max-width: 480px) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
  }
`;

const PictureContainer = styled.div`
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;

  img {
    width: 100%; // L'image prendra toute la largeur de PictureContainer
    height: auto; // L'hauteur s'ajuste pour maintenir le ratio d'aspect
  }

  &:hover {
    opacity: 0.8;
  }
`;

const ModelContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  transition: opacity 0.45s ease, visibility 0.45s ease,
    transform 0.5s ease-in-out;
  visibility: hidden;
  opacity: 0;
  transform: scale(0);
  overflow: hidden;
  z-index: 999;

  &.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }

  img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0;
    margin: 0 auto;
  }

  svg {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 2rem;
    height: 2rem;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    cursor: pointer;
  }
`;

export default ImageGallery;
