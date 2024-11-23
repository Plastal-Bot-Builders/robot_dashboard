import React from 'react';
import styles from '../styles/components/CameraFeed.module.css';

const CameraFeed: React.FC = () => {
  return (
    <div className={styles.cameraFeed}>
      <h2>Camera Feed</h2>
      <div className="camera-placeholder">Camera Placeholder</div>
    </div>
  );
};

export default CameraFeed;
