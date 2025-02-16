import React from "react";
import styles from "./Component.module.css";
import { showAlert } from "../../utils/Alert";

const ComponentPage = () => {
    const UserClick = () => {
        showAlert("안녕하세요! 유저 프로필입니다.");
    };

    const ChatClick = () => {
        showAlert("새로운 채팅을 시작할까요?");
    };

    return (
        <div className={styles.pageContainer}>
            <main className={styles.content}>Content goes here</main>
        </div>
    );
};

export default ComponentPage;
