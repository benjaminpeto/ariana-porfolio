import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import './CarouselSlide.styles.scss';

import saladita1 from '../../assets/carousel-saladita studio.png';
import saladita2 from '../../assets/carousel-saladita studio1.png';
import saladita3 from '../../assets/carousel-saladita studio 2.png';
import saladita4 from '../../assets/carousel-saladita studio 3.png';

const CarouselSlide = () => {

	const images = [
    {
      original: saladita1,
      description: <Link className='links' to='/portfolio/branding/coco-moon'>coco moon</Link>
    },
    {
      original: saladita2,
      description: <Link className='links' to='/portfolio/branding/benjamin-peto'>Benjamin peto</Link>
    },
    {
      original: saladita3,
      description: <Link className='links' to='/portfolio/branding/baker-&-spice'>Baker & Spice</Link>
    },
    {
      original: saladita4,
      description: <Link className='links' to='/portfolio/branding/sicily-restaurant'>Sicily Restaurant</Link>
    },
  ];

	return (
		<div className='carousel-container'>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
      />
		</div>
	);
};

export default CarouselSlide;