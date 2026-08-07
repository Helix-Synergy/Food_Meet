import React from 'react';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import helixVideo from '../../assets/videos/Helix.mp4';

const ChatHeader = ({ onClose, onMinimize, isMinimized }) => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white rounded-t-2xl shadow-md">
      <div className="flex items-center space-x-3">
        <video 
          src={helixVideo} 
          className="w-11 h-11 rounded-full object-cover object-top shadow-inner border border-white/30 bg-white shadow-lg shadow-white/10" 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
        <div>
          <h3 className="font-semibold text-lg leading-tight">Helix Assistant</h3>
          <p className="text-xs text-blue-200">Online | Ready to help</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button 
          onClick={onMinimize}
          className="p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
        >
          <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${isMinimized ? 'rotate-180' : ''}`} />
        </button>
        {/* Optional close button if you want users to completely dismiss it */}
        <button 
          onClick={onClose}
          className="p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close chat"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
