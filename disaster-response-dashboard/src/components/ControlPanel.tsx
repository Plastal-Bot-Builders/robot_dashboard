import React from 'react';
import styles from '../styles/components/ControlPanel.module.css';

const ControlPanel: React.FC = () => {
  return (
    <div className={styles.controlPanel}>
      <h2>Control Panel</h2>
      <button>Move Forward</button>
      <button>Move Backward</button>
      <button>Turn Left</button>
      <button>Turn Right</button>
    </div>
  );
};

export default ControlPanel;
