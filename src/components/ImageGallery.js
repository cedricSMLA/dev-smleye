import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

// URLs des images Dropbox
const Img1 = "https://www.dropbox.com/scl/fi/nusoo0w0me23x9ag5lne8/A7403305.jpg?rlkey=m40m4rv4etk4pyh86mhbaav7b&st=89h5qw4z&dl=1";
const Img2 = "https://www.dropbox.com/scl/fi/dhi1esq1hjh5l3abv51wf/A7404960.jpg?rlkey=js14nsaedrlasdxwullmg7ml3&st=zdq6c3ee&dl=1";
const Img3 = "https://www.dropbox.com/scl/fi/w00e2el6yg0ur0lysq663/P1311426-2.jpg?rlkey=mlv1y99pmzfb6uslpyl0yo9ph&st=vvor1lgq&dl=1";
const Img4 = "https://www.dropbox.com/scl/fi/bosvz74drjqq1b58g85pw/A7403268.jpg?rlkey=rogfmrlso9j0p21oq6vob1d75&st=mxx58nux&dl=1";
const Img5 = "https://www.dropbox.com/scl/fi/72ggxe7jnmysruqhfrib5/P1015079.jpg?rlkey=fa0aqdhx4rm8krikj3s89u5yx&st=9p1gaf7g&dl=1";
const Img6 = "https://www.dropbox.com/scl/fi/fe2zjlxn4aagk8r106ndy/result_13542s2-Modifier-Modifier-2.jpg?rlkey=cbqbyyfqcrjwut90fpyplauhr&st=bp4i5253&dl=1";
const Img7 = "https://www.dropbox.com/scl/fi/1qtpbdy4xpc9gfnkybipd/DJI_0712.jpg?rlkey=37h5n1rlqq6a2fq2078he4jpt&st=l9masdfu&dl=1";
const Img8 = "https://www.dropbox.com/scl/fi/bvzdtjnbatmbqrk1xgq8o/P1070097.jpg?rlkey=48hhj2v23dzcpmocfko2vze9j&st=mnji1xc1&dl=1";
const Img9 = "https://www.dropbox.com/scl/fi/00jr3fxadqy8caowqvhi5/result_6407s2-Modifier-3.jpg?rlkey=zkg9xec72xm2knd3rwche213u&st=iv7lmo02&dl=1";
const Img10 = "https://www.dropbox.com/scl/fi/tx5r78ok9q0ryafxt1jh4/A7405964.jpg?rlkey=xsonua4l404tbnzt6yv4rv5e5&st=57nhg95e&dl=1";

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
    width: 100%;
    height: auto;
    border-radius: 20px;
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
  transition: opacity 0.45s ease, visibility 0.45s ease, transform 0.5s ease-in-out;
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
