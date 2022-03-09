import ImageGallery from 'react-image-gallery';
import { Link, useParams } from 'react-router-dom';

import { motion } from 'framer-motion';

import './CarouselSlide.styles.scss';

import bakerSpice from '../../assets/carousel/baker&spice-branding.webp';
import cocoMoon from '../../assets/carousel/cocomoon-branding.webp';
import benji from '../../assets/carousel/pb-branding.webp';
import sicily from '../../assets/carousel/sicily-branding.webp';
import saladita from '../../assets/carousel/saladitastudio-illustration.webp';
import dayDreaming from '../../assets/carousel/daydreaming-illustration.webp';
import surfSoul from '../../assets/carousel/surfnsoul-illustration.webp';
//import { category } from '../../data/carouselData';

const carouselVariants = {
  hidden: {
    opacity: 0,
    y: '100vh'
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 1.3
    }
  }
};

const CarouselSlide = (props) => {

  const { categoryUrl } = useParams();

  //let navigate = useNavigate();

	const imagesBranding = [
    {
      original: cocoMoon,
      description: <Link className='links' to='/portfolio/branding/coco-moon'>coco moon</Link>,
    },
    {
      original: benji,
      description: <Link className='links' to='/portfolio/branding/benjamin-peto'>Benjamin peto</Link>
    },
    {
      original: bakerSpice,
      description: <Link className='links' to='/portfolio/branding/baker-&-spice'>Baker & Spice</Link>
    },
    {
      original: sicily,
      description: <Link className='links' to='/portfolio/branding/sicily-restaurant'>Sicily Restaurant</Link>
    },
  ];

  const imagesIllustrations = [
    {
      original: dayDreaming,
      description: <Link className='links' to='/portfolio/illustrations/day-dreaming'>Day dreaming</Link>
    },
    {
      original: saladita,
      description: <Link className='links' to='/portfolio/illustrations/saladita-studio'>saladita studio</Link>
    },
    {
      original: surfSoul,
      description: <Link className='links' to='/portfolio/illustrations/surf-&-soul'>surf & soul</Link>
    },
  ];

	return (
		<motion.div className='carousel-container' variants={carouselVariants} initial='hidden' animate='visible'>
      <ImageGallery
        items={categoryUrl === 'branding' ? imagesBranding : imagesIllustrations}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        //onClick={() =>}
      />
		</motion.div>
	);
};

export default CarouselSlide;