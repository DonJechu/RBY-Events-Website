import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import './index.css'; // Importa tu archivo CSS
import Footer from '../Footer/footer';
import portfolio1 from '../../assests/products/1.png';
import portfolio2 from '../../assests/products/2.png';
import portfolio3 from '../../assests/products/3.png';

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
            <Col xs={12} sm={6} md={4} lg={3} className="product-column">
              <Link to="/products/01" className="product-link">
                <div className="product-container">
                  <img
                    src={portfolio1}
                    alt="Portfolio1"
                    className="product-image"
                  />
                  <div className="product-name">Lanterns Enhanced</div>
                  <h1 className="mid-info">Makes Lanterns, Chains and Torches 3D in your hand!</h1>
                  <div className="product-info">
                    <div className="left-info">Byjechu
                    </div>
                    <div className="right-info">
                      {width >= 375 && <div className="new-badge">New🆕</div>}
                    </div>
                  </div>
                </div>
              </Link>
            </Col>

            {/* Producto 2 */}
            <Col xs={12} sm={6} md={4} lg={3} className="product-column">
              <Link to="/products/02" className="product-link">
                <div className="product-container">
                  <img
                    src={portfolio2}
                    alt="Portfolio2"
                    className="product-image"
                  />
                  <div className="product-name">RBY's Clean Hud</div>
                  <h1 className="mid-info">A new level of minimalism for your Minecraft HUD/Hotbar.</h1>
                  <div className="product-info">
                    <div className="left-info">Byjechu
                    </div>
                    <div className="right-info">
                      {width >= 375 && <div className="new-badge">New🆕</div>}
                    </div>
                  </div>
                </div>
              </Link>
            </Col>

            {/* Aquí van los demás productos */}
          </Row>

          {/* Nueva fila de productos */}
          <Row className="resume justify-content-center align-items-center">
            {/* Producto 3 */}
            <Col xs={12} sm={6} md={4} lg={3} className="product-column">
              <Link to="/products/03" className="product-link">
                <div className="product-container">
                  <img
                    src={portfolio3}
                    alt="Portfolio3"
                    className="product-image"
                  />
                  <div className="product-name">RBY Rings</div>
                  <h1 className="mid-info">Make powerful RINGS that grant special abilities to you.</h1>
                  <div className="product-info">
                    <div className="left-info">Byjechu</div>
                    <div className="right-info">
                      {width >= 375 && <div className="new-badge">New🆕</div>}
                    </div>
                  </div>
                </div>
              </Link>
            </Col>

            {/* Producto 4 */}
            <Col xs={12} sm={6} md={4} lg={3} className="product-column">
              <Link to="/products/01" className="product-link">
                <div className="product-container">
                  <img
                    src={portfolio1}
                    alt="Portfolio1"
                    className="product-image"
                  />
                  <div className="product-name">Lanterns Enhanced</div>
                  <h1 className="mid-info">Makes Lanterns, Chains and Torches 3D in your hand!</h1>
                  <div className="product-info">
                    <div className="left-info">Byjechu
                    </div>
                    <div className="right-info">
                      {width >= 375 && <div className="new-badge">New🆕</div>}
                    </div>
                  </div>
                </div>
              </Link>
            </Col>

          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default ResumeNew;
