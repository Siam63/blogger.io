import React from 'react';
import Nav from '@/components/Nav';

function About() {
    return (
        <div>
            <Nav />
            {/* <div>       
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
                    <a href="https://fantastic-monstera-1a4de4.netlify.app/#" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600">
                        <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span class="relative text-white transition duration-300 group-hover:text-indigo-300 ease">Portfolio Website</span>
                    </a>
                </div>
                </div>
                </nav>
            </div> */}

            <div className="px-5 py-5 text-center text-wrap">
                <h1 className="font-bold">A LITTLE ABOUT ME</h1>
                <div className="sm:px-10 px-2">
                    <h1 className="text-lg pt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h1>
                </div>
                
                <h1 className="font-bold pt-5">Want to learn more about me?</h1>
                <div className="sm:px-10 px-2">
                    <h1 className="text-lg pt-5">Click "Portfolio Website" at the top of the screen above to see my portfolio website. I go over all my previous projects, technologies
                    I've been working with, previous experience, and all sorts of cool stuff!</h1>
                </div>
                </div>
            </div>

    )
}

export default About
