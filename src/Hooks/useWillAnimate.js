// PageLoadingAnimation loads only on first visit, again on new session

import { useState, useEffect } from 'react'

export default function useWillAnimate() {
  const [willAnimate, setWillAnimate] = useState(true);

  useEffect(() => {
    if(window.sessionStorage.getItem("firstLoadDone") === null) {
      setWillAnimate(true);
      window.sessionStorage.setItem("firstLoadDone", 1);
    }
    else {
      setWillAnimate(false);
    }
  }, []);
  console.log('willAnimate_result: ', willAnimate);
  return willAnimate;
};