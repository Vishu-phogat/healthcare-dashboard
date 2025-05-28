import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import styles from '../styles/components/DashboardOverview.module.css';

const DashboardOverview = () => {
  return (
    <section className={styles.overview}>
      <AnatomySection />
      <HealthStatusCards />
    </section>
  );
};

export default DashboardOverview;
