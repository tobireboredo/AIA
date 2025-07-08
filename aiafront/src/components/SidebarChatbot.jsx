import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // necesitas instalar lucide-react o usar íconos propios

const SidebarChatbot = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`transition-all duration-300 bg-[#F8F9FA] border-r border-gray-200 ${expanded ? 'w-64' : 'w-16'} h-screen flex flex-col`}>
      <button onClick={() => setExpanded(!expanded)} className="p-4 focus:outline-none">
        {expanded ? <X /> : <Menu />}
      </button>

      {expanded && (
        <div className="p-4">
          <p className="text-sm text-gray-700 mb-2">Conversaciones</p>
          <ul className="space-y-2">
            <li className="text-sm text-gray-600 cursor-pointer hover:text-black">Chat 1</li>
            <li className="text-sm text-gray-600 cursor-pointer hover:text-black">Chat 2</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SidebarChatbot;
