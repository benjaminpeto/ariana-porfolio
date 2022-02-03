import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Carousel } from '3d-react-carousal';

import saladita1 from '../../assets/carousel-saladita studio.png';
import saladita2 from '../../assets/carousel-saladita studio1.png';
import saladita3 from '../../assets/carousel-saladita studio 2.png';
import saladita4 from '../../assets/carousel-saladita studio 3.png';

import WebDesign from '../WebDesignPage/WebDesign.pages';

import './CategoryPage.styles.scss';

const CategoryPage = ({ category }, props) => {
  const { categoryUrl } = useParams();

  let slides = [
    <img src={saladita1} alt="1" />,
    <img src={saladita2} alt="2" />,
    <img src={saladita3} alt="3" />,
    <img src={saladita4} alt="4" />
  ];

  if (categoryUrl === 'ux-ui') {
    return (
      <WebDesign />
    )
  }
  else {
    return (
      <>
        <ul style={{ paddingTop:'100px'}}>
        <Carousel slides={slides} />
          {category.filter(item => item.cat === categoryUrl).map(filteredItem => 
            <li key={filteredItem.id}>
              <Link style={{fontSize: '40px'}} to={`/portfolio/${filteredItem.cat}/${filteredItem.url}`}>
                {filteredItem.title}
              </Link>
            </li>
          )}
        </ul>
      </>
    );
  }
};

export default CategoryPage;

//*CAROUSEL CARD FOR CATEGORIES/