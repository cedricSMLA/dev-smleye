import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CardContainer
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="card"
      style={{
        borderRadius: "1rem",
        boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",
      }}
    >
      <motion.h2 layout="position">Clique ici</motion.h2>

      {isOpen && (
        <CardContent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          className="expand"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            a libero varius, euismod sapien a, sagittis erat. Nullam vel mattis.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex.</p>
        </CardContent>
      )}
    </CardContainer>
  );
};

const CardContainer = styled(motion.div)`
  background: black;
  padding: 3rem 5rem;
  font-family: sans-serif;

  /*display: flex;
  justify-content: center;
  align-items: center;*/
`;
const CardContent = styled(motion.div)`
  padding-top: 1rem;
  line-height: 150%;
  width: 35rem;
`;

export default Card;
