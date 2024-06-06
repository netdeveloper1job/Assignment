import React from 'react';

interface ImageInputProps {
  id: string;
  label: string;
  sublabel?: string;
}

const ImageInput: React.FC<ImageInputProps> = ({ id, label, sublabel }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input type="file" id={id} accept="image/*" />
  </div>
);

export default ImageInput;
