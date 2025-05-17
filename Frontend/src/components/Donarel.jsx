import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Donarel = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef(null);

  useEffect(() => {
    if (!loading && messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setLoading(true);
    setInput("");

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDvzniL957UFnWfohzwQv0-m1Dj7IMyMpc",
        {
          contents: [
            {
              parts: [{ text: input }],
            },
          ],
        }
      );

      const text = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text;
      setMessages([
        ...newMessages,
        { from: "bot", text: text || "Nu am găsit un răspuns clar." },
      ]);
    } catch (error) {
      const failMsg =
        error.response?.status === 429
          ? "Prea multe cereri. Încearcă din nou peste câteva minute."
          : "A apărut o eroare. Încearcă mai târziu.";
      setMessages([...newMessages, { from: "bot", text: failMsg }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-xl p-4 w-[400px] h-[520px] flex flex-col"
    >
      <h2 className="text-red-600 font-bold text-xl mb-2">
        💬 Donărel, asistentul tău
      </h2>

      <div
        ref={messagesRef}
        className="bg-gray-100 p-3 rounded grow overflow-y-scroll flex flex-col space-y-2"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.from === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.from === "bot" && (
              <img
                src="/donarel-avatar.png"
                alt="Donărel"
                className="w-6 h-6 rounded-full mr-2 self-start mt-1"
              />
            )}
            <div
              className={`p-2 rounded-lg max-w-[80%] whitespace-pre-line ${
                msg.from === "user"
                  ? "bg-red-500 text-white"
                  : "bg-white text-black border"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Donărel scrie</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        )}
      </div>

      <div className="sticky bottom-0 bg-white mt-2">
        <input
          type="text"
          className="border p-2 w-full mb-2"
          placeholder="Întreabă-l pe Donărel..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-red-500 text-white w-full p-2 rounded hover:bg-red-600"
        >
          Trimite
        </button>
      </div>
    </motion.div>
  );
};

export default Donarel;
