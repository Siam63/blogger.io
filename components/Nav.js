import React from 'react';
import { AiFillCrown } from 'react-icons/ai'

function Nav() {
    return (
        <div>       
            <nav class="border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-slate-900">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="/" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Faiazur's Blog</span>
            </a>
            <div class="flex md:order-2">
                <a href="/About" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600">
                    <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span class="relative text-white transition duration-300 group-hover:text-gray-200 ease">About</span>
                </a>

                <a href="/Premium" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600">
                    <div className="flex justify-center items-center">
                        <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span class="relative text-orange-600 transition duration-300 group-hover:text-white ease">Premium</span>
                        <AiFillCrown className="ml-2 text-white"/>
                    </div>
                </a>
            </div>
            
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                </ul>
            </div>
            </div>
            </nav>
        </div>
    )
}

export default Nav
