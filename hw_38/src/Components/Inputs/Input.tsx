import React from 'react';
import './Inputs.module.css';

interface InputProps {
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    error?: boolean;
}

const Input: React.FC<InputProps> = ({type, value, onChange, onFocus, disabled, error,}) => {
    return (
        <div className="input-container">
            <input
                type={type}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                disabled={disabled}
                placeholder="Введите текст"
                style={{ borderColor: error ? 'red' : '' }}
            />
        </div>
    );
};

export default Input;