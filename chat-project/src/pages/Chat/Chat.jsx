import React, { useState, useEffect } from "react";
import Button from "../../components/shared/Button/Button";
import MessageList from "../../components/MessageList/MessageList";
import { faUser, faCog, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Chat.module.css";
import Header from "../../components/layout/Header/Header";
import Input from "../../components/Input/Input";
import chatHistory from "../../data/chatHistory.json";
import ChatBox from "../../components/ChatBox/ChatBox";
const ChatPage = () => {
    //랜더링 시 채팅 내역 불러오기
    const [chatList, setChatList] = useState([]);
    const [chatTitleList, setChatTitleList] = useState([]);
    useEffect(() => {
        setChatList(chatHistory);
    }, []);

    useEffect(() => {
        setChatTitleList(chatList.map((chat) => chat.title));
    }, [chatList]);

    //초기 상태 관리(채팅을 불렀는가?)
    const [selectedChat, setSelectedChat] = useState(null);
    //입력 필드 상태 관리
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setInputValue(""); // 선택된 채팅이 바뀔 때마다 입력 필드 초기화
    }, [selectedChat]);


    const handleSendMessage = () => {
        if (!inputValue.trim() || !selectedChat) return; // 빈 메시지나 선택된 채팅이 없으면 무시
    
        const userMessage = { 
            sender: "user", 
            text: inputValue, 
            timestamp: new Date().toLocaleTimeString() 
        };
    
        setChatList((prevChatList) =>
            prevChatList.map((chat) =>
                chat.id === selectedChat.id
                    ? { ...chat, messages: [...chat.messages, userMessage] }
                    : chat
            )
        );
        console.log(chatList)
        setInputValue(""); // 입력 필드 초기화
    };
    

    useEffect(() => {
        // selectedChat이 없거나 마지막 메시지가 사용자의 메시지가 아니면 응답하지 않음
        if (!selectedChat || !chatList.find((chat) => chat.id === selectedChat.id)?.messages.length) {
            return;
        }
    
        const lastMessage =
            chatList.find((chat) => chat.id === selectedChat.id)?.messages.slice(-1)[0];
    
        if (lastMessage.sender === "bot") return; // 마지막 메시지가 봇이면 무시
    
        const timer = setTimeout(() => {
            const botMessage = {
                sender: "bot",
                text: "This is a bot response!", // 봇의 응답
                timestamp: new Date().toLocaleTimeString(),
            };
    
            // 선택된 채팅에 봇 메시지 추가
            setChatList((prevChatList) =>
                prevChatList.map((chat) =>
                    chat.id === selectedChat.id
                        ? { ...chat, messages: [...chat.messages, botMessage] }
                        : chat
                )
            );
        }, 1000); // 챗봇 응답 대기 시간
    
        return () => clearTimeout(timer);
    }, [chatList, selectedChat]);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.headerSection}>
                    <Button label="Begin a New Chat" rightIcon={faPlus} />
                    <MessageList
                        setSelectedChat={setSelectedChat}
                        messages={chatTitleList}
                    />
                </div>
                <div className={styles.footerSection}>
                    <Button
                        label="User Profile"
                        leftIcon={faUser}
                        rightIcon={faCog}
                    />
                </div>
            </div>
            <div className={styles.chatSection}>
                <Header />
                {selectedChat === null ? (
                    <div className={styles.chatInit}>
                        <img src="/img/Logo.png" alt="" />
                        <h1 className={styles.initTitle}>
                            How can we{" "}
                            <span className={styles.gradientText}>assist</span>{" "}
                            you today?
                        </h1>
                        <h3 className={styles.initSubtitle}>
                            Get expert guidance powered by AI agents
                            specializing in Sales, Marketing, and Negotiation.
                            Choose the agent that suits your needs and start
                            your conversation with ease.
                        </h3>
                    </div>
                ) : (
                    <div className={styles.chatHistory}>
                        <h1 className={styles.chatTitle}>{chatList[selectedChat].title}</h1>
                                {chatList[selectedChat].messages.map((message, messageIndex) => (
                                    <ChatBox
                                        key={messageIndex}
                                        message={message.text}
                                        isUser={message.sender === "user"} // user인지 bot인지에 따라 다르게 렌더링
                                    />
                                ))}

                    </div>
                )}

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
