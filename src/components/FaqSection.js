import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimatePresence, motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  const [activeToggle, setActiveToggle] = useState(null);

  const handleToggle = (title) => {
    setActiveToggle(activeToggle === title ? null : title);
  };

  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        <span>FAQ</span>
      </h2>
      <AnimatePresence>
        <motion.div layout>
          <Toggle
            title="Quels types de services photos et vidéos je propose ?"
            activeToggle={activeToggle}
            handleToggle={handleToggle}
          >
            <div className="answer">
              <p>
                Je couvre votre mariage en vidéo et/ou photo, vos clips musicaux, je vous propose des portraits photos et vidéos,
                et vidéos publicitaires, etc.
              </p>
            </div>
          </Toggle>
          <Toggle
            title="Comment réserver une prestation ?"
            activeToggle={activeToggle}
            handleToggle={handleToggle}
          >
            <div className="answer">
              <p>
                Contactez-moi via le formulaire de contact sur le site, par
                email, sur Instagram ou Snapchat pour discuter des détails et fixer une date.
              </p>
            </div>
          </Toggle>
          <Toggle
            title="Quels sont les tarifs pour les différents types de prestations ?"
            activeToggle={activeToggle}
            handleToggle={handleToggle}
          >
            <div className="answer">
              <p>
                Les tarifs varient selon le type de prestation; veuillez me
                contacter pour un devis personnalisé.
              </p>
            </div>
          </Toggle>
          <Toggle
            title="Comment et quand puis-je m'attendre à recevoir mes photos ou vidéos finales ?"
            activeToggle={activeToggle}
            handleToggle={handleToggle}
          >
            <div className="answer">
              <p>
                Les photos et vidéos finales sont généralement livrées sous 2 à
                4 semaines , en format numérique via un lien de téléchargement
                sécurisé.
              </p>
            </div>
          </Toggle>
        </motion.div>
      </AnimatePresence>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 1rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
