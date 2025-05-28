import React from 'react';
import styles from '../styles/components/ActivityFeed.module.css';
import { activityData } from '../data/activityData';

const ActivityFeed = () => {
  return (
    <section className={styles.activity}>
      <h2>Activity</h2>
      <p>{activityData.summary}</p>
      <div className={styles.bars}>
        {activityData.bars.map((value, index) => (
          <div key={index} className={styles.bar} style={{ height: `${value}px` }}></div>
        ))}
      </div>
    </section>
  );
};

export default ActivityFeed;
