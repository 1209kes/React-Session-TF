import React from 'react';
import { Tab, TabGroup, TabList } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import styles from './DropMenu.module.css';

export default function DropMenu() {
    const navigate = useNavigate();

    const handleTabChange = (path) => {
        navigate(path); // 지정된 경로로 이동
    };

    return (
        <div className={styles.container}>
            <div className={styles.tabWrapper}>
                <TabGroup>
                    <TabList className={styles.tabList}>
                        <Tab
                            className={({ selected }) =>
                                selected ? `${styles.tab} ${styles.selected}` : styles.tab
                            }
                            onClick={() => handleTabChange('/')}
                        >
                            Home
                        </Tab>
                        <Tab
                            className={({ selected }) =>
                                selected ? `${styles.tab} ${styles.selected}` : styles.tab
                            }
                            onClick={() => handleTabChange('/chat')}
                        >
                            Chat
                        </Tab>
                        <Tab
                            className={({ selected }) =>
                                selected ? `${styles.tab} ${styles.selected}` : styles.tab
                            }
                            onClick={() => handleTabChange('/setting')}
                        >
                            Setting
                        </Tab>
                    </TabList>
                </TabGroup>
            </div>
        </div>
    );
}
