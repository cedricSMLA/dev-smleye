import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieState";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const location = useLocation(); // Utilisez useLocation pour obtenir l'objet location
  const url = location.pathname; // Accédez à pathname pour obtenir l'URL actuelle
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  // UseEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <ImageDisplay>
            {movie.isVideo ? (
              <video
                src={movie.secondaryImg}
                autoPlay
                muted
                loop
                controls
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <img src={movie.secondaryImg} alt="movie" />
            )}
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: #111;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetail;
