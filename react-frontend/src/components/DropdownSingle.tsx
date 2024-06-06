import React from 'react';

interface Option {
    reactKey: string;
    value: string;
    display: string;
}

interface DropdownSingleProps {
    id: string;
    label: string;
    options: Option[];
}

const DropdownSingle: React.FC<DropdownSingleProps> = ({ id, label, options }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <select id={id}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.display}
                </option>
            ))}
        </select>
    </div>
);

export default DropdownSingle;