import ImageGallery from 'react-image-gallery';
import { Link, useParams } from 'react-router-dom';
import './CarouselSlide.styles.scss';

import saladita1 from '../../assets/carousel-saladita studio.png';
import saladita2 from '../../assets/carousel-saladita studio1.png';
import saladita3 from '../../assets/carousel-saladita studio 2.png';
import saladita4 from '../../assets/carousel-saladita studio 3.png';

const CarouselSlide = (props) => {

  const { categoryUrl } = useParams();

	const imagesBranding = [
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

  const imagesIllustrations = [
    {
      original: saladita2,
      description: <Link className='links' to='/portfolio/illustrations/day-dreaming'>Day dreaming</Link>
    },
    {
      original: saladita3,
      description: <Link className='links' to='/portfolio/illustrations/saladita-studio'>saladita studio</Link>
    },
    {
      original: saladita4,
      description: <Link className='links' to='/portfolio/illustrations/surf-&-soul'>surf & soul</Link>
    },
  ];

	return (
		<div className='carousel-container'>
      <ImageGallery
        items={categoryUrl === 'branding' ? imagesBranding : imagesIllustrations}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
      />
		</div>
	);
};

export default CarouselSlide;