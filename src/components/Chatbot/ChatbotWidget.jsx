import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import ChatbotForm from './ChatbotForm';
import QuickActionButtons from './QuickActionButtons';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import helixVideo from '../../assets/videos/Helix.mp4';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const videoRef = React.useRef(null);

  const [isMuted, setIsMuted] = useState(true);

  React.useEffect(() => {
    const handleInteraction = () => {
      if (videoRef.current && !hasPlayed) {
        // setIsMuted(false);
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
        setHasPlayed(true);
      }
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [hasPlayed, isOpen]);

  React.useEffect(() => {
    const savedState = localStorage.getItem('chatbotFormSubmitted');
    if (savedState === 'true') {
      setIsFormSubmitted(true);
    }
  }, []);

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
    localStorage.setItem('chatbotFormSubmitted', 'true');
  };


  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const handleSendMessage = async (text) => {
    // Add user message to state
    const userMsg = { sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    if (text === "FAQs") {
      setIsLoading(false);
      const botMsg = {
        sender: 'bot',
        text: 'Here are some frequently asked questions. Please select one:',
        quickOptions: [
          "How do I register?",
          "How to submit an abstract?",
          "What is the ticket pricing?",
          "Contact support",
          "Download brochure",
          "Travel and accommodation",
          "Are there any discounts?"
        ]
      };
      setMessages(prev => [...prev, botMsg]);
      return;
    }

    try {
      const apiUrl = process.env.REACT_APP_BACKEND_URL || process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${apiUrl}/api/chatbot`, { message: text });
      
      const botMsg = {
        sender: 'bot',
        text: response.data.response,
        buttonText: response.data.buttonText,
        link: response.data.link
      };
      
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { sender: 'bot', text: 'Sorry, I am having trouble connecting right now. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="flex flex-col items-end gap-4"
          >
            {/* Avatar Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleChat}
              className="w-32 h-32 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-300 relative"
              aria-label="Open Chat"
            >
              <video 
                ref={videoRef}
                src={helixVideo} 
                className="w-full h-full object-cover rounded-full p-0.5 bg-white" 
                style={{ objectPosition: '50% 25%' }}
                autoPlay
                muted={true}
                playsInline 
              />
              <span className="absolute top-2 right-2 w-6 h-6 bg-green-500 border-2 border-white rounded-full shadow-sm"></span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className={`flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden origin-bottom-right transition-all duration-300 ${
              isMinimized ? 'w-80 h-16' : 'w-80 sm:w-96 h-[500px] max-h-[80vh]'
            }`}
          >
            <ChatHeader 
              onClose={() => setIsOpen(false)} 
              onMinimize={() => setIsMinimized(!isMinimized)} 
              isMinimized={isMinimized} 
            />
            
            {!isMinimized && (
              <>
                {!isFormSubmitted ? (
                  <ChatbotForm onFormSubmit={handleFormSubmit} />
                ) : (
                  <>
                    <ChatMessages messages={messages} isLoading={isLoading} onSendMessage={handleSendMessage} />
                    <QuickActionButtons onActionClick={handleSendMessage} disabled={isLoading} />
                    <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
                  </>
                )}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatbotWidget;
