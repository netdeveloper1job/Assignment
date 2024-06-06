import React from 'react';

interface TextInputProps {
    id: string;
    label: string;
    sublabel?: string;
    placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ id, label, sublabel, placeholder }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} placeholder={placeholder} />
    </div>
);

export default TextInput;
