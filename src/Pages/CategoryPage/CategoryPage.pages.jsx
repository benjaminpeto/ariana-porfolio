import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CategoryPage = ({category}) => {
  const { categoryUrl } = useParams();
  
  return (
    <>
      <h2 style={{ paddingTop:'100px'}}>Categories</h2>
      <ul>
        {category.filter(item => item.cat === categoryUrl).map(filteredItem => 
          <li key={filteredItem.id}>
            <Link to={`/portfolio/${filteredItem.cat}/${filteredItem.url}`}>
              {filteredItem.title}
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default CategoryPage;