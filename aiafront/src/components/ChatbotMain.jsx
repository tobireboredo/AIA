import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import logo from "../png/AIA_logo.png"

export default function ChatbotMain({ sidebarWidth }) {  // 👈 recibe la prop
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "¡Hola! Soy tu asistente 🤖 ¿En qué te ayudo?" },
    { id: 2, sender: "user", text: "Hola! Quiero probar el chatbot." },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessage = { id: Date.now(), sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "bot", text: "Respuesta automática mock." },
      ]);
    }, 1000);

    setInput("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="fixed top-0 z-50 h-screen flex flex-col bg-gray-50/95 backdrop-blur-sm rounded-2xl shadow-lg"
      style={{
        left: sidebarWidth,                    // 👈 se adapta
        width: `calc(100% - ${sidebarWidth}px)` // 👈 se adapta
      }}
    >
      {/* Logo */}
      <div className="flex justify-center py-6">
        <img src={logo} alt="Logo" className="w-24 h-24 object-contain" />
      </div>

      {/* Chat */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl shadow ${
                  msg.sender === "user"
                    ? "bg-indigo-600 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-900 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t flex items-center gap-2 bg-white/80 backdrop-blur-sm">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Escribe un mensaje..."
            className="flex-1 p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
