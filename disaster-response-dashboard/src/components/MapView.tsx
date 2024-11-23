import React from 'react';
import styles from '../styles/components/MapView.module.css';

const MapView: React.FC = () => {
  return (
    <div className={styles.mapView}>
      <h2>Robot Location</h2>
      <div className="map-placeholder">Map Placeholder</div>
    </div>
  );
};

export default MapView;
