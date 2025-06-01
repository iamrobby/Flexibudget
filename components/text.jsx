import { Description, Field, Label, Textarea } from '@headlessui/react'
import clsx from 'clsx'
import axios from 'axios'

import { useState } from 'react'

export default function Example() {
  const [messages, setMessages] = useState([]); 
  const [input, setInput] = useState(''); 

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("form is submitted");

    if (!input.trim()) return;
     const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    await genaians(input);

    setInput(''); 
  };
 const genaians = async (input) => {
  console.log("genaians function called with input:", input);
    try {
      
      const res = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCJgZclZBzlAQliZwyTiiz2IO8D7v-eXvc",
        method: "post",
        headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer AIzaSyA26T_ecG0qKChg1l2BzuKDFdYb8DT6UYI`, //replace key imp
      },
        data: {
          contents: [
    {
      parts: [
        {
          text: input, //user inputs here
        },
      ],
    },
  ],
        
          
        },
      });
    
    const aiResponse = res.data.candidates[0]?.content?.parts[0]?.text;
    const firstSentence = aiResponse.replace(/\*/g, '\n');
     const aiMessage = { sender: 'ai', text: firstSentence};
      setMessages((prev) => [...prev, aiMessage]);
      
    } catch (error) {
      console.error("Error calling AI API:", error.response?.data || error.message);
    }
  };


  return (
    
    <div className="mt-10 items-center-safe w-full min-h-screen flex flex-col justify-center px-4 py-0 text-center">
        <label className='text-4xl text-blue-600 font-bold mb-6'>Finbot</label>
      <div className="bg-gray-800 pt-40 px-4 pb-7 rounded-lg text-white w-screen max-w-lg">
        
        <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={clsx(
                'p-2 rounded-lg max-w-[75%] text-left',
                msg.sender === 'user'
                  ? 'bg-blue-200 text-blue-900 self-end ml-auto'
                  : 'bg-gray-700 text-white self-start mr-auto'
              )}
                dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }}
            />
              /* {msg.text}
             </div> */
          ))}
        </div>
          
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={clsx(
              'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
              'focus:outline-none'
            )}
            rows={4}

          />
          <button
            type="submit"
            className="mt-3 w-full rounded-lg bg-blue-500 px-3 py-1.5 text-sm/6 font-medium text-white hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
    
  );
}
