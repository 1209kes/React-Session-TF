import styles from "./MessageItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const MessageItem = ({ message, onClick }) => {
    return (
        <div className={styles.messageItem} onClick={onClick}>
            <FontAwesomeIcon icon={faMessage} className={styles.messageIcon} />
            <span className={styles.messageText}>{message}</span>
        </div>
    );
};

export default MessageItem;
