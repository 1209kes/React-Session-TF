import React, { useState, useEffect } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import styles from './Chat.module.css';
import Header from '../../components/layout/Header/Header';
import Input from '../../components/Input/Input';
import chatHistory from '../../data/chatHistory.json';
import ChatPanel from '../../components/ChatPanel/ChatPanel';
import { createNewChat, addUserMessageToChat, addBotMessageToChat } from '../../utils/chatUtils';

const ChatPage = () => {
    // 채팅 내역 불러오기
    const [chatList, setChatList] = useState([]);
    const [chatTitleList, setChatTitleList] = useState([]);

    useEffect(() => {
        setChatList(chatHistory); // 초기 채팅 내역 설정
    }, []);

    useEffect(() => {
        // 채팅 제목 리스트 업데이트
        setChatTitleList(chatList.map((chat) => chat.title));
    }, [chatList]);

    // 초기 상태 관리
    const [selectedChat, setSelectedChat] = useState(null);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputValue(''); // 선택된 채팅이 바뀔 때 입력 필드 초기화
    }, [selectedChat]);

    // 메시지 전송
    const handleSendMessage = () => {
        if (!inputValue.trim()) {
            console.log('Empty input or no selected chat');
            return;
        }

        // 새로운 채팅 내역 생성
        if (selectedChat === null) {
            const newChatData = createNewChat(chatList, inputValue);
            setChatList((prevChatList) => [...prevChatList, newChatData]); // 새로운 채팅 추가
            setSelectedChat(newChatData.chatId); // 새로 생성된 채팅을 선택
            setInputValue(''); // 입력 필드 초기화
            console.log('New chat created:', newChatData);
            return;
        }

        // 이미 존재하는 채팅에 사용자 메시지 추가
        const updatedList = addUserMessageToChat(chatList, selectedChat, inputValue);
        setChatList(updatedList);
        setInputValue(''); // 입력 필드 초기화
    };

    // 봇 응답
    useEffect(() => {
        if (!selectedChat) return;

        const selectedChatData = chatList.find((chat) => chat.chatId === selectedChat);

        if (!selectedChatData || selectedChatData.messages.length === 0) return;

        const lastMessage = selectedChatData.messages.slice(-1)[0];

        if (lastMessage.sender === 'bot') return; // 봇 응답 중복 방지

        const timer = setTimeout(() => {
            const botMessage = 'This is a bot response!';
            const updatedList = addBotMessageToChat(chatList, selectedChat, botMessage);
            setChatList(updatedList);
        }, 1000);

        return () => clearTimeout(timer);
    }, [selectedChat, chatList]);

    const handleNewChat = () => {
        setSelectedChat(null);
    };

    const handleSelectChat = (index) => {
        setSelectedChat(index + 1);
    };

    return (
        <>
            <div className={styles.container}>
                <SideBar messages={chatTitleList} ChatClick={handleNewChat} onSelectChat={handleSelectChat} />
            </div>
            <div className={styles.chatSection}>
                <Header />
                <ChatPanel selectedChat={selectedChat} chatList={chatList} />
                <div className={styles.inputContainer}>
                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your message..."
                        onSend={handleSendMessage}
                    />
                </div>
            </div>
        </>
    );
};

export default ChatPage;
