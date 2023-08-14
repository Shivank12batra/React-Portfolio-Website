import React from 'react'
import pl_analytics from '../assets/pl_analytics.png'
import dukaan from '../assets/dukaan.jpg'
import naruto from '../assets/naruto.jpg'
import whatsappBot from '../assets/whatsapp_bot.jpg'


const LargeProjects = () => {
  const projects = [
    {
      id: 1,
      name: 'EPL Analytics',
      src: pl_analytics,
      description: 'An in-depth analytics website for English Premier League fans showcasing detailed statistics and interactive data visualizations for the top six teams from the 2022-2023 season.',
      tech_stack: 'React, Tailwind CSS, React Query, D3.js, Firebase',
      live_href: 'https://pl-analytics.netlify.app/',
      code_href: 'https://github.com/Shivank12batra/PL-Data-Viz-Website',
    },
    {
      id: 2,
      name: 'Dukaan Web Performance',
      src: dukaan,
      description: 'Replicated dukaan.io home page with all the animations and responsiveness while also optimizing its performance on the frontend by improving the web vitals (LCP, CLS, accessibility etc.)',
      tech_stack: 'Next JS, Vanilla CSS, Framer Motion, Three.js',
      live_href: '',
      code_href: '',
    },
    {
      id: 3,
      name: 'Otaku Reads',
      src: naruto,
      description: 'Otaku Reads is the anime bookstore where you can buy new as well as old age, classical mangas. Some of the features include: cart management and wishlist management, product filters etc.',
      tech_stack: 'CSS, React, useContext + useReducer, Razorpay API, Mockbee',
      live_href: 'https://otaku-reads.netlify.app/',
      code_href: 'https://github.com/Shivank12batra/otaku-reads',
    },
    {
      id: 4,
      name: 'Whatsapp Attendance Bot',
      src: whatsappBot,
      description: 'A whatsapp attendance bot which I created for my college, which bi-weekly sends automated whatsapp Attendance reports: attendance marks, classes to be attended etc to all the registered students.',
      tech_stack: 'NodeJs, MongoDB, Puppeteer, Whatsapp-Web.js',
      live_href: 'https://sggscc-attendance-bot.onrender.com/',
      code_href: 'https://github.com/Shivank12batra/Whatsapp-Attendance-Automation-Bot'
    },

  ]
  return (
    <div name='Projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
            <div className='pb-8'>
                <p className='text-3xl font-bold inline border-b-4 border-gray-500 md:mt-16'>Large Scale Projects</p>
                <p className='py-6'>
                  Below are some of the end to end projects that either a) show my core tech skills or b) are unique ideas/had some real users on it at a small scale.
                </p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mx-auto'>
              {
                projects.map(({id, name, src, description, tech_stack, live_href, code_href}) => {
                  return (
                        <div key={id} className='mx-auto shadow-md shadow-gray-600 rounded-lg p-4'>
                          <h2 className='text-2xl text-center my-4 mb-0 font-bold' style={{ minHeight: '70px' }}>{name}</h2>
                          <img src={src} alt='' className='rounded-md w-80 h-40 only:duration-200 hover:scale-105 mx-auto'/>
                          <p className='mt-2 text-center'>{description}</p>
                          <p className='mt-4 text-center'>{tech_stack}</p>
                          {!live_href ?
                          <div className='flex justify-center'>
                              <button className='w-1/2 mx-auto py-3 my-4'>
                                Coming soon
                              </button>
                          </div> :
                          <div className='flex items-center justify-center'>
                            <a href={live_href} target='_blank' rel='noreferrer'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live</button>
                            </a>
                            <a href={code_href} target='_blank' rel='noreferrer'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </a>
                          </div>}
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