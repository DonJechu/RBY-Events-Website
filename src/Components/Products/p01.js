import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import './products.css'; // Importa tu archivo CSS
import Footer from '../Footer/footer';
import portfolio1 from '../../assests/products/1.png';
import portfolio2 from '../../assests/products/1.png';
import portfolio3 from '../../assests/products/1.png';

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div>
        <Container fluid className="resume-section">
          <Row style={{ justifyContent: "center" }}>
            {/* Aquí se encontraba el botón de descarga */}
          </Row>

          <Row className="resume justify-content-center align-items-center">
            {/* Producto 1 */}
            <Col xs={12} sm={2} className="product-column">
              <Link to="/products/01" className="product-link">
                <div className="product-container">
                  <img
                    src={portfolio1}
                    alt="Portfolio1"
                    className="product-image"
                  />
                  <div className="product-name">Lanterns Enhanced</div>
                  <div className="product-info">
                    <div className="left-info">Byjechu</div>
                    <div className="right-info">
                      <div className="new-badge">New🆕</div>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>

            {/* Producto 2 */}
            <Col xs={12} sm={2} className="product-column">
              <div className="product-container">
                <img
                  src={portfolio2}
                  alt="Portfolio2"
                  className="product-image"
                />
                <div className="product-name">Nombre del Producto 1</div>
                <div className="product-info">
                  <div className="left-info">Byjechu</div>
                  <div className="right-info">
                  <div className="new-badge">New🆕</div>
                </div>
                </div>
              </div>
            </Col>

            {/* Producto 3 */}
            <Col xs={12} sm={2} className="product-column">
              <div className="product-container">
                <img
                  src={portfolio3}
                  alt="Portfolio3"
                  className="product-image"
                />
                <div className="product-name">Nombre del Producto 1</div>
                <div className="product-info">
                  <div className="left-info">Byjechu</div>
                  <div className="right-info">
                  <div className="new-badge">New🆕</div>
                </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default ResumeNew;
