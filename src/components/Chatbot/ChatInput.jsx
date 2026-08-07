import React, { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const ChatInput = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-200">
      <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all shadow-inner">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 bg-transparent focus:outline-none text-sm text-gray-700 placeholder-gray-400"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          disabled={!message.trim() || isLoading}
          className={`p-1.5 rounded-full flex items-center justify-center transition-colors ${
            message.trim() && !isLoading 
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md transform hover:scale-105' 
              : 'bg-gray-200 text-gray-400'
          }`}
        >
          <PaperAirplaneIcon className="w-4 h-4 -rotate-45 ml-0.5" />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
