import { motion } from "framer-motion";
import React from "react";

const Toggle = ({ children, title, activeToggle, handleToggle }) => {
  const isOpen = activeToggle === title;

  return (
    <motion.div layout className="question" onClick={() => handleToggle(title)}>
      <motion.h4 layout>{title}</motion.h4>
      {isOpen ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
