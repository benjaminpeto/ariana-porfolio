import ImageGallery from 'react-image-gallery';

import './CarouselSlide.styles.scss';

import saladita1 from '../../assets/carousel-saladita studio.png';
import saladita2 from '../../assets/carousel-saladita studio1.png';
import saladita3 from '../../assets/carousel-saladita studio 2.png';
import saladita4 from '../../assets/carousel-saladita studio 3.png';

const CarouselSlide = () => {

	const images = [
    {
      original: saladita1,
      sizes: '140',
      description: 'cocomoon'
    },
    {
      original: saladita2,
      sizes: '140',
      description: 'benji'
    },
    {
      original: saladita3,
      sizes: '140',
      description: 'saladita'
    },
    {
      original: saladita4,
      sizes: '140',
      description: 'sicily'
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
