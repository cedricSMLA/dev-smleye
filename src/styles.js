import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #111;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: -10rem;
  z-index: 2;
  position: relative; // Permet le positionnement absolu des enfants par rapport à ce conteneur
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const Image = styled.div`
  z-index: 2; // Priorité d'affichage supérieure.
  flex: 1; // Occupe l'espace disponible dans le conteneur flex.
  overflow: hidden; // Cache le contenu débordant de la div.
  padding-right: 10rem; // Espace à droite pour la mise en page.
  img {
    width: 100%; // L'image remplit la largeur de la div.
    height: 80vh; // Hauteur fixée à 80% de la hauteur de la fenêtre.
    object-fit: cover; // Adapte l'image à la div sans la déformer.
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
