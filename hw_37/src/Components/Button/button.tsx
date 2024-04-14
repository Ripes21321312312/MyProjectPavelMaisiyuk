import { FC, useState } from "react";
import styles from "./Button.module.css";

interface IButtonProps {
    isActive: boolean;
    handleClick: () => void;
}

const Button: FC<IButtonProps> = ({ isActive, handleClick }) => {

    const [isActiveButton, setIsActiveButton] = useState(isActive);

    const handleClickButton = () => {
        handleClick();

        setIsActiveButton(!isActiveButton);
    };

    return (
        <button
            onClick={handleClickButton}
            className={`${styles.button} ${isActiveButton ? styles.active : ""}`}
        >
            {isActiveButton ? "Button Active" : "Button"}
        </button>
    );
};

export default Button;