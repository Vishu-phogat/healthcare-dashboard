import React from 'react';
import styles from '../styles/components/AnatomySection.module.css';
import anatomy from '../assets/anatomy.png';
import { healthStatus } from '../data/healthData';

const AnatomySection = () => {
  return (
    <div className={styles.container}>
      <img src={anatomy} alt="Anatomical Diagram" className={styles.image} />
      <ul className={styles.labels}>
        {healthStatus.map((item, index) => (
          <li key={index} className={`${styles.label} ${styles[item.status]}`}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnatomySection;
