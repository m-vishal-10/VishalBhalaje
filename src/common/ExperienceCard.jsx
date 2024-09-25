import React from 'react';
import styles from '../sections/Experience/ExperienceStyles.module.css';

function ExperienceCard({ src, alt, title, details, position }) {
  return (
    <div className={`${styles.cardContainer} ${position === 'left' ? styles.left : styles.right}`}>
      {position === 'left' ? (
        <>
          <div className={styles.textBox}>
            <h2>{title}</h2>
            {details.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
          <img src={src} alt={alt} className={styles.timelineImage} />
        </>
      ) : (
        <>
          <img src={src} alt={alt} className={styles.timelineImage} />
          <div className={styles.textBox}>
            <h2>{title}</h2>
            {details.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ExperienceCard;
