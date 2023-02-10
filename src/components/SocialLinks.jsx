import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaMedium} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'


const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://in.linkedin.com/in/shivank-batra-4594b9202',
        },
        {
            id: 2,
            child: (
                <>
                Github <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/Shivank12batra',
        },
        {
            id: 3,
            child: (
                <>
                 Leetcode <SiLeetcode size={30}/>
                </>
            ),
            href: 'https://leetcode.com/Sewerslvt/',
        },
        {
            id: 4,
            child: (
                <>
                 Twitter <FaTwitter size={30}/>
                </>
            ),
            href: 'https://twitter.com/shvnk_12',
        },
        {
            id: 5,
            child: (
                <>
                 Medium <FaMedium size={30}/>
                </>
            ),
            href: 'https://medium.com/@shivank56batra', 
        }
    ]
  return (
    <div className='hidden md:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href}) => {
                 return <li  key={id} className='flex justify-between items-center w-40 h-14 px-4 -ml-24 hover:-m-2 hover:rounded-md duration-300 bg-gray-500'>
                    <a href={href} target="_blank" rel='noreferrer' className='flex justify-between items-center w-full text-white'>
                        {child}
                    </a>
                </li>
            })}
        </ul>
    </div>
  )
}

export default SocialLinks