import React, {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Skills'
        },
        {
            id: 4,
            link: 'Projects'
        },
        {
            id: 5,
            link: 'Blogs'
        },
    ]
  return (
    <div className="flex justify-between items-center w-screen h-10 md:h-20 text-white bg-black fixed">
        <div>
            <h1 className='text-4xl ml-2 font-signature'>Shivank</h1>
        </div>
        <ul className='hidden mr-4 md:flex'>
            {links.map(({id, link}) => {
                return <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200">
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>
            })}
        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-grey-500 md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>
        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                {links.map(({id, link}) => {
                    return <li key={id} className="px-4 cursor-pointer capitalize py-6 text-3xl hover:text-white">
                        <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                })}
            </ul>
        )}
    </div>
  )
}

export default NavBar