import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

import './index.css'; // Importa tu archivo CSS
import Logo from '../../assests/logo.png';
import Footer from '../Footer/footer';
import portfolio1 from '../../assests/products/1.png';
import portfolio2 from '../../assests/products/2.png';
import portfolio3 from '../../assests/products/3.png';
import coming_soon from '../../assests/products/coming-soon.png'

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
      <Helmet>
          <title>Lanterns Enhanced</title>
          <meta property="og:title" content="RBY Events" />
          <meta property="og:description" content="Search and browse for Datapacks, Resourcepack, Maps on RBY with instant, accurate search results" />
          <meta property="og:image" content={Logo} />
          {/* Agrega otras metaetiquetas que desees para esta página */}
          </Helmet>
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
                  <h1 className="mid-info">Makes <strong>Lanterns</strong>, <strong>Chains</strong> and <strong>Torches 3D</strong> in your hand!</h1>
                  <div className="product-info">
                    <div className="left-info">ResourcePack
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
                  <h1 className="mid-info">A new level of <strong>minimalism</strong> for your Minecraft <strong>HUD/Hotbar</strong>.</h1>
                  <div className="product-info">
                    <div className="left-info">ResourcePack
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
                  <h1 className="mid-info">Make <strong>powerful RINGS</strong> that grant special <strong>abilities</strong> to you.</h1>
                  <div className="product-info">
                    <div className="left-info">DataPack</div>
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
                    src={coming_soon}
                    alt="Portfolio1"
                    className="product-image"
                  />
                  <div className="product-name">Coming Soom</div>
                  <h1 className="mid-info">Coming Soon</h1>
                  <div className="product-info">
                    <div className="left-info">Coming Soon
                    </div>
                    <div className="right-info">
                      {width >= 375 && <div className="new-badge">Soon🔜</div>}
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
