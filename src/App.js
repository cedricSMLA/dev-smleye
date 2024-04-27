import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import Accueil from "./pages/Accueil";
import Quisuisje from "./pages/Quisuisje";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
//Carrousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Accueil />} />
  <Route path="/quisuisje" element={<Quisuisje />} />
  <Route path="/portfolio" element={<Portfolio />} />
  <Route path="/portfolio/:id" element={<MovieDetail />} />
  <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
