import Button from '../../components/shared/Button/Button';
import MessageList from '../../components/MessageList/MessageList';
import { faUser, faCog, faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './SideBar.module.css';

const SideBar = ({ messages, ChatClick, UserClick, onSelectChat }) => {
    return (
        <div className={styles.container}>
            <div className={styles.headerSection}>
                <Button label="Begin a New Chat" onClick={ChatClick} rightIcon={faPlus} />
                <MessageList setSelectedChat={onSelectChat} messages={messages} />
            </div>
            <div className={styles.footerSection}>
                <Button label="User Profile" onClick={UserClick} leftIcon={faUser} rightIcon={faCog} />
            </div>
        </div>
    );
};

export default SideBar;
