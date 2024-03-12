import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import './404.css'; // Importa tu archivo CSS
import Footer from '../Footer/footer';
import ghostImage from './ghost-img.png'; // Importa la imagen del fantasma

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <Container>
        <Row>
          {/* Contenido de la página 404 */}
          <section className="home">
            <div className="home__container container">
              <div className="home__data">
                <span className="home__subtitle" data-aos="fade-down" duration='20000000'>Error 404 </span>
                <h1 className=' hero-heading ' className="home__title" data-aos="fade-down" duration='20000000' >
                  Hey Buddy <h1 data-aos="fade-down" duration='5000' > </h1>
                </h1>
                
                <p className='hero-para' className="home__description" duration='400000000' data-aos='fade-down'>
                  We can't seem to find the page <br /> you are looking for.
                </p>
                <a href="/" className="c-button c-button--gooey" duration='40000000' data-aos='fade-down'>
                  Go Home
                  <div class="c-button__blobs">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </a>
              </div>
              <div className="home__img" data-aos="fade-up" duration='20000000'>
                <img src={ghostImage} alt="Ghost" />
                <div className="home__shadow"></div>
              </div>
            </div>
          </section>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ResumeNew;
