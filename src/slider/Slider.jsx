import React, { useState } from "react";
import styles from './slide.module.css';
import Paginator from './Paginator';


const stylesArr = [styles.slide1, styles.slide2, styles.slide3, styles.slide4, styles.slide5];

export default function Slider () {
  const [count, setCount] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientY
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if(touchDown === null) {
        return
    };
    const currentTouch = e.touches[0].clientY;
    const diff = touchDown - currentTouch;
    if (diff > 15) {
      if(count<4){setCount(count + 1)}
    };
    if (diff < -15) {
      if(count!==0){setCount(count - 1)}
    };
    setTouchPosition(null)
  };

  return <div id={stylesArr[count]} className={styles.slide} onTouchStart={handleTouchStart} 
    onTouchMove={handleTouchMove}>
    <Paginator state={count}/>
  </div>
}