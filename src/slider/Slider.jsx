import React from 'react';
import styles from './slide.module.css';
import Paginator from './Paginator';


export default function Slider(props){
  return <div className={styles.wrapper}
   onTouchStart={props.handleTouchStart} 
   onTouchMove={props.handleTouchMove}>
    <div className={styles.pagination}><Paginator state={props.count}/></div>
    <div className={styles.slider}></div>
    <div className={styles.slider}></div>
    <div id="myRef1" className={styles.slider}></div>
    <div className={styles.slider}></div>
    <div className={styles.slider}></div>
    <div id="myRef2" className={styles.slider}></div>
    <div id="myRef5" className={styles.slider}></div>
    <div id="myRef4" className={styles.slider}></div>
    <div id="myRef3" className={styles.slider}></div> 
  </div>
}