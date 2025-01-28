import React from 'react';
import ChatBox from '../../components/ChatBox/ChatBox';
import styles from './ChatPanel.module.css';

const ChatPanel = ({ selectedChat, chatList }) => {
    if (selectedChat === null) {
        return (
            <div className={styles.chatInit}>
                <img src="/img/Logo.png" alt="" />
                <h1 className={styles.initTitle}>
                    How can we <span className={styles.gradientText}>assist</span> you today?
                </h1>
                <h3 className={styles.initSubtitle}>
                    Get expert guidance powered by AI agents specializing in Sales, Marketing, and Negotiation. Choose
                    the agent that suits your needs and start your conversation with ease.
                </h3>
            </div>
        );
    }

    const currentChat = chatList.find((chat) => chat.chatId === selectedChat);

    return (
        <div className={styles.chatHistory}>
            <h1 className={styles.chatTitle}>{currentChat?.title}</h1>
            {currentChat?.messages.map((message, messageIndex) => (
                <ChatBox key={messageIndex} message={message.text} isUser={message.sender === 'user'} />
            ))}
        </div>
    );
};

export default ChatPanel;
