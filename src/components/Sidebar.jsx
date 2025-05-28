import React from 'react';
import styles from '../styles/components/Sidebar.module.css';
import { navigationLinks } from '../data/navigationLinks';
import { FaHome, FaCalendarAlt, FaNotesMedical, FaChartBar, FaComments, FaCogs, FaUserMd, FaHistory, FaQuestion } from 'react-icons/fa';

const icons = [
  <FaHome />,
  <FaHistory />,
  <FaCalendarAlt />,
  <FaNotesMedical />,
  <FaChartBar />,
  <FaUserMd />,
  <FaComments />,
  <FaQuestion />,
  <FaCogs />
];

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>General</h2>
      <ul className={styles.navList}>
        {navigationLinks.map((link, index) => (
          <li key={index} className={styles.navItem}>
            {icons[index]}
            <span>{link}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
