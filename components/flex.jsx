import React, { useEffect, useState } from 'react';

export default function Flex() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return(
        <div 
        className={`flex flex-row bg-white/50 backdrop-blur-md border-red-500 p-4 rounded-2xl shadow-lg justify-between items-center  mt-10 transition-all duration-5000 ease-in ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <p className='ml-5 text-2xl text-black from-neutral-700 pr-9'>Flexibudget tool is here to make people understand  their finances better and manage them efficiently using Flexibudget AI, a new age tool to help you save money and invest them efficiently! </p>
            <img className='rounded-3xl max-w-500 max-h-100 object-cover bg white' src="https://images.unsplash.com/photo-1534951009808-766178b47a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            
        </div>
    );

}
