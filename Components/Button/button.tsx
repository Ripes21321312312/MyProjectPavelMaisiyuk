import { FC } from "react";
import styles from "./Button.module.css";

interface IButtonProps {
    isActive: boolean; 
    handleClick: () => void;
}

const Button: FC<IButtonProps> = ({ isActive, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className={`${styles.button} ${isActive ? styles.active : ""}`}
        >
            Button
        </button>
    );
};

export default Button;
