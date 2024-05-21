import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCgpCbkuxRU_0yPAs9VTHS8Uio8JmDJg48";
const genAI = new GoogleGenerativeAI(API_KEY);

const Chat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initChat = async () => {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const chat = model.startChat({
          history: [
            {
              role: "user",
              text: "Hello, I have 2 dogs in my house.",
            },
            {
              role: "model",
              text: "Great to meet you. What would you like to know?",
            },
          ],
          generationConfig: {
            maxOutputTokens: 100,
          },
        });

        const result = await chat.sendMessage("How many paws are in my house?");
        const response = await result.response;
        const text = await response.text();

        setChatHistory([
          { role: "user", text: "How many paws are in my house?" },
          { role: "model", text },
        ]);
      } catch (error) {
        console.error("Error initializing chat:", error);
      }
    };

    initChat();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setIsLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const chat = model.startChat();

      const result = await chat.sendMessage(inputMessage);
      const response = await result.response;
      const text = await response.text();

      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { role: "user", text: inputMessage },
        { role: "model", text },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setInputMessage("");
    setIsLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Chat Input</h2>
      <div className="h-60 overflow-y-scroll mb-4 p-4 bg-gray-700 rounded-lg">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-3 rounded-lg ${
              message.role === "user"
                ? "bg-indigo-600 text-white text-right"
                : "bg-gray-600 text-white text-left"
            }`}
          >
            <strong>
              {message.role === "user" ? "User Prompt:" : "MediTech.ai:"}
            </strong>
            <hr className="my-2" />
            <ReactMarkdown>{message.text}</ReactMarkdown>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="flex">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 rounded-l-lg border border-gray-600 bg-gray-800 text-white focus:outline-none"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-r-lg transition-colors duration-300"
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Chat;
