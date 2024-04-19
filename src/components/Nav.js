import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
// import du logo SMLEYE
import logo_smleye from "../img/smleye.webp";

const Nav = () => {
  const { pathname } = useLocation();
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideOnScroll(true);
      } else {
        setHideOnScroll(false);
      }
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledNav style={{ top: hideOnScroll ? "-100%" : "0" }}>
      <ProgressBar style={{ width: `${scrollProgress}%` }} />
      <h1>
        <Link id="logo" to="/">
          <img
            src={logo_smleye}
            alt="Logo1"
            style={{ height: "75px", borderRadius: "1rem" }}
          />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/quisuisje">Qui suis-je</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/quisuisje" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/portfolio" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: transparent;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: top 0.3s ease-in-out;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Amsterdam Signature", cursive;
    font-weight: lighter;
    margin-left: 200px;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  background: #23d997;
  z-index: 20;
  transition: width 0.2s ease-in-out;
`;

export default Nav;
