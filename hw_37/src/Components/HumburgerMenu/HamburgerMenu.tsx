import  { useState } from 'react';
import './Hamburger.module.css';

const HamburgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="hamburger-menu">
            <div className="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <span>&#10005;</span>
                ) : (
                    <span>&#9776;</span>
                )}
            </div>
            {isMenuOpen && (
                <div className="menu-items">
                    <ul>
                        <li>Бургеры</li>
                        <li>Пиццы</li>
                        <li>Роллы</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;