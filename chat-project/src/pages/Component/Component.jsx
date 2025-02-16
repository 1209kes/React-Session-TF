import React from "react";
import MessageList from "../../components/MessageList/MessageList";
import Button from "../../components/shared/Button/Button";
import { faPlus, faUser, faCog } from "@fortawesome/free-solid-svg-icons";
import styles from "./Component.module.css";
import { showAlert } from "../../utils/Alert";

const ComponentPage = () => {
    const messages = [
        "How can I increase the number of users?",
        "What's the best approach to handle errors?",
        "How can I improve my app's performance?",
        "What are the latest trends in web development?",
        "How can I learn advanced React patterns?",
    ];

    const UserClick = () => {
        showAlert("안녕하세요! 유저 프로필입니다.");
    };

    const ChatClick = () => {
        showAlert("새로운 채팅을 시작할까요?");
    };

    return (
        <div className={styles.ageContainer}>
            <main className={styles.content}>
                Content goes here
                <MessageList messages={messages} />
                <Button label="User Profile" onClick={UserClick} leftIcon={faUser} rightIcon={faCog} />
                <Button label="Begin a New Chat" onClick={ChatClick} rightIcon={faPlus} />
            </main>
        </div>
    );
};

export default ComponentPage;
