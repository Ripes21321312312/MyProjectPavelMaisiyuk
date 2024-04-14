
import styles from "./User.module.css";

const UserButton = ({ firstName, lastName }: { firstName: string, lastName: string }) => {
    // Получаем первую букву имени и фамилии
    const firstInitial = firstName.charAt(0);
    const lastInitial = lastName.charAt(0);

    return (
        <button className={styles.UserButton}> {/* Используйте стили из объекта styles */}
            <div className={styles.icon}>
                {/* Выводим иконку с первыми буквами имени и фамилии */}
                {firstInitial}
                {lastInitial}
            </div>
            <span>{firstName} {lastName}</span>
        </button>
    );
};

export default UserButton;