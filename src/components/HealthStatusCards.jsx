import React from 'react';
import styles from '../styles/components/HealthStatusCards.module.css';
import { healthStatus } from '../data/healthData';

const HealthStatusCards = () => {
  return (
    <div className={styles.cards}>
      {healthStatus.slice(1).map((item, index) => (
        <div key={index} className={styles.card}>
          <h3>{item.label}</h3>
          <p className={styles[item.status]}>{item.status === 'healthy' ? 'All Good' : 'Needs Attention'}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
