import portfolio1 from '../../assests/portfolio1.png';
import portfolio2 from '../../assests/portfolio2.png';

import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import './ResumeNew.css'; // Importa tu archivo CSS
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
            <div className="center-image">
              <img
                src={portfolio1}
                alt="Portfolio1"
                className="zoom-image" // Agrega esta clase para aplicar el efecto de zoom
              />
            </div>
          </Row>

          {/* Agrega una nueva Row para la segunda imagen */}
          <Row className="resume justify-content-center align-items-center">
            <div className="center-image">
              <img
                src={portfolio2}
                alt="Segunda Imagen"
                className="zoom-image" // Agrega esta clase para aplicar el efecto de zoom
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
