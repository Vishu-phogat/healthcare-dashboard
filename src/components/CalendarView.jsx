import React from 'react';
import styles from '../styles/components/CalendarView.module.css';
import { calendarAppointments } from '../data/appointments';

const CalendarView = () => {
  return (
    <section className={styles.calendar}>
      <h2>October 2021</h2>
      <div className={styles.grid}>
        {calendarAppointments.map((day, index) => (
          <div key={index} className={styles.day}>
            <span className={styles.date}>{day.date}</span>
            {day.times.map((time, idx) => (
              <span key={idx} className={styles.time}>{time}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalendarView;
