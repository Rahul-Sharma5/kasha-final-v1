
import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';
import { XIcon } from './Icons';

interface ChatbotProps {
  closeChatbot: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ closeChatbot }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', parts: [{ text: "Hello! I am the KaSha Assistant. How can I help you plan your perfect event today?" }] }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const getSimpleResponse = (text: string): string => {
    const lowerInput = text.toLowerCase();
    
    if (lowerInput.includes('wedding')) {
      return "We specialize in luxury weddings! From destination weddings in Goa and Udaipur to royal celebrations, we handle every detail including venue selection, decor, and guest management. Would you like to schedule a consultation?";
    }
    if (lowerInput.includes('corporate') || lowerInput.includes('business')) {
      return "Our corporate event services are top-notch. We handle conferences, product launches, galas, and offsites. We focus on reflecting your brand's prestige. How can we assist with your next corporate event?";
    }
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('rate')) {
      return "Our pricing depends on the scale and requirements of your event. You can check our Cost Calculator page for a rough estimate, or contact us directly for a personalized quote.";
    }
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone') || lowerInput.includes('call')) {
      return "You can reach us at info@kasha.co.in or call us at +91 9810987169. Our team is available to discuss your requirements.";
    }
    if (lowerInput.includes('location') || lowerInput.includes('where')) {
      return "We are based in Delhi but operate on a Pan-India level, managing events in major cities like Mumbai, Goa, Udaipur, Jaipur, and Bangalore.";
    }
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return "Hello there! How can I assist you with your event planning needs today?";
    }

    return "Thank you for your message! I am an automated assistant and might not have the answer to that specific question. Please reach out to our team at info@kasha.co.in for detailed inquiries, or use the Contact form on our website.";
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', parts: [{ text: input }] };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate network delay for natural feel
    setTimeout(() => {
      const responseText = getSimpleResponse(userMessage.parts[0].text);
      const modelMessage: ChatMessage = { role: 'model', parts: [{ text: responseText }] };
      setMessages(prev => [...prev, modelMessage]);
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4 bg-black/50" onClick={closeChatbot}>
      <div className="relative w-full max-w-md h-[70vh] flex flex-col bg-brand-light dark:bg-brand-dark rounded-lg shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        <header className="p-4 flex justify-between items-center bg-brand-light-gray dark:bg-brand-gray border-b border-gray-200 dark:border-gray-700">
          <h3 className="font-heading text-lg font-bold">
            Ka<span className="text-brand-gold">Sha</span> Assistant
          </h3>
          <button onClick={closeChatbot} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
            <XIcon />
          </button>
        </header>
        
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="flex flex-col gap-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-sm rounded-lg px-4 py-2 ${msg.role === 'user' ? 'bg-brand-gold text-brand-dark rounded-br-none' : 'bg-brand-light-gray dark:bg-brand-gray rounded-bl-none'}`}>
                  <p className="text-sm">{msg.parts[0].text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-sm rounded-lg px-4 py-2 bg-brand-light-gray dark:bg-brand-gray rounded-bl-none">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse [animation-delay:0.4s]"></div>
                    </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <form onSubmit={handleSend} className="p-4 border-t border-gray-200 dark:border-gray-700 bg-brand-light-gray dark:bg-brand-gray">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about weddings, corporate events..."
              className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full py-2 px-4 focus:ring-brand-gold focus:border-brand-gold"
            />
            <button type="submit" disabled={isLoading || !input.trim()} className="bg-brand-gold text-brand-dark p-2 rounded-full disabled:opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
