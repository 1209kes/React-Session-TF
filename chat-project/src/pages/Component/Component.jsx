import React, { useState } from 'react';
import Button from '../../components/shared/Button/Button';
import MessageList from '../../components/MessageList/MessageList';
import CustomCheckbox from '../../components/shared/CheckBox/CheckBox';
import CustomSwitch from '../../components/shared/Swtich/Switch';
import Input from '../../components/Input/Input';
import DropMenu from '../../components/shared/DropMenu/DropMenu';
import { faUser, faCog, faPlus } from '@fortawesome/free-solid-svg-icons';
import { showAlert } from '../../utils/Alert';
import styles from './Component.module.css';
import ChatBox from '../../components/ChatBox/ChatBox';

const ComponentPage = () => {
    const messages = [
        'How can I increase the number of users?',
        "What's the best approach to handle errors?",
        "How can I improve my app's performance?",
        'What are the latest trends in web development?',
        'How can I learn advanced React patterns?',
    ];

    // useState로 checkbox의 상태 관리
    const [checkboxChecked, setcheckboxChecked] = useState(false);
    const handleCheckboxChange = (isChecked) => {
        setcheckboxChecked(isChecked); // 상태 업데이트
        console.log('Checkbox is now:', isChecked);
    };

    // useState로 Switch의 상태 관리
    const [switchEnabled, setSwitchEnabled] = useState(false);

    const handleSwitchChange = (isEnabled) => {
        setSwitchEnabled(isEnabled); // 상태 업데이트
        console.log('Switch is now:', isEnabled);
    };

    const UserClick = () => {
        showAlert('안녕하세요! 유저 프로필입니다.');
    };

    const ChatClick = () => {
        showAlert('새로운 채팅을 시작할까요?');
    };

    const StartClick = () => {
        showAlert('시작하기!');
    };

    return (
        <div className={styles['page-container']}>
            <main className={styles.content}>
                <Button label="User Profile" onClick={UserClick} />
                <Button label="Begin a New Chat" onClick={ChatClick} />
                <Button label="User Profile" onClick={UserClick} leftIcon={faUser} rightIcon={faCog} />
                <Button label="Begin a New Chat" onClick={ChatClick} rightIcon={faPlus} />
                <MessageList messages={messages} />
                <CustomCheckbox
                    checked={checkboxChecked}
                    onChange={handleCheckboxChange}
                    label="Big Kahuna Burger Ltd."
                />
                <CustomSwitch enabled={switchEnabled} onChange={handleSwitchChange} />
                <Input />
                <Button
                    label="Get Started"
                    onClick={StartClick}
                    borderRadius="40px"
                    justifyContent="center"
                    fontSize="1.2rem"
                />
                <DropMenu></DropMenu>
                <ChatBox message="1313" isUser={false}></ChatBox>
                <ChatBox message="1313" isUser={true}></ChatBox>
            </main>
        </div>
    );
};

export default ComponentPage;
