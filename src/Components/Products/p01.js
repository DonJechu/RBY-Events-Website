import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPlus, FaMinus } from 'react-icons/fa';
import coverImage from "../../assests/products/1.png";
import image1 from "../../assests/products/1.png";
import image2 from "../../assests/products/01/1.png";
import image3 from "../../assests/products/01/2.png";
import image4 from "../../assests/products/01/3.png";
import Footer from '../Footer/footer';
import './products.css';

function PageWithCover() {
    const [mainImage, setMainImage] = useState(coverImage);
    const [selectedImage, setSelectedImage] = useState(image1);
    const [showTags, setShowTags] = useState(false);
    const [showCategories, setShowCategories] = useState(false);

    const handleImageClick = (image) => {
        setMainImage(image);
        setSelectedImage(image);
    };

    const toggleTags = () => {
        setShowTags(!showTags);
        setShowCategories(false);
    };

    const toggleCategories = () => {
        setShowCategories(!showCategories);
        setShowTags(false);
    };

    return (
        <>
            <Helmet>
                <title>Lanterns Enhanced</title>
                <meta property="og:title" content="Lanterns Enhanced" />
                <meta property="og:description" content="Makes Lanterns, Chains and Torches 3D in your hand!" />
                <meta property="og:image" content={coverImage} />
                {/* Agrega otras metaetiquetas que desees para esta página */}
            </Helmet>
            <Container fluid className="page-container">
                <Row>
                    <Col xs={12} md={4} className="image-column align-self-start">
                        <img
                            src={mainImage}
                            alt="Cover"
                            className="cover-image"
                        />
                        <div className="additional-images-container">
                            <img
                                src={image1}
                                alt="Image 1"
                                className={`additional-image ${selectedImage === image1 ? 'selected' : ''}`}
                                onClick={() => handleImageClick(image1)}
                                style={{ objectFit: 'cover' }} 
                            />
                            <img
                                src={image2}
                                alt="Image 2"
                                className={`additional-image ${selectedImage === image2 ? 'selected' : ''}`}
                                onClick={() => handleImageClick(image2)}
                                style={{ objectFit: 'cover' }} 
                            />
                            <img
                                src={image3}
                                alt="Image 3"
                                className={`additional-image ${selectedImage === image3 ? 'selected' : ''}`}
                                onClick={() => handleImageClick(image3)}
                                style={{ objectFit: 'cover' }} 
                            />
                            <img
                                src={image4}
                                alt="Image 4"
                                className={`additional-image ${selectedImage === image4 ? 'selected' : ''}`}
                                onClick={() => handleImageClick(image4)}
                                style={{ objectFit: 'cover' }} 
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="content-column align-self-start">
                        <h1 className="title mb-4">Lanterns Enhanced</h1>
                        <h3 className="description mb-4">
                            Lanterns Enhanced transforms <strong>Lanterns</strong>, <strong>Torches</strong> and <strong>Chains</strong>
                            with revamped <strong>3D models</strong>, providing them with a fresh appearance. Moreover, it refines the <strong>
                            third-person holding</strong> view for lanterns and torches, offering a more <strong>aesthetically</strong>
                            pleasing and slightly realistic portrayal.
                        </h3>
                        <h3 className="description mb-4">
                            <strong>The pack includes:</strong>
                            <ul className="custom-list">
                                <li>3D Lanterns</li>
                                <li>3D Torches</li>
                                <li>3D Chains</li>
                                <li>Third-Person Holding</li>
                            </ul>
                        </h3>
                        <a href="https://cdn.modrinth.com/data/FZ2oFlqL/versions/gJpc7dfr/Lanterns%2BEnhanced%20v1.0.1.zip" download>
                            <Button variant="primary" className="download-button">Download Product</Button>
                        </a>
                        <div className="d-flex">
                            <Button variant="secondary" className="down-buttons mr-2">Changelog</Button>
                            <Button variant="secondary" className="down-buttons">Versions</Button>
                        </div>

                        <div className="tags-categories">
                            <hr className="separator" />
                            <Button variant="link" className={`tags-categories-button ${showTags ? 'active' : ''}`} onClick={toggleTags}>
                                Tags {showTags ? <FaMinus size={12} /> : <FaPlus size={12} />}
                            </Button>
                            {showTags && (
                                <div className={`tag-list ${showTags ? 'active' : ''}`}>
                                    <div className="tag">Environment</div>
                                    <div className="tag">Misc</div>
                                </div>
                            )}
                        </div>

                        <div className="tags-categories">
                            <hr className="separator" />
                            <Button variant="link" className={`categories-button ${showCategories ? 'active' : ''}`} onClick={toggleCategories}>
                                Categories {showCategories ? <FaMinus size={12} /> : <FaPlus size={12} />}
                            </Button>
                            {showCategories && (
                                <div className={`category-list ${showCategories ? 'active' : ''}`}>
                                    <div className="category">Resource Pack</div>
                                    <div className="category">Gui</div>
                                    <div className="category">Models</div>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default PageWithCover;
