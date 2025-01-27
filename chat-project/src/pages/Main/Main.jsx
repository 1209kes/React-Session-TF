import React from "react";
import { showAlert } from "../../utils/Alert";
import styles from "./Main.module.css";
import Header from "../../components/layout/Header/Header";
import Button from "../../components/shared/Button/Button";

const Main = () => {

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.textContainer}>
                <h1>Walk through the world with us</h1>
                <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus imperdiet sed id elementum. Quam vel aliquam sit
                    vulputate. Faucibus nec gravida ipsum pulvinar vel.
                </h3>
                <Button
                    label="Get Started"
                    borderRadius="40px"
                    justifyContent="center"
                    fontSize="1.2rem"
                />
            </div>
        </div>
    );
};

export default Main;
