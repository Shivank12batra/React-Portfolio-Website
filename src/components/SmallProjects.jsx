import React from 'react'
import linkedin from '../assets/linkedin_bio_generator.jpg'
import player_recommender from '../assets/player_recommender.jpg'
import pyPi from '../assets/pypi_package.jpg'


const SmallProjects = () => {
    const projects = [
        {
          id: 1,
          name: 'LinkedIn Bio Generator',
          src: linkedin,
          description: 'Impress recruiters and colleagues with a professional and engaging LinkedIn profile bio by using this linkedIn bio generator.',
          tech_stack: 'React, Node Js, GPT-3 API',
          live_href: 'https://https-linkedin-bio-generator-api.onrender.com/',
          code_href: 'https://github.com/Shivank12batra/Linkedin-Bio-Generator'
        },
        {
            id: 2,
            name: 'Player Recommender System',
            src: player_recommender,
            description: 'A player recommendation system which outputs the most similar players for a given player based on various features collected via Fbref.',
            tech_stack: 'bs4, Numpy, Pandas, Streamlit',
            live_href: 'https://player-recommendation-system-fbref.streamlit.app',
            code_href: 'https://github.com/Shivank12batra/player-recommendaton-system'
        },
        {
            id: 3,
            name: 'understatscraper',
            src: pyPi,
            description: 'A python pyPi package to scrape shots data from understat.com for either a single game or for a whole season for top five European leagues.',
            tech_stack: 'Selenium, bs4, pandas',
            live_href: 'https://pypi.org/project/understatscraper/',
            code_href: 'https://github.com/Shivank12batra/understatscraper'
        },
      ]
  return (
    <div name='Projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
            <div className='pb-8'>
                <p className='text-3xl font-bold inline border-b-4 border-gray-500 md:mt-16'>Hobby Projects</p>
                <p className='py-6'>The projects below are some fun side/hobby projects a) to either learn a new tech stack or b) test and play around an idea.</p>
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
                          {/* <div>
                            <p className='mt-4 text-center mx-0 border-2'>{description}</p>
                          </div> */}
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

export default SmallProjects