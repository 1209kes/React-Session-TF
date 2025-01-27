import React from 'react';

import SideBar from '../../components/SideBar/SideBar';

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

    return <SideBar messages={messages} ChatClick={ChatClick} UserClick={UserClick}></SideBar>;
};

export default ChatPage;
