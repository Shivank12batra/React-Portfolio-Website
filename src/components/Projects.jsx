import React from 'react'
// import twitterBot from '../assets/twitter_bot.png'
// import unitedLogo from '../assets/united_logo.png'
// import twitterLogo from '../assets/twitter_logo.png'
import twitterBot from '../assets/united_twitter_bot.png'
import pyPi from '../assets/pypi_package.jpg'
import palindrome from '../assets/palindrome_birthday.png'


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: twitterBot
    },
    {
      id: 2,
      src: pyPi
    },
    {
      id: 3,
      src: palindrome
    }
  ]
  return (
    <div className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6'>Check out some of work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
              {
                projects.map(({id, src}) => {
                  return (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                          <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                          <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
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

export default Portfolio