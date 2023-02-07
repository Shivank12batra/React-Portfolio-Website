import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://linkedin.com',
        },
        {
            id: 2,
            child: (
                <>
                Github <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com',
        },
        {
            id: 3,
            child: (
                <>
                 Twitter <FaTwitter size={30}/>
                </>
            ),
            href: 'https://github.com',
        }
    ]
  return (
    <div className='hidden md:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href}) => {
                 return <li  key={id} className='flex justify-between items-center w-40 h-14 px-4 -ml-24 hover:-m-2 hover:rounded-md duration-300 bg-gray-500'>
                    <a href={href} className='flex justify-between items-center w-full text-white'>
                        {child}
                    </a>
                </li>
            })}
        </ul>
    </div>
  )
}

export default SocialLinks