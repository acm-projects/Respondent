import { useState, useEffect } from 'react';
//import axios from 'axios';

export default function Chat() {
    const [ inputValue, setInputValue] = useState('');
    const [chatLog, setChatLog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }])

        sendMessage(inputValue);

        setInputValue('');
    };

    const sendMessage = (message) => {
        const url = 'https://api.openai.com/v1/chat/completions';
        const headers = {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
        };
        const data = {
            model: 'gpt-3.5-turbo-0301',
            messages: [{ "role": "user", "content": message }]
        };

        setIsLoading(true);

        axios.post(url, data, { headers: headers }).then((response) => {
            console.log(response);
            setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.data.choices[0].message.content}])
            setIsLoading(false);
        }).catch((error) => {
            setIsLoading(false);
            console.log(error);
        })
    };

    return (
        <div className='container mx-auto max-w-[700px]'>
            <div className='flex flex-col h-screen bg-grey-900'>
                <h1 className='bg-gradient-to-r from-green-500 to-red-500 text-transparent bg-clip-text text-center py-3 font-bold text-6xl'>Chatbot</h1>
                <div className='flex-grow p-6 h-96 overflow-y-scroll'>
                    <div className='flex flex-col space-y-4'>
                    {
                        chatLog.map((message, index) =>(
                        <div key={index} className={`flex ${
                            message.type === 'user' ? 'justify-end' : 'justify-start'
                        }`}>
                            <div className={`${
                                message.type === 'user' ? 'bg-green-700' : 'bg-red-500'
                            } rounded-lg p-4 text-white max-w-sm`}>
                                {message.message}
                            </div>
                        </div>
                        ))
                    }
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='flex-none p-20'>
                    <div className='flex rounded-lg border border-gray-700 bg-gray-800'>
                        <input type="text" className='flex-grow px-4 py-2 bg-transparent text-white focus:outline-none' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type your message"  />
                        <button type="submit" className='bg-red-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-green-500 transition-colors duration-300'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
