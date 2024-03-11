import portfolio1 from '../../assests/portfolio/tab-rbyserver.png';
import portfolio2 from '../../assests/portfolio/crate-rbyserver.png';
import portfolio3 from '../../assests/portfolio/crate-rbyserver2.png';
import portfolio4 from '../../assests/portfolio/rtp-rbyserver.gif';
import portfolio5 from '../../assests/portfolio/emote1-rbyserver.gif';
import portfolio6 from '../../assests/portfolio/emote2-rbyserver.gif';
// import portfolio7 from '../../assests/portfolio7.png';
import portfolio8 from '../../assests/portfolio/hats-rbyserver.png';
import portfolio9 from '../../assests/portfolio/globes-rbyserver.gif';


import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import './ServerDevelopment.css'; // Importa tu archivo CSS
import Footer from '../Footer/footer';

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div>
        <Container fluid className="resume-section">
          <Row style={{ justifyContent: "center", position: "relative" }}>
            {/* Aquí se encontraba el botón de descarga */}
          </Row>

          {/* Agregué una nueva Row para la imagen en el centro */}
          <Row className="resume justify-content-center align-items-center">
            {/* Aplica la clase al contenedor de la imagen */}
            <div className="center-image1">
              <img
                src={portfolio1}
                alt="Portfolio1"
                className="zoom-image" // Agrega esta clase para aplicar el efecto de zoom
              />
            </div>
          </Row>


          {/* Agrega una nueva Row para las dos imágenes al lado de la otra */}
          <Row className="resume justify-content-center align-items-center">
            <div className="center-image left-image">
              <img
                src={portfolio2}
                alt="Cuarta Imagen"
                className="zoom-image"
              />
            </div>
            <div className="center-image right-image">
              <img
                src={portfolio3}
                alt="Quinta Imagen"
                className="zoom-image"
              />
            </div>
          </Row>

            {/* Agrega una nueva Row para la segunda imagen */}
            <Row className="resume justify-content-center align-items-center">
            <div className="center-image">
              <img
                src={portfolio4}
                alt="Segunda Imagen"
                className="zoom-image" // Agrega esta clase para aplicar el efecto de zoom
              />
            </div>
            </Row>


          <Row className="resume justify-content-center align-items-center">
          <div className="center-image right-image">
              <img
                src={portfolio6}
                alt="Septima Imagen"
                className="zoom-image"
              />
            </div>
            <div className="center-image left-image">
              <img
                src={portfolio8}
                alt="Sexta Imagen"
                className="zoom-image"
              />
            </div>
          </Row>


          <Row className="resume justify-content-center align-items-center">
          <div className="center-image left-image">
              <img
                src={portfolio9}
                alt="Sexta Imagen"
                className="zoom-image"
              />
            </div>
          <div className="center-image right-image">
              <img
                src={portfolio5}
                alt="Octava Imagen"
                className="zoom-image"
              />
            </div>
                  
          </Row>

          <Row style={{ justifyContent: "center", position: "relative" }}>
            
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default ResumeNew;
