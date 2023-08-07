import React from 'react'
import naruto from '../assets/naruto.jpg'
import twitterBot from '../assets/united_twitter_bot.png'
import whatsappBot from '../assets/whatsapp_bot.jpg'
import pyPi from '../assets/pypi_package.jpg'
import linkedin from '../assets/linkedin_bio_generator.jpg'


const LargeProjects = () => {
  const projects = [
    {
      id: 3,
      name: 'Otaku Reads',
      src: naruto,
      description: 'Otaku Reads is the anime bookstore where you can buy new as well as old age, classical mangas. Features: cart, wishlist and address management, various filters and sort options on books and payment itegration. Tech stack used: React JS, useContext + useReducer(State Management), Vanilla CSS',
      live_href: 'https://otaku-reads.netlify.app/',
      code_href: 'https://github.com/Shivank12batra/otaku-reads',
    },
    {
      id: 4,
      name: 'Whatsapp Attendance Bot',
      src: whatsappBot,
      description: 'A whatsapp attendance bot which I created for my college, which bi-weekly sends automated whatsapp Attendance reports(how many classes they need to attend to reach x%, how much marks they will get based on current attendance etc). Tech stack used: Node, MongoDB, Whatsapp-web.js',
      live_href: 'https://sggscc-attendance-bot.onrender.com/',
      code_href: 'https://github.com/Shivank12batra/Whatsapp-Attendance-Automation-Bot'
    },

  ]
  return (
    <div name='Projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
            <div className='pb-8'>
                <p className='text-3xl font-bold inline border-b-4 border-gray-500 md:mt-16'>Projects</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
              {
                projects.map(({id, name, src, description, live_href, code_href}) => {
                  return (
                        <div key={id} className='w-full mx-auto shadow-md shadow-gray-600 rounded-lg'>
                          <h2 className='text-2xl text-center mb-4 font-bold'>{name}</h2>
                          <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                          <div>
                            <p className='mt-8 text-center mx-4'>{description}</p>
                          </div>
                          <div className='flex items-center justify-center'>
                            <a href={live_href} target='_blank' rel='noreferrer'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live</button>
                            </a>
                            <a href={code_href} target='_blank' rel='noreferrer'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </a>
                          </div>
                        </div>
                  )
                })
              }
              </div>
        </div>
    </div>
  )
}

export default LargeProjects