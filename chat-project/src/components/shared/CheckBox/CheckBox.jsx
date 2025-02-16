import React from "react";
import { Checkbox } from "@headlessui/react";
import styles from "./Checkbox.module.css";

const CustomCheckbox = ({ checked, onChange, label }) => {
    return (
        <label className={styles.checkboxLabel}>
            <Checkbox
                checked={checked}
                onChange={onChange}
                className={`${styles.checkbox} ${checked ? styles.checked : ""}`}
            >
                {checked && <span className={styles.checkmark}>✔</span>}
            </Checkbox>
            <span className={styles.checkboxText}>{label}</span>
        </label>
    );
};

export default CustomCheckbox;
