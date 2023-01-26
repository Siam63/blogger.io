import React from 'react'
import Nav from '@/components/Nav'

function About() {
    return (
        <div>
            <div>       
                <nav class="border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-slate-900">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" class="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Faiazur's Blog</span>
                </a>
                <div class="flex md:order-2">
                    <a href="/" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600">
                    <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span class="relative text-white transition duration-300 group-hover:text-indigo-300 ease">Home</span>
                    </a>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                    </ul>
                </div>
                </div>
                </nav>
            </div>

            <div className="px-5 py-5 text-center text-wrap">
                <h1 className="font-bold">A LITTLE ABOUT ME</h1>
                <div className="sm:px-10 px-2">
                    <h1 className="text-lg pt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h1>
                </div>
                
            </div>
        </div>
    )
}

export default About
