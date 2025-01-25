import React from 'react';
import Button from '../../components/shared/Button/Button';
import MessageList from '../../components/MessageList/MessageList';
import { faUser, faCog, faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './Chat.module.css';

const ChatPage = () => {
    const messages = [
        'How can I increase the number of users?',
        "What's the best approach to handle errors?",
        "How can I improve my app's performance?",
        'What are the latest trends in web development?',
        'How can I learn advanced React patterns?',
    ];

    const ChatClick = () => {
        alert('새로운 채팅을 시작할까요?');
    };

    const UserClick = () => {
        alert('안녕하세요! 유저 프로필입니다.');
    };

    return (
        <div className={styles.container}>
            <div className={styles.headerSection}>
                <Button label="Begin a New Chat" onClick={ChatClick} rightIcon={faPlus} />
                <MessageList messages={messages} />
            </div>
            <div className={styles.footerSection}>
                <Button label="User Profile" onClick={UserClick} leftIcon={faUser} rightIcon={faCog} />
            </div>
        </div>
    );
};

export default ChatPage;
