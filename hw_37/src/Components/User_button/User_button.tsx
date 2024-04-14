
import styles from "./User.module.css";

const UserButton = ({ firstName, lastName }: { firstName: string, lastName: string }) => {
    const firstInitial = firstName.charAt(0);
    const lastInitial = lastName.charAt(0);

    return (
        <button className={styles.UserButton}>
            <div className={styles.icon}>
                {firstInitial}
                {lastInitial}
            </div>
            <span>{firstName} {lastName}</span>
        </button>
    );
};

export default UserButton;