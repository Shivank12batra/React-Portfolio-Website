import React from 'react'
// import {FaBars, FaTimes} from "react-icons/fa"

const NavBar = () => {
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'projects'
        },
        {
            id: 4,
            link: 'blogs'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed">
        <div>
            <h1 className='text-4xl ml-2 font-signature'>Shivank</h1>
        </div>
        <ul className='hidden md:flex'>
            {links.map(({id, link}) => {
                return <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                    {link}
                </li>
            })}
        </ul>
    </div>
  )
}

export default NavBar