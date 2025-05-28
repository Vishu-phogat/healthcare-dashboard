import React from 'react';
import styles from '../styles/components/SimpleAppointmentCard.module.css';
import { FaStethoscope } from 'react-icons/fa';

const SimpleAppointmentCard = ({ title, time }) => {
  return (
    <div className={styles.card}>
      <FaStethoscope className={styles.icon} />
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.time}>{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
