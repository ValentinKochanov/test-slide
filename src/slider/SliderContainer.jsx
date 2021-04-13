import React, { useState, useEffect } from "react";
import Slider from './Slider';

let firstSlide;
let secondSlide;
let thirdSlide;
let fourthSlide;
let fifthSlide;

export default function SliderContainer(){
  const [count, setCount] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    firstSlide = document.getElementById("myRef1");
    secondSlide = document.getElementById("myRef2");
    thirdSlide = document.getElementById("myRef3");
    fourthSlide = document.getElementById("myRef4");
    fifthSlide = document.getElementById("myRef5");
    SelectSlide(count)
  })

  function SelectSlide(count){
    switch (count) {
		case 0:
			return firstSlide.scrollIntoView({behavior: "smooth"});
    case 1:
      return secondSlide.scrollIntoView({behavior: "smooth"});
    case 2:
      return thirdSlide.scrollIntoView({behavior: "smooth"});
    case 3:
      return fourthSlide.scrollIntoView({behavior: "smooth"});
    case 4:
      return fifthSlide.scrollIntoView({behavior: "smooth"});
		default:
			return null;
	};
}

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientY
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if(touchDown === null){
      return
    };
    const currentTouch = e.touches[0].clientY;
    const diff = touchDown - currentTouch;
    if(diff>15){
      if(count<4){
        setCount(prevCount => prevCount + 1)
      }
    };
    if(diff<-15){
      if(count!==0){
        setCount(prevCount => prevCount - 1)
      }
    };
    setTouchPosition(null)
  };

  return (
  <div>
    <Slider count={count}
     handleTouchStart={handleTouchStart} 
     handleTouchMove={handleTouchMove}/>
  </div>
  )
}