import React from 'react';
import styles from '../styles/components/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Disaster Response Dashboard</h1>
      <nav>
        <ul>
          <li>Sensor Data</li>
          <li>Control Panel</li>
          <li>Map</li>
          <li>Communication</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
