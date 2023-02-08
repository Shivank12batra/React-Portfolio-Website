import React from 'react'
import twitterBot from '../assets/united_twitter_bot.png'
import pyPi from '../assets/pypi_package.jpg'
import palindrome from '../assets/palindrome_birthday.png'


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: 'Data Viz Twitter Bot',
      src: twitterBot,
      description: 'A twitter bot which posts data vizzes from Manchester United latest game. Teck Stack Used: selenium, bs4, pandas and matplotlib.'
    },
    {
      id: 2,
      name: 'understatscraper',
      src: pyPi,
      description: 'A python package to scrape shots data from understat.com for either a single game or for a whole season. Teck Stack Used: bs4, Numpy and Pandas.'
    },
    {
      id: 3,
      name: 'Birthday Palindrome',
      src: palindrome,
      description: 'Find out whether your birthday is a palindrome or not! Teck Stack Used: HTML, CSS and vanilla JS.'
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
                projects.map(({id, name, src, description}) => {
                  return (
                        <div key={id} className='w-full mx-auto shadow-md shadow-gray-600 rounded-lg'>
                          <h2 className='text-2xl text-center mb-4 font-bold'>{name}</h2>
                          <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                          <div>
                            <p className='mt-8 text-center mx-4'>{description}</p>
                          </div>
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