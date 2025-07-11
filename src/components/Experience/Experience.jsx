import React, { useEffect } from 'react';
import history from "../../data/history.json";
import styles from "./Experience.module.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

export const Experience = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);
  return (
    <section id="experience" className={styles.timelineSection}>
      <h2 className={styles.timelineTitle}>TIMELINE</h2>
      <div className={styles.timeline}>
        {history.map((item, idx) => (
          <div className={styles.timelineItem} key={idx} data-aos="fade-up" data-aos-delay={idx * 120}>
            <div className={styles.timelineYear}>{item.year}</div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineCard}>
                <h3 className={styles.timelineCardTitle}>{item.title}</h3>
                <p className={styles.timelineCardDesc}>{item.description}</p>
              </div>
            </div>
            {idx !== history.length - 1 && <div className={styles.timelineConnector}></div>}
          </div>
        ))}
      </div>
    </section>
  );
};
