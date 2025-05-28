import React from 'react';
import styles from '../styles/components/Header.module.css';
import { FaBell, FaPlus, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Healthcare.</h1>
      <div className={styles.searchContainer}>
        <FaSearch className={styles.icon} />
        <input type="text" placeholder="Search" disabled className={styles.searchInput} />
      </div>
      <FaBell className={styles.icon} />
      <div className={styles.profile}>John Doe</div>
      <FaPlus className={styles.addBtn} />
    </header>
  );
};

export default Header;
