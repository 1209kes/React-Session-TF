import styles from './MessageList.module.css';
import MessageItem from '../MessageItem/MessageItem';

const MessageList = ({ messages, setSelectedChat }) => {
    return (
        <div className={styles['message-list']}>
            <div className={styles['message-title']}>Recent Chats</div>
            {messages.map((message, index) => (
                <MessageItem key={index} message={message} onClick={() => setSelectedChat(index)} />
            ))}
        </div>
    );
};

export default MessageList;
