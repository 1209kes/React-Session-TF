import React, { useState, useEffect } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import styles from './Chat.module.css';
import Header from '../../components/layout/Header/Header';
import Input from '../../components/Input/Input';
import ChatPanel from '../../components/ChatPanel/ChatPanel';
import { createNewChat, addUserMessageToChat, addBotMessageToChat } from '../../utils/chatUtils';

const ChatPage = () => {
    const [chatList, setChatList] = useState([]);
    const [chatTitleList, setChatTitleList] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setChatTitleList(chatList.map((chat) => chat.title));
    }, [chatList]);

    useEffect(() => {
        setInputValue('');
    }, [selectedChat]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        let updatedList;

        if (selectedChat === null) {
            const newChatData = createNewChat(chatList, inputValue);
            updatedList = [...chatList, newChatData];
            setChatList(updatedList);
            setSelectedChat(newChatData.chatId);
        } else {
            updatedList = addUserMessageToChat(chatList, selectedChat, inputValue);
            setChatList(updatedList);
        }

        setInputValue('');

        const response = await getChatResponse(inputValue);

        const finalChatId = selectedChat ?? updatedList.length;
        const updatedWithBot = addBotMessageToChat(updatedList, finalChatId, response);

        setChatList(updatedWithBot);
    };

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
