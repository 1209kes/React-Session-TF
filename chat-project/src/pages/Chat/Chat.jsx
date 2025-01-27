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
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setInputValue(""); // 선택된 채팅이 바뀔 때 입력 필드 초기화
    }, [selectedChat]);

    // 메시지 전송
    const handleSendMessage = () => {
        if (!inputValue.trim()) {
            console.log("Empty input or no selected chat");
            return;
        }

        if (selectedChat === null) {
            // 새로운 채팅 내역 생성
            const newChatId = chatList.length + 1;
            const newChat = {
                chatId: newChatId,
                title: inputValue, // 입력된 내용을 제목으로 설정
                messages: [
                    {
                        sender: "user",
                        text: inputValue, // 입력된 메시지
                    },
                    {
                        sender: "bot",
                        text: "This is a bot response!", // 봇의 기본 응답
                    },
                ],
            };
    
            setChatList((prevChatList) => [...prevChatList, newChat]); // 새로운 채팅 추가
            setSelectedChat(newChatId); // 새로 생성된 채팅을 선택
            setInputValue(""); // 입력 필드 초기화
            console.log("New chat created:", newChat);
            return;
        }

        const userMessage = {
            sender: "user",
            text: inputValue,
        };

        setChatList((prevChatList) =>
            prevChatList.map((chat) =>
                chat.chatId === selectedChat // chatId로 매칭
                    ? { ...chat, messages: [...chat.messages, userMessage] }
                    : chat
            )
        );

        setInputValue(""); // 입력 필드 초기화
    };

    // 봇 응답
    useEffect(() => {
        if (!selectedChat) return;

        const selectedChatData = chatList.find((chat) => chat.chatId === selectedChat);

        if (!selectedChatData || selectedChatData.messages.length === 0) return;

        const lastMessage = selectedChatData.messages.slice(-1)[0];

        if (lastMessage.sender === "bot") return; // 봇 응답 중복 방지

        const timer = setTimeout(() => {
            const botMessage = {
                sender: "bot",
                text: "This is a bot response!",
            };

            setChatList((prevChatList) =>
                prevChatList.map((chat) =>
                    chat.chatId === selectedChat
                        ? { ...chat, messages: [...chat.messages, botMessage] }
                        : chat
                )
            );
        }, 1000);

        return () => clearTimeout(timer);
    }, [selectedChat, chatList]);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.headerSection}>
                    <Button label="Begin a New Chat" rightIcon={faPlus} onClick={()=>setSelectedChat(null)} />
                    <MessageList
                        setSelectedChat={(id) => setSelectedChat(id + 1)}
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
                        <h1 className={styles.chatTitle}>
                            {chatList.find((chat) => chat.chatId === selectedChat)?.title}
                        </h1>
                        {chatList
                            .find((chat) => chat.chatId === selectedChat)
                            ?.messages.map((message, messageIndex) => (
                                <ChatBox
                                    key={messageIndex}
                                    message={message.text}
                                    isUser={message.sender === "user"}
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
