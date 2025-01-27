import { Tab, TabGroup, TabList } from '@headlessui/react';
import styles from './DropMenu.module.css';

export default function DropMenu() {
    return (
        <div className={styles.container}>
            <div className={styles.tabWrapper}>
                <TabGroup>
                    <TabList className={styles.tabList}>
                        <Tab className={({ selected }) => (selected ? `${styles.tab} ${styles.selected}` : styles.tab)}>
                            {' '}
                            Home{' '}
                        </Tab>
                        <Tab className={({ selected }) => (selected ? `${styles.tab} ${styles.selected}` : styles.tab)}>
                            {' '}
                            Chat{' '}
                        </Tab>
                        <Tab className={({ selected }) => (selected ? `${styles.tab} ${styles.selected}` : styles.tab)}>
                            {' '}
                            Setting{' '}
                        </Tab>
                    </TabList>
                </TabGroup>
            </div>
        </div>
    );
}
