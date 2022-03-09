// PageLoadingAnimation loads only on first visit, again on new session

import { useState, useEffect } from 'react'
import disableScroll from 'disable-scroll';

export default function useWillAnimate() {
  const [willAnimate, setWillAnimate] = useState(true);

  useEffect(() => {
    if(window.sessionStorage.getItem("firstLoadDone") === null) {
      setWillAnimate(true);
      disableScroll.on();
      setTimeout(() => {
        disableScroll.off();
      }, 4500);
      window.sessionStorage.setItem("firstLoadDone", 1);
    }
    else {
      setWillAnimate(false);
      disableScroll.off()
    }
  }, []);
  console.log('willAnimate_result: ', willAnimate);
  return willAnimate;
};