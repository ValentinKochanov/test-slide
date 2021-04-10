import React from 'react';
import pag1 from './img/pag1.png';
import pag2 from './img/pag2.png';
import pag3 from './img/pag3.png';


export default function Paginator (props) {
  switch (props.state) {
		case 0:
			return <img src={pag1} alt="pag1"/>
    case 1:
      return <img src={pag2} alt="pag2"/>
    case 2:
    case 3:
    case 4:
      return <img src={pag3} alt="pag3"/>
		default:
			return null;
	};
}