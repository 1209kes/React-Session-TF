import React, { useState } from 'react';
import styles from './Input.module.css';

const Input = ({ onSendMessage, onChangeModel }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message.trim()) {
            alert('Message sent: ' + message);
            onSendMessage(message);
            setMessage('');
        }
    };

    const handleChangeModel = () => {
        alert('Changing LLM Model');
        onChangeModel();
    };

    return (
        <div className={styles.inputContainer}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className={styles.inputField}
            />
            <button onClick={handleSendMessage} className={styles.sendButton}>
                Send Message
            </button>
            <button onClick={handleChangeModel}>
                Change LLM Model
            </button>
        </div>
    );
};

export default Input;