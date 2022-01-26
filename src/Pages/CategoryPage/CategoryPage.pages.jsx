import React from 'react';
import { useParams } from 'react-router-dom';

import { brandingImages, illustrationImages} from './carouselData';

function CategoryPage() {
  let { category } = useParams();
  return (
    category === 'ux-ui' ?
    <div style={{width: '100vw', height: '87vh', padding: '10em'}}>
        This is the category of {category}!
    </div> : 
    category === 'branding' ?
    <div style={{width: '100vw', height: '87vh', padding: '10em'}}>
      <h1>{category}</h1>
        {
          brandingImages.map((image) => (
            <div key={image.id}>
            
              <h1>{image.title}</h1>
              <img src={image.image} alt='' />
            </div>
          ))
        }
    </div> :
    <div style={{width: '100vw', height: '87vh', padding: '10em'}}>
    <h1>{category}</h1>
    {
      illustrationImages.map((image) => (
        <div key={image.id}>
          <h1>{image.title}</h1>
          <img src={image.image} alt='' />
        </div>
      ))
    }
    </div>
  );
}

export default CategoryPage;