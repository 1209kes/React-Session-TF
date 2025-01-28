import React from 'react';
import { Tab, TabGroup, TabList } from '@headlessui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './DropMenu.module.css';

const DropMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleTabChange = (path) => {
        navigate(path);
    };

    const tabs = [
        { label: 'Home', path: '/component' },
        { label: 'Chat', path: '/chat' },
        { label: 'Setting', path: '/setting' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.tabWrapper}>
                <TabGroup>
                    <TabList className={styles.tabList}>
                        {tabs.map((tab) => (
                            <Tab
                                key={tab.path}
                                className={({ selected }) =>
                                    location.pathname === tab.path ? `${styles.tab} ${styles.selected}` : styles.tab
                                }
                                onClick={() => handleTabChange(tab.path)}
                            >
                                {tab.label}
                            </Tab>
                        ))}
                    </TabList>
                </TabGroup>
            </div>
        </div>
    );
};

export default DropMenu;
