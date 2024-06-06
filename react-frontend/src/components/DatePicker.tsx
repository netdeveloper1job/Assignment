import React from 'react';

interface DatePickerProps {
    id: string;
    label: string;
    sublabel?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ id, label, sublabel }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type="date" id={id} />
    </div>
);

export default DatePicker;