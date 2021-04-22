import React from 'react';
import classNames from 'classnames';
import styles from './slide.module.css';
import Paginator from './Paginator';


export default function Slider(props){
  return <div className={styles.wrapper}
   onTouchStart={props.handleTouchStart} 
   onTouchMove={props.handleTouchMove}>
    <div className={styles.pagination}><Paginator state={props.count}/></div>
    <div className={styles.slider}></div>
    <div className={styles.slider}></div>
    <div id="myRef1" className={classNames(styles.slider, styles.slide1)}>
      <h1 className={styles.header1}>Всегда ли цели терапии СД2 на поверхности?</h1>
      <p className={styles.HbA1}>Цель по HbA1c</p>
      <p className={styles.gipoglicemia}>Гипогликемия</p>
      <p className={styles.risky}>СС риски</p>
      <p className={styles.oslozhnenia}>Осложнения СД</p>
      <p className={styles.listaite} align="center">Листайте вниз</p>
    </div>
    <div className={styles.slider}></div>
    <div className={styles.slider}></div>
    <div id="myRef2" className={styles.slider}>
      <h1 className={styles.header2}>Основа терапии - патогенез СД</h1>
    </div>
    <div id="myRef5" className={styles.slider}></div>
    <div id="myRef4" className={styles.slider}></div>
    <div id="myRef3" className={styles.slider}></div> 
  </div>
}