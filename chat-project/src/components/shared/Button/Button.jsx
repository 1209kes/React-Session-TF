import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.css';

const Button = ({ label, onClick, leftIcon, rightIcon, iconColor }) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <span className={styles.label}>
                {leftIcon && <FontAwesomeIcon icon={leftIcon} className={styles.icon} />}
                {label}
            </span>
            {rightIcon && <FontAwesomeIcon icon={rightIcon} className={styles.icon} />}
        </button>
    );
};

export default Button;
