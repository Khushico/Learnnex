import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors">
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default ChatButton;