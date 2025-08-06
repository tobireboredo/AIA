import React from 'react';

const ChatbotMain = () => {
  return (
    <main className="flex-1 p-6 bg-gray-100 overflow-auto">
      <div className="bg-white p-4 rounded shadow h-full">
        <h2 className="text-lg font-medium mb-4">Bienvenido al Chatbot</h2>
        {/* Aquí puedes integrar tu lógica de chatbot */}
        <p>Escribe algo para comenzar la conversación.</p>
      </div>
    </main>
  );
};

export default ChatbotMain;
