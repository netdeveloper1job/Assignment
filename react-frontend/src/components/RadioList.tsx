import React from 'react';

interface Option {
    reactKey: string;
    value: string;
    display: string;
}

interface RadioListProps {
    id: string;
    label: string;
    options: Option[];
}

const RadioList: React.FC<RadioListProps> = ({ id, label, options }) => (
    <div>
        <label>{label}</label>
        {options.map((option, index) => (
            <div key={index}>
                <input type="radio" id={`${id}-${option.reactKey}`} value={option.value} name={id} />
                <label htmlFor={`${id}-${option.reactKey}`}>{option.display}</label>
            </div>
        ))}
    </div>
);

export default RadioList;