import React from 'react';

interface Option {
    reactKey: string;
    value: string;
    display: string;
}

interface CheckboxListProps {
    id: string;
    label: string;
    options: Option[];
}

const CheckboxList: React.FC<CheckboxListProps> = ({ id, label, options }) => (
    <div>
        <label>{label}</label>
        {options.map((option, index) => (
            <div key={index}>
                <input type="checkbox" id={`${id}-${option.reactKey}`} value={option.value} />
                <label htmlFor={`${id}-${option.reactKey}`}>{option.display}</label>
            </div>
        ))}
    </div>
);

export default CheckboxList;