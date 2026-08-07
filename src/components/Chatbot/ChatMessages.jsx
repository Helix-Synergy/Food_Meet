import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const ChatMessages = ({ messages, isLoading, onSendMessage }) => {
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleNavigation = (link) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      navigate(link);
    }
  };

  const markdownComponents = {
    p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
    a: ({node, ...props}) => <a className="text-blue-600 hover:text-blue-800 underline underline-offset-2 font-medium" target="_blank" rel="noopener noreferrer" {...props} />,
    ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-2 space-y-1" {...props} />,
    ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-2 space-y-1" {...props} />,
    li: ({node, ...props}) => <li {...props} />,
    strong: ({node, ...props}) => <strong className="font-semibold text-gray-900" {...props} />,
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300">
      {messages.length === 0 && (
        <div className="text-center text-gray-500 mt-10 text-sm">
          Hi! I can help you navigate the Helix Conferences website. How can I assist you today?
        </div>
      )}
      
      {messages.map((msg, idx) => (
        <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div 
            className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm ${
              msg.sender === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
            }`}
          >
            <div className="whitespace-pre-wrap leading-relaxed break-words">
              {msg.sender === 'bot' ? (
                <ReactMarkdown components={markdownComponents}>
                  {msg.text}
                </ReactMarkdown>
              ) : (
                <p>{msg.text}</p>
              )}
            </div>

            {/* Render FAQ options if present */}
            {msg.quickOptions && (
              <div className="mt-3 flex flex-wrap gap-2">
                {msg.quickOptions.map((opt, i) => (
                  <button 
                    key={i}
                    onClick={() => onSendMessage(opt)}
                    className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 py-1.5 px-3 rounded-full font-medium transition-colors text-xs text-left"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* Render a navigation link button if present */}
            {msg.buttonText && msg.link && (
              <button 
                onClick={() => handleNavigation(msg.link)}
                className="mt-3 w-full bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 py-2 px-4 rounded-xl font-medium transition-colors text-xs"
              >
                {msg.buttonText}
              </button>
            )}
          </div>
        </div>
      ))}

      {isLoading && (
        <div className="flex justify-start">
          <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none p-4 shadow-sm flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
