import React from 'react';
import styles from '../styles/components/Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <h3>Robot Status</h3>
      <ul>
        <li>Battery: 85%</li>
        <li>Connectivity: Online</li>
        <li>Temperature: 32°C</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
