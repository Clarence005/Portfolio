import React from 'react';
import styles from './Achievements.module.css';

export const Achievements = () => (
  <section className={styles.container}>
    <h2 className={styles.title}>Achievements</h2>
    <div className={styles.cards}>
      <div className={styles.card}>
        <span className={styles.emoji}>🥈</span>
        <div>
          <h3 className={styles.cardTitle}>TechGrad Hackathon - 2nd Prize</h3>
          <p className={styles.cardDesc}>
            Secured Second Prize in the TechGrad Hackathon for developing "Friends of Kissan", an app that empowers farmers to sell their produce directly to vendors without third-party involvement.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <span className={styles.emoji}>🌟</span>
        <div>
          <h3 className={styles.cardTitle}>Zenith Hackathon - Special Mention</h3>
          <p className={styles.cardDesc}>
            Received Special Mention at the Zenith Hackathon for building "Generous Grains", a platform that redistributes leftover food from hotels to orphanages, helping reduce food waste.
          </p>
        </div>
      </div>
    </div>
  </section>
); 