import { Switch } from "@headlessui/react";
import styles from "./Switch.module.css";

const CustomSwitch = ({ enabled, onChange }) => {
    return (
        <Switch
            checked={enabled}
            onChange={onChange}
            className={`${styles.switch} ${enabled ? styles.switchEnabled : styles.switchDisabled}`}
        >
            <span className={styles.switchThumb} />
        </Switch>
    );
};

export default CustomSwitch;
