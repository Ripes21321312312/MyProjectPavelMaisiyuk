import { FC } from "react";
import styles from "./Button.module.css";

interface IButtonProps {
    isActive: boolean; // Use lowercase for boolean
    handleClick: () => void;
}

const Button: FC<IButtonProps> = ({ isActive, handleClick }) => {
    return (
        <button
            onClick={handleClick} // Moved onClick outside of button element
            className={`${styles.button} ${isActive ? styles.active : ""}`}
        >
            Button
        </button>
    );
};

export default Button;