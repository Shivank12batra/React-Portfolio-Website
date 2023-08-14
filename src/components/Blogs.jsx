import React from 'react'
import blog1 from '../assets/dum.png'
import blog2 from '../assets/this_keyword_2.png'

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            src: blog1,
            title: 'Dumbbell Chart Tutorial In Python',
            href: 'https://medium.com/@shivank56batra/a-guide-to-create-dumbbell-charts-in-python-8687e8439f1'
        },
        {
            id: 2,
            src: blog2,
            title: 'This Keyword In Javascript Explained',
            href: 'https://medium.com/@shivank56batra/the-mysterious-this-keyword-in-javascript-explained-eabf6c3b7e0f'
        },
    ]
  return (
    <div name='Blogs' className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Blogs</p>
                <p className='py-6'>Check out some of my technical blogs below.</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    blogs.map(({id, src, title, href}) => {
                        return (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <h2 className='text-2xl text-center m-8'>{title}</h2>
                                <img src={src} alt='' className='w-96 h-48 px-4 rounded-md duration-200 hover:scale-105'/>
                                <div className='flex items-center justify-center'>
                                    <a href={href} target='_blank' rel='noreferrer'>
                                    <button className='px-6 text-center border-r-amber-50 py-3 m-4 duration-200 hover:scale-105'>Read</button>
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

export default Blogs