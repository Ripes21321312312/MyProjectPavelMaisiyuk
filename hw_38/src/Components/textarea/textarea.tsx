import React from 'react';
import './textarea.module.css';

interface TextareaProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({ value, onChange }) => {
    return (
        <div className="textarea-container">
            <div className="textarea-title">Text area</div>
            <textarea
                value={value}
                onChange={onChange}
                className="textarea-input"
                placeholder="Введите текст"
            />
        </div>
    );
};

export default Textarea;