import React from 'react'
import { FaGithub, FaLinkedin, FaMedium} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const About = () => {
  const links = [
    {
        id: 1,
        child: (
            <>
             <FaLinkedin size={30}/>
            </>
        ),
        href: 'https://in.linkedin.com/in/shivank-batra-4594b9202',
    },
    {
        id: 2,
        child: (
            <>
             <FaGithub size={30}/>
            </>
        ),
        href: 'https://github.com/Shivank12batra',
    },
    {
        id: 3,
        child: (
            <>
             <SiLeetcode size={30}/>
            </>
        ),
        href: 'https://leetcode.com/Sewerslvt/',
    },
    {
        id: 5,
        child: (
            <>
             <FaMedium size={30}/>
            </>
        ),
        href: 'https://medium.com/@shivank56batra', 
    }
]
  return (
  <div name='About' className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 mt-12'>About</p>
        </div>
        <p className='sm:text-xl mt-5'>
          Hey! I am Shivank, a self taught dev currently looking out for frontend/full-stack roles at high growth startups. My current tech stack: HTML, CSS, Javascript, React,Node JS, Mongo DB, Tailwind, Git/Verson Control.
        </p>
        <p className='sm:text-xl mt-5'>
          I started out my journey by writing automation scripts/web scrapers in Python to then diving into the web ecosystem. Here, again I started small by replicating simple layouts and creating mini/toy webapps and then gradually moved up the complexity and now, I have a couple of strong end-to-end projects which showcase my ability in handling state management, dealing with large amounts of data, integrating APIs and creating neat and responsive UIs.
        </p>
        <p className='sm:text-xl mt-5'>To know more about me:</p>
        <ul className='flex flex-row mt-5 sm:flex-row'>
            {links.map(({id, child, href}) => {
                 return <li  key={id} className='flex justify-between items-center px-4'>
                    <a href={href} target="_blank" rel='noreferrer' className='flex justify-between items-center w-full text-white'>
                        {child}
                    </a>
                </li>
            })}
        </ul>
    </div>
  </div>)
}

export default About