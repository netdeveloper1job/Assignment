import React from 'react';

interface VideoInputProps {
    id: string;
    label: string;
    sublabel?: string;
}

const VideoInput: React.FC<VideoInputProps> = ({ id, label, sublabel }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type="file" id={id} accept="video/*" />
    </div>
);

export default VideoInput;