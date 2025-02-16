import styles from "./MessageList.module.css";
import MessageItem from "../MessageItem/MessageItem";

const MessageList = ({ messages, setSelectedChat }) => {
    return (
        <div className={styles.messageList}>
            <div className={styles.messageTitle}>Recent Chats</div>
            {messages.map((message, index) => (
                <MessageItem key={index} message={message} onClick={() => setSelectedChat(index)} />
            ))}
        </div>
    );
};

export default MessageList;
