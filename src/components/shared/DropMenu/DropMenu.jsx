import React from "react";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./DropMenu.module.css";

export default function DropMenu() {
    const navigate = useNavigate();
    const location = useLocation(); // 현재 경로 가져오기

    const handleTabChange = (path) => {
        navigate(path); // 지정된 경로로 이동
    };

    // 현재 경로와 탭 경로 매칭
    const tabs = [
        { label: "Home", path: "/" },
        { label: "Chat", path: "/chat" },
        { label: "Setting", path: "/setting" },
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
                                    location.pathname === tab.path
                                        ? `${styles.tab} ${styles.selected}`
                                        : styles.tab
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
}
