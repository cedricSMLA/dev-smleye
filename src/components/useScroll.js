import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [view, controls]); // Dépendances dans useEffect pour s'assurer que l'effet s'exécute lorsque `view` ou `controls` changent

  return [element, controls];
};
