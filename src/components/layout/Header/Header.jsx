import React from "react";
import styles from "./Header.module.css";
import Switch from "../../shared/Swtich/Switch";
import DropMenu from "../../shared/DropMenu/DropMenu";
const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src="/img/Logo.png" alt="" className={styles.logo} />
            </div>
            <div className={styles.center}>
                <DropMenu />
            </div>
            <div className={styles.right}></div>
        </div>
    );
};

export default Header;
