import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CircleButton.module.css';

const CircleButton = ({ icon, onClick, color }) => {
    return (
        <button className={styles.circleButton} onClick={onClick} style={{ backgroundColor: color }}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
};

export default CircleButton;
