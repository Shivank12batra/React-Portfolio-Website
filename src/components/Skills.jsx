import React from 'react'
import html from '../assets/html.png'
import css from '../assets/CSS.png'
import javascript from '../assets/Javascript.png'
import react from '../assets/React.png'
import python from '../assets/python.png'
import pandas from '../assets/pandas.png'
import matplotlib from '../assets/matplotlib.png'
import git from '../assets/git.png'

const Skills = () => {
    const skills = [
        {
            id: 1,
            src: html,
            name: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            name: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            name: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            name: 'React JS',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: python,
            name: 'Python',
            style: 'shadow-green-500'
        },
        {
            id: 6,
            src: pandas,
            name: 'Pandas',
            style: 'shadow-blue-500'
        },
        {
            id: 7,
            src: matplotlib,
            name: 'Matplotlib',
            style: 'shadow-blue-500'
        },
        {
            id: 8,
            src: git,
            name: 'Git/Version Control',
            style: 'shadow-orange-500'
        },
    ]
  return (
    <div className='bg-gradient-to-b from-gray-800 to-black w-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                <p className='py-6'>These are the technologies I have worked with so far</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    skills.map(({id, src, name, style}) => {
                        return (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt='' className='w-20 mx-auto'/>
                                <p className='mt-4'>{name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Skills