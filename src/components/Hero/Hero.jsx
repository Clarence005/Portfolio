import React, { useEffect } from 'react';
import heroicon from "../../../assets/hero/profile.png";
import styles from "./Hero.module.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

export const Hero = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} data-aos="fade-down">Hi, I'm Clarence Samuel</h1>
        <p className={styles.description} data-aos="fade-up" data-aos-delay="200">I'm a full-stack developer specializing in React and Node.js, with a passion for app development using Flutter. I thrive on solving complex problems and building innovative solutions.</p>
        <a href="mailto:clarencesamuel008@gmail.com" className={styles.contact} data-aos="zoom-in" data-aos-delay="400">Contact Me</a>
      </div>
      <img src={heroicon} alt="Hero" className={styles.hero} data-aos="fade-left" data-aos-delay="300" />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
