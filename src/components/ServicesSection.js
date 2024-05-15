import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import autel from "../img/Mariages/clemence_pierre/P1014108.jpg";
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          <span>L'excellence</span>  à chaque instant
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={clock} />
              <h3>Efficacité</h3>
            </div>
            <p>Pas de retard à cause du photographe, promis !</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={teamwork} />
              <h3>Travail d'équipe</h3>
            </div>
            <p>Chaque émotion capturée, <span>ensemble.</span></p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={diaphragm} />
              <h3>Creativité</h3>
            </div>
            <p>Des images <span>uniques</span> qui racontent votre histoire.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={money} />
              <h3>Abordable</h3>
            </div>
            <p>Des souvenirs précieux à des prix <span>accessibles</span>.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <StyledImage alt="camera" src={autel} />
      </Image>
    </Services>
  );
};

const StyledImage = styled.img`
  border-radius: 15px; // Adjust the value to get the desired roundness
`;

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 85%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
