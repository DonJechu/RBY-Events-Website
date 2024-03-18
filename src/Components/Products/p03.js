import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import coverImage from "../../assests/products/3.png";
import image1 from "../../assests/products/3.png";
import image2 from "../../assests/products/03/1.png";
import image3 from "../../assests/products/03/2.png";
import image4 from "../../assests/products/03/3.png";
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
                        <h1 className="title mb-4">RBY Rings</h1>
                        <p className="description mb-4">
                        Create <strong>Powerful RINGS</strong> That Grant <strong>Special</strong> Abilities To <strong>YOU</strong>.
                        </p>
                        <p className="description mb-0">
                            <strong>The pack includes:</strong>
                            <ul className="custom-list">
                                <li>Craft a wide variety of rings with different abilities.</li>
                                <li>Experience new challenges and adventures as you harness your superpowers.</li>
                                <li>Play and troll your friends.</li>
                            </ul>
                        </p>
                        <a href="https://cdn.modrinth.com/data/PrX8VuaM/versions/9p7O2IH8/RBY%20Rings%20%28EXTRACT%29.zip" download>
                            <Button variant="primary" className="download-button">Download Product</Button>
                        </a>
                        <div className="d-flex">
                            <Link to='http://discord.rby.events/'>
                            <Button variant="secondary" className="down-buttons mr-2">Changelog</Button>
                            </Link>
                        </div>
                        <div className="tags-categories">
                            <hr className="separator" />
                            <Button variant="link" className={`tags-categories-button ${showTags ? 'active' : ''}`} onClick={toggleTags}>
                                Tags {showTags ? <FaMinus size={12} /> : <FaPlus size={12} />}
                            </Button>
                            {showTags && (
                                <div className={`tag-list ${showTags ? 'active' : ''}`}>
                                    <div className="tag">Adventure</div>
                                    <div className="tag">Magic</div>
                                    <div className="tag">Utility</div>
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
