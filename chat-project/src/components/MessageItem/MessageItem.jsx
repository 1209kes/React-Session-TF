import styles from './MessageItem.module.css';

const MessageItem = ({ message }) => {
    return (
        <div className={styles['message-item']}>
            <span className={styles['message-text']}>{message}</span>
        </div>
    );
};

export default MessageItem;
