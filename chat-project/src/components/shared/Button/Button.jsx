import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Button.module.css";

const Button = ({ label, onClick, leftIcon, rightIcon }) => {
    return (
        <button onClick={onClick} className={styles.button}>
            {leftIcon && <FontAwesomeIcon icon={leftIcon} className={styles.icon} />}
            <span className={styles.label}>{label}</span>
            {rightIcon && <FontAwesomeIcon icon={rightIcon} className={styles.icon} />}
        </button>
    );
};

export default Button;
