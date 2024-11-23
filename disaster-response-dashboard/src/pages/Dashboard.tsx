import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import SensorData from '../components/SensorData';
import ControlPanel from '../components/ControlPanel';
import MapView from '../components/MapView';
import CameraFeed from '../components/CameraFeed';
import CommunicationPanel from '../components/CommunicationPanel';
import styles from '../styles/layout.css';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          <div className={styles.top}>
            <SensorData />
            <CameraFeed />
          </div>
          <div className={styles.bottom}>
            <MapView />
            <ControlPanel />
          </div>
        </div>
        <CommunicationPanel />
      </div>
    </div>
  );
};

export default Dashboard;
