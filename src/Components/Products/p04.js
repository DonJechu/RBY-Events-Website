import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import { FaPlus, FaMinus } from 'react-icons/fa';
import coverImage from "../../assests/products/4.png";
import image1 from "../../assests/products/4.png";
import image2 from "../../assests/products/04/1.png";
import image3 from "../../assests/products/04/2.png";
import image4 from "../../assests/products/04/3.png";
import Footer from '../Footer/footer';
import './products.css';
import { useParams } from 'react-router-dom';

function PageWithCover() {
    const [mainImage, setMainImage] = useState(coverImage);
    const [selectedImage, setSelectedImage] = useState(image1);
    const [showTags, setShowTags] = useState(false);
    const [showCategories, setShowCategories] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        if (id === '04') {
            setMainImage(image1);
            setSelectedImage(image1);
        }
    }, [id]);

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
                <title>RBY's TNT</title>
                <meta property="og:title" content="RBY's TNT" />
                <meta property="og:description" content="Destroy EVERYTHING." />
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
                                src={image2}
                                alt="Image 2"
                                className={`additional-image ${selectedImage === image2 ? 'selected' : ''}`}
                                onClick={() => handleImageClick(image2)}
                                style={{ objectFit: 'cover' }} 
                            />
                            <img
                                src={image1}
                                alt="Image 1"
                                className={`additional-image ${selectedImage === image1 ? 'selected' : ''}`}
                                onClick={() => handleImageClick(image1)}
                                style={{ objectFit: 'cover' }} 
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="content-column align-self-start">
                        <h1 className="title mb-4">RBY's TNT</h1>
                        <p className="description mb-4">
                            Destroy <strong>EVERYTHING</strong>.
                        </p>
                        <p className="description mb-0">
                            <strong>Features:</strong>
                            <ul className="custom-list">
                            <p><strong>RBY'S TNT</strong> is a dynamic datapack that introduces ALMOST 10 new explosive variations, 
                                including 6 innovative TNT types and 2 dynamites. This pack revolutionizes the explosive 
                                experience in Minecraft by infusing it with a diverse array of explosive options. 
                                Whether you're unleashing chaos in creative mode or devising intricate mining strategies in survival
                                , this pack ensures explosive encounters are anything but ordinary.</p>
                            </ul>
                        </p>
                        <a href="https://cdn.modrinth.com/data/trx5nCJq/versions/FxrsXNc6/RBY%27S%20TNT%20-%20EXTRACT.zip" download>
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
                                    <div className="tag">Cursed</div>
                                    <div className="tag">Game Mechanics</div>
                                    <div className="tag">Technology</div>
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
                                    <div className="category">Datapack</div>
                                    <div className="category">Game Mechanics</div>
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
