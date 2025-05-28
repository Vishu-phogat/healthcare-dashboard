import React from 'react';
import styles from '../styles/components/DashboardMainContent.module.css';
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className={styles.mainContent}>
      <DashboardOverview />
      <CalendarView />
      <UpcomingSchedule />
      <ActivityFeed />
    </div>
  );
};

export default DashboardMainContent;
