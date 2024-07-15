import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './FashionChatbot.css';

const FashionChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '' || isLoading) return;

    setIsLoading(true);
    const newMessages = [...messages, { text: input, user: true }];
    setMessages(newMessages);
    setInput('');

    try {
      const adviceResponse = await axios.post('/api/fashion-advice', { query: input });
      const advice = adviceResponse.data.advice;

      let imageUrl = null;
      if (input.toLowerCase().includes('outfit') || input.toLowerCase().includes('wear')) {
        const imageResponse = await axios.post('/api/generate-image', { prompt: input });
        imageUrl = imageResponse.data.image_url;
      }

      setMessages([...newMessages, {
        text: advice,
        user: false,
        image: imageUrl
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([...newMessages, {
        text: error.response?.data?.error || "Sorry, I couldn't process that request.",
        user: false
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user ? 'user' : 'bot'}`}>
            <p>{message.text}</p>
            {message.image && <img src={message.image} alt="Generated outfit" className="generated-image" />}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="chatbot-input-form">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask about fashion or describe an outfit..."
          className="chatbot-input"
          disabled={isLoading}
        />
        <button type="submit" className="chatbot-submit" disabled={isLoading}>
          {isLoading ? 'Thinking...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default FashionChatbot;
