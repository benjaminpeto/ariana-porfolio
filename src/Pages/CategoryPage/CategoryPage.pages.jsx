import React from "react";

import { Carousel } from '3d-react-carousal';

/* import { Link } from "react-router-dom"; */

import baker from '../../assets/carousel-baker-&-spice.webp';
import benji from '../../assets/carousel-benjamin-peto.webp';
import coco from '../../assets/carousel-coco-moon.webp';

import './CategoryPage.styles.scss';

class CategoryPage extends React.Component {

  render() {
    let slides = [
      <div className="image-wrapper">
        <img  src={baker} alt="1" height={700} />
        <h1>baker</h1>
      </div>,
      <div className="image-wrapper">
        <img  src={benji} alt="1" height={700} />
        <h1>benji</h1>
      </div>,
      <div className="image-wrapper">
        <img  src={coco} alt="1" height={700} />
        <h1>coco</h1>
      </div>
    ];

    return (
      <div className="category-wrapper">
        <Carousel slides={slides} />
      </div>
    );
  }
}

export default CategoryPage;