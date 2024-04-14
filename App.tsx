import { useState } from "react";
import "./App.css";
import Button from "./Components/Button/button.tsx";
import UserButton from "./Components/User_button/User_button.tsx";
import Title from './Components/Title/Title.tsx';
import HamburgerMenu from './Components/HumburgerMenu/HamburgerMenu.tsx';

function App() {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <div className="App">
                <HamburgerMenu />
            </div>

            <div className="App">
                <Title />
            </div>
            <Button isActive={isActive} handleClick={handleClick} />
            <div className="App">
                <UserButton firstName="Artem" lastName="Malkin" />
            </div>
        </>
    );
}

export default App;