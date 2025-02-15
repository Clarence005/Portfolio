import React from 'react'
import heroicon from "../../../assets/about/dp.png";
import cursoricon from "../../../assets/about/cursorIcon.png";
import servericon from "../../../assets/about/serverIcon.png";
import uiicon from "../../../assets/about/uiIcon.png";
import styles from "./About.module.css";

export const About = () => {
  return <section className= {styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src = {heroicon} alt = "Me sitting with laptop"
        className={styles.aboutimg}/>
        <ul className={styles.aboutitem}>
            <li className={styles.item}>
                <img src = {cursoricon} alt = "cursor icon"/>
                <div className={styles.itemtext}>
                    <h3>Frontedn Developer</h3><br/> 
                    <p>I'm a frontend developer with experience in building and optimized sites </p>
                </div>
            </li>
            <li  className={styles.item}>
                <img src = {uiicon} alt = "UI icon"/>
                <div className={styles.itemtext}>
                <h3>App Developer</h3><br/> <p>I'm a proficient app developer with expertise in creating efficient and user-friendly applications.</p>
                </div>
            </li>
            <li  className={styles.item}>
                <img src = {servericon} alt = "server icon"/>
                <div className={styles.itemtext}>
                <h3>Backend Developer</h3><br/>  <p>I'm a backend developer skilled in server-side applications and database management.</p>
                </div>
            </li>
        </ul>
    </div>
  </section>
}
