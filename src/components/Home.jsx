import React from 'react'
import {Link} from 'react-scroll'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import ProfileImage from '../assets/profile_pic.jpg'

const Home = () => {
  return (
    <div name='Home' className="min-w-full bg-gradient-to-b from-black via-black to-gray-800 text-white border-2 border-solid border-transparent">
        <div className='max-w-screen-lg mx-auto mb-4 sm:mb-12 flex flex-col items-center justify-center px-4 md:flex-row mt-4 sm:mt-4 min-h-screen'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-3xl md:text-5xl font-bold text-white mt-20 sm:mt-40 md:mt-4'>Aspiring Frontend Developer</h2>
                <p className='text-gray-500 py-4 md:max-w-md'>
                    A self-taught developer with experience building and designing web applications using technologies like HTML, CSS, Node, React and Tailwind. I also have dabbled and have experience with data analytics/science with proficiency in Python.
                </p>
                <div>
                    <Link to='Projects' smooth duration-500 className='group text-white w-fit px-8 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer'>
                        Projects
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                        </Link>
                </div>
            </div>
            <div>
                <img src={ProfileImage} alt="my profile" className='rounded-2xl mx-auto mt-8 mb-12 md:mb-4 w-3/4 md:w-full md:ml-10 mr-2'/>
            </div>
        </div>
    </div>
  )
}

export default Home