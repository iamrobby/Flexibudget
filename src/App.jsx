import { useState } from 'react'
import finance from './finance.svg';
import './App.css'
import Flex from '../components/flex'
import Nav from '../components/nav'
function App() {
  return(
    <div className='text-center text-blue-600 justify-center sm:mx-4 mx-2 my-5'>
      <Nav/>
      <h1 className='mt-30 text-8xl sm:text-5xl md:text-8xl font-bold leading-tight'>Say Hello <br className="hidden sm:block"/> To the New Age Finance tool</h1>
      <div className='flex justify-center my-6'>
        <img className='w-full max-w-xs sm:max-w-md md:max-w-4xl h-auto rounded-xl' src={finance} alt="finance" />
      </div>
       <Flex/>
       <footer className='text-center text-gray-700 mt-10text-xs sm:text-base px-2'>
        <p>© 2025 FlexiBudget. All rights reserved.</p>
        <p>Made with ❤️ by the ARK</p>
      </footer>
    </div>
    
  );
}

export default App
