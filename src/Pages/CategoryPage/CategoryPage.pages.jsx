import React from 'react';
import { Link, useParams } from 'react-router-dom';

import WebDesign from '../WebDesignPage/WebDesign.pages';

const CategoryPage = ({ category }, props) => {
  const { categoryUrl } = useParams();

  if (categoryUrl === 'ux-ui') {
    return (
      <WebDesign />
    )
  }
  else {
    return (
      <>
        <ul style={{ paddingTop:'100px'}}>
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

//*CAROUSEL CARD FOR CATEGORIES */