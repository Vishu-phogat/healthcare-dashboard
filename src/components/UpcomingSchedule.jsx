import React from 'react';
import styles from '../styles/components/UpcomingSchedule.module.css';
import { upcomingAppointments } from '../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
    <section className={styles.schedule}>
      <h2>The Upcoming Schedule</h2>
      <h4>On Thursday</h4>
      {upcomingAppointments.map((appt, index) => (
        <SimpleAppointmentCard key={index} title={appt.title} time={appt.time} />
      ))}
    </section>
  );
};

export default UpcomingSchedule;
