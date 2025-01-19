import React, { useState } from 'react';
import CircleButton from '../shared/CircleButton/CircleButton';
import { faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Input.module.css';

const Input = () => {
    const [inputValue, setInputValue] = useState('');

    const handlePlusClick = () => {
        alert('다른 LLM과 대화하시겠습니까?');
    };

    const handleSendClick = () => {
        alert('AI에게 대화를 전송하였습니다');
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className={styles.inputContainer}>
            <CircleButton icon={faPlus} onClick={handlePlusClick} color="#333333" />
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className={styles.inputField}
                placeholder="Type your prompt here..."
            />
            <CircleButton icon={faArrowRight} onClick={handleSendClick} color="#9747FF" />
        </div>
    );
};

export default Input;
