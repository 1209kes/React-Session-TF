import React from 'react';
import CircleButton from '../shared/CircleButton/CircleButton';
import { faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Input.module.css';

const Input = ({ value, onChange, placeholder, onSend }) => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSend();
        }
    };

    return (
        <div className={styles.inputContainer}>
            <CircleButton icon={faPlus} onClick={() => console.log('Plus clicked')} color="#333333" />
            <input
                type="text"
                value={value}
                onChange={onChange}
                className={styles.inputField}
                placeholder={placeholder}
                onKeyDown={handleKeyDown}
            />
            <CircleButton icon={faArrowRight} onClick={onSend} color="#9747FF" />
        </div>
    );
};
