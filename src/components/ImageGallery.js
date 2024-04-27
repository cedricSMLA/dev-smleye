import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
// import des images
import Img1 from "../img/A7400434-2.jpg";
import Img2 from "../img/A7402325.jpg";
import Img3 from "../img/A7403268.jpg";
import Img4 from "../img/A7405742.jpg";
import Img5 from "../img/A7405751.jpg";
import Img6 from "../img/A7406572.jpg";

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
  ];

  return (
    <>
      <PageWrapper>Image Gallery</PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  textalign: "center";
`;

export default ImageGallery;
