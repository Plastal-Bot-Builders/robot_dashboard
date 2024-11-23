import React from 'react';
import styles from '../styles/components/CommunicationPanel.module.css';

const CommunicationPanel: React.FC = () => {
  return (
    <div className={styles.communicationPanel}>
      <h2>Communication</h2>
      <textarea placeholder="Type a message..."></textarea>
      <button>Send</button>
    </div>
  );
};

export default CommunicationPanel;
