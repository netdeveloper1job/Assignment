import React from 'react';

interface PDFInputProps {
    id: string;
    label: string;
    sublabel?: string;
}

const PDFInput: React.FC<PDFInputProps> = ({ id, label, sublabel }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type="file" id={id} accept=".pdf" />
    </div>
);

export default PDFInput;