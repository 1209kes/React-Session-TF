import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.css';

const Button = ({ label, onClick, leftIcon, rightIcon, borderRadius, justifyContent, fontSize }) => {
    const labelStyle = {
        justifyContent: justifyContent || 'left',
        fontSize: fontSize || '0.8rem',
    };

    const buttonStyle = {
        borderRadius: borderRadius || '15px',
    };

    return (
        <button onClick={onClick} className={styles.button} style={buttonStyle}>
            <span className={styles.label} style={labelStyle}>
                {leftIcon && <FontAwesomeIcon icon={leftIcon} className={styles.icon} />}
                {label}
            </span>
            {rightIcon && <FontAwesomeIcon icon={rightIcon} className={styles.icon} />}
        </button>
    );
};

export default Button;
