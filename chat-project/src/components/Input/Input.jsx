import React, { useState } from 'react';

const Input = ({ onSendMessage, onChangeModel }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                style={{ flex: 1, marginRight: '10px' }}
            />
            <button onClick={handleSendMessage} style={{ marginRight: '10px' }}>
                Send Message
            </button>
            <button onClick={onChangeModel}>
                Change LLM Model
            </button>
        </div>
    );
};

export default Input;