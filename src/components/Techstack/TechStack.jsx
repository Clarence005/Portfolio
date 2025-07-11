import React from 'react';
import skills from '../../data/skills.json';
import styles from './TechStack.module.css';

export const TechStack = () => {
  // Split skills into two lines
  const mid = Math.ceil(skills.length / 2);
  const firstLine = skills.slice(0, mid);
  const secondLine = skills.slice(mid);

  return (
    <section id="techstack" className={styles.container}>
      <h2 className={styles.title}>Tech Stack</h2>
      <div className={styles.marqueeWrapper}>
        <div className={`${styles.marquee} ${styles.leftToRight}`}>
          <div className={styles.marqueeContent}>
            {firstLine.map((skill, idx) => (
              <div className={styles.skill} key={idx}>
                <img src={skill.imageSrc} alt={skill.title} />
                <span>{skill.title}</span>
              </div>
            ))}
          </div>
          <div className={styles.marqueeContent} aria-hidden="true">
            {firstLine.map((skill, idx) => (
              <div className={styles.skill} key={idx}>
                <img src={skill.imageSrc} alt={skill.title} />
                <span>{skill.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.marquee} ${styles.rightToLeft}`}>
          <div className={styles.marqueeContent}>
            {secondLine.map((skill, idx) => (
              <div className={styles.skill} key={idx}>
                <img src={skill.imageSrc} alt={skill.title} />
                <span>{skill.title}</span>
              </div>
            ))}
          </div>
          <div className={styles.marqueeContent} aria-hidden="true">
            {secondLine.map((skill, idx) => (
              <div className={styles.skill} key={idx}>
                <img src={skill.imageSrc} alt={skill.title} />
                <span>{skill.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 