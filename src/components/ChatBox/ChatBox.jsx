import React from 'react';
import styles from './ChatBox.module.css';

const ChatBox = ({ message, isUser }) => {
    return <div className={`${styles.chatBox} ${isUser ? styles.userMessage : styles.botMessage}`}>{message}</div>;
};

export default ChatBox;
