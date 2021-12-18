import React from "react";

import img1 from '../../assets/Peru coffee.webp';
import img2 from '../../assets/coco moon hair spray.webp';
import img3 from '../../assets/coconut pool.webp';
import img4 from '../../assets/notebook_.webp';

import './SlideShow.styles.scss';

const SlideShow = () => {

  return(
    <div className="slider">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
    </div>
  );
}

export default SlideShow;