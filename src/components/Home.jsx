import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import ProfileImage from '../assets/profile_pic.jpg'

const Home = () => {
  return (
    <div name='home' className="h-screen w-full bg-gradient-to-b from-black via -black to-gray-800 text-white">
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-5xl font-bold text-white mt-28 md:mt-4'>Aspiring Frontend Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    A self-taught developer with experience building and designing web applications using technologies like HTML, CSS, Node, React and Tailwind. I also have dabbled and have experience with data analytics/science with proficiency in Python.
                </p>
                <div>
                    <button>
                        Projects
                        <span>
                            <MdOutlineKeyboardArrowRight/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={ProfileImage} alt="my profile" className='rounded-2xl mx-auto w-1/3 md:w-2/3'/>
            </div>
        </div>
    </div>
  )
}

export default Home