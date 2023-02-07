import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import ProfileImage from '../assets/profile_pic.jpg'

const Home = () => {
  return (
    <div name='home' className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
        <div className='max-w-screen-lg mx-auto mb-12 flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-3xl sm:text-5xl font-bold text-white mt-40 md:mt-4'>Aspiring Frontend Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    A self-taught developer with experience building and designing web applications using technologies like HTML, CSS, Node, React and Tailwind. I also have dabbled and have experience with data analytics/science with proficiency in Python.
                </p>
                <div>
                    <button className='group text-white w-fit px-8 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer'>
                        Projects
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={ProfileImage} alt="my profile" className='rounded-2xl mx-auto mt-8 mb-36 md:mb-4 w-1/3 md:w-full md:ml-10'/>
            </div>
        </div>
    </div>
  )
}

export default Home