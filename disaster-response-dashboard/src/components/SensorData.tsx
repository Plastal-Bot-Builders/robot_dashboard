import React from 'react';
import styles from '../styles/components/SensorData.module.css';

const SensorData: React.FC = () => {
  return (
    <div className={styles.sensorData}>
      <h2>Sensor Data</h2>
      <ul>
        <li>Gas Levels: Normal</li>
        <li>Structural Integrity: 95%</li>
        <li>Temperature: 32°C</li>
      </ul>
    </div>
  );
};

export default SensorData;
