import React from "react";
import CircleButton from "../shared/CircleButton/CircleButton";
import { faPlus, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Input.module.css";

const Input = ({ value, onChange, placeholder, onSend }) => {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            onSend(); // Enter 키 입력 시 전송
        }
    };

    return (
        <div className={styles.inputContainer}>
            {/* 플러스 버튼 */}
            <CircleButton icon={faPlus} onClick={() => console.log("Plus clicked")} color="#333333" />

            {/* 입력 필드 */}
            <input
                type="text"
                value={value}
                onChange={onChange}
                className={styles.inputField}
                placeholder={placeholder}
                onKeyDown={handleKeyDown} // Enter 키 처리
            />

            {/* 전송 버튼 */}
            <CircleButton icon={faArrowRight} onClick={onSend} color="#9747FF" />
        </div>
    );
};

export default Input;
