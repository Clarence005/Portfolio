import React from 'react';
import heroicon from "../../../assets/hero/profile.png";
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Clarence Samuel</h1>
        <p className={styles.description}>I'm a full-stack developer specializing in React and Node.js, with a passion for app development using Flutter. I thrive on solving complex problems and building innovative solutions.</p>
        <a href="mailto:clarencesamuel008@gmail.com" className={styles.contact}>Contact Me</a>
      </div>
      <img src={heroicon} alt="Hero" className={styles.hero} />
      <div className = {styles.topblur}></div>
      <div className = {styles.bottomblur}></div>
    </section>
  );
};
