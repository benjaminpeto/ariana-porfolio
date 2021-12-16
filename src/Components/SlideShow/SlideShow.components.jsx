import React from "react";

import './SlideShow.styles.scss';

import { images } from "./Images.slides";

const delay = 4500;

function SlideShow() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {images.map((image) => (
            <img
              className="slide"
              key={image}
              src={image.img}
              alt="slideshow"
              width='auto'
            />
          ))}
      </div>
    </div>
  );
}

export default SlideShow;