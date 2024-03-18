import portfolio9 from '../../assests/portfolio1.png';
import portfolio2 from '../../assests/portfolio2.png';
import portfolio3 from '../../assests/portfolio3.png';
import portfolio4 from '../../assests/portfolio4.png';
import portfolio5 from '../../assests/portfolio5.png';
import portfolio6 from '../../assests/portfolio6.png';
import portfolio7 from '../../assests/portfolio7.png';
import portfolio8 from '../../assests/portfolio8.png';
import portfolio85 from '../../assests/portfolio8-5.png';
import portfolio1 from '../../assests/portfolio9.png';

import srvportfolio9 from '../../assests/portfolio/tab-rbyserver.png';
import srvportfolio2 from '../../assests/portfolio/crate-rbyserver.png';
import srvportfolio3 from '../../assests/portfolio/crate-rbyserver2.png';
import srvportfolio6 from '../../assests/portfolio/emote1-rbyserver.gif';
import srvportfolio7 from '../../assests/portfolio/emote2-rbyserver.gif';
import srvportfolio85 from '../../assests/portfolio/hats-rbyserver.png';
import srvportfolio1 from '../../assests/portfolio/globes-rbyserver.gif';

import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import './ResumeNew.css'; // Importa tu archivo CSS
import Footer from '../Footer/footer';

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const serverSectionRef = useRef(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    scrollToHash();
  }, []);

  // Función para hacer scroll a la sección con el identificador correspondiente al hash en la URL
  const scrollToHash = () => {
    if (window.location.hash === "#server" && serverSectionRef.current) {
      serverSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <div>
        <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
            <h2 className="centered-title2">3D Modeling</h2>
          </Row>

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


          {/* Agrega una nueva Row para las dos imágenes al lado de la otra */}
          <Row className="resume justify-content-center align-items-center">
            <div className="center-image left-image">
              <img
                src={portfolio4}
                alt="Cuarta Imagen"
                className="zoom-image"
              />
            </div>
            <div className="center-image right-image">
              <img
                src={portfolio5}
                alt="Quinta Imagen"
                className="zoom-image"
              />
            </div>
          </Row>

            {/* Agrega una nueva Row para la segunda imagen */}
            <Row className="resume justify-content-center align-items-center">
            <div className="center-image">
              <img
                src={portfolio3}
                alt="Segunda Imagen"
                className="zoom-image" // Agrega esta clase para aplicar el efecto de zoom
              />
            </div>
          </Row>


          <Row className="resume justify-content-center align-items-center">
          <div className="center-image right-image">
              <img
                src={portfolio7}
                alt="Septima Imagen"
                className="zoom-image"
              />
            </div>
            <div className="center-image left-image">
              <img
                src={portfolio6}
                alt="Sexta Imagen"
                className="zoom-image"
              />
            </div>
          </Row>


          <Row className="resume justify-content-center align-items-center">
          <div className="center-image left-image">
              <img
                src={portfolio2}
                alt="Sexta Imagen"
                className="zoom-image"
              />
            </div>
          <div className="center-image right-image">
              <img
                src={portfolio85}
                alt="Octava Imagen"
                className="zoom-image"
              />
            </div>

          <div className="center-image">
              <img
                src={portfolio9}
                alt="Novena Imagen"
                className="zoom-image"
              />
            </div>
          </Row>

          <Row style={{ justifyContent: "center", position: "relative" }}>
          </Row>

{/* SERVERS DEVELOPMENT PORTFOLIO */}
        <div ref={serverSectionRef}>
          <Container fluid className="resume-section">
            {/* Agregamos una línea horizontal como separador */}
        {/* Agregamos una línea horizontal como separador */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <div style={{ width: '80%', margin: '6em auto' }}>
            <hr className="separator" />
          </div>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
            <h2 className="centered-title">Servers Development</h2>
          </Row>

          {/* Agregué una nueva Row para la imagen en el centro */}
          <Row className="resume justify-content-center align-items-center">
            {/* Aplica la clase al contenedor de la imagen */}
            <div className="center-image">
              <img
                src={srvportfolio9}
                alt="Portfolio1"
                className="zoom-image" // Agrega esta clase para aplicar el efecto de zoom
              />
            </div>
          </Row>


          {/* Agrega una nueva Row para las dos imágenes al lado de la otra */}
          <Row className="resume justify-content-center align-items-center">
            <div className="center-image left-image">
              <img
                src={srvportfolio2}
                alt="Cuarta Imagen"
                className="zoom-image"
              />
            </div>
            <div className="center-image right-image">
              <img
                src={srvportfolio3}
                alt="Quinta Imagen"
                className="zoom-image"
              />
            </div>
          </Row>



            {/* Agrega una nueva Row para la segunda imagen */}
            <Row className="resume justify-content-center align-items-center">
            <div className="center-image">
              <img
                src="https://i.imgur.com/iNqDi8m.gif" // Cambia el src por el enlace proporcionado
                alt="Segunda Imagen"
                className="zoom-image" // Agrega esta clase para aplicar el efecto de zoom
              />
            </div>
          </Row>





          <Row className="resume justify-content-center align-items-center">
          <div className="center-image right-image">
              <img
                src={srvportfolio7}
                alt="Septima Imagen"
                className="zoom-image"
              />
            </div>
            <div className="center-image left-image">
              <img
                src={srvportfolio85}
                alt="Sexta Imagen"
                className="zoom-image"
              />
            </div>
          </Row>


          <Row className="resume justify-content-center align-items-center">
          <div className="center-image left-image">
              <img
                src={srvportfolio1}
                alt="Sexta Imagen"
                className="zoom-image"
              />
            </div>
          <div className="center-image right-image">
              <img
                src={srvportfolio6}
                alt="Octava Imagen"
                className="zoom-image"
              />
            </div>


                  
          </Row>

          <Row style={{ justifyContent: "center", position: "relative" }}>
            
          </Row>
        </Container>
      </div>

        </Container>
      </div>

      <Footer />
    </>
  );
}

export default ResumeNew;
