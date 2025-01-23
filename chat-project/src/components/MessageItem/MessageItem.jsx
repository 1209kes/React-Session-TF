import styles from './MessageItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

const MessageItem = ({ message }) => {
    return (
        <div className={styles['message-item']}>
            <FontAwesomeIcon icon={faMessage} className={styles['message-icon']} />
            <span className={styles['message-text']}>{message}</span>
        </div>
    );
};

export default MessageItem;
