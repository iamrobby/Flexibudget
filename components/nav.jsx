import React from 'react';
import { Link } from 'react-router-dom';
import Fpreview from '../src/assets/Fpreview.png';
export default function Nav() {
    return(
        <div>
            <nav className="mx-10 mt-5 bg-white/40 backdrop-blur-md fixed w-[calc(100%-5rem)] z-20 top-0 start-0 border-b border-gray-200 dark:border-none rounded-4xl left-0 px-1 sm:px-6 py-2">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
    <div className='flex items-center space-x-2'>
      <img className="max-h-20 sm:max-h-12"src={Fpreview} alt="FlexiBudget logo" />
      <span className="flex self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
        FlexiBudget</span>
        </div>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md cursor-pointer px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-xl">
      <li>
        <Link to="/" className="block py-2 pr-3 mr-8  text-black bg-blue-700 rounded-sm md:bg-transparent md:text-black md:p-0 md:dark:text-black" aria-current="page">Home</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 mr-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">BudgetAI</Link>
      </li>
      <li>
        <Link to="/chat" className="block py-2 px-3 mr-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FinAI</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>
    )
}