import React, { useState } from 'react';
import Input from './Components/Inputs/Input.tsx';
import Textarea from './Components/textarea/textarea.tsx';

const App: React.FC = () => {
    const [textInput, setTextInput] = useState({
        default: '',
        focus: '',
        active: '',
        disabled: '',
        error: '',
    });

    const [textareaInput, setTextareaInput] = useState('');

    const handleTextChange = (inputType: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput({ ...textInput, [inputType]: event.target.value });
    };

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaInput(event.target.value);
    };

    return (
        <div>
            <Input
                type="text"
                value={textInput.default}
                onChange={handleTextChange('default')}
            />
            <Input
                type="text"
                value={textInput.focus}
                onChange={handleTextChange('focus')}
            />
            <Input
                type="text"
                value={textInput.active}
                onChange={handleTextChange('active')}
                onFocus={(e) => e.target.select()}
            />
            <Input
                type="text"
                value={textInput.disabled}
                onChange={handleTextChange('disabled')}
                disabled
            />
            <Input
                type="text"
                value={textInput.error}
                onChange={handleTextChange('error')}
                error
            />
            <Textarea
                value={textareaInput}
                onChange={handleTextareaChange}
            />
        </div>
    );
};

export default App;