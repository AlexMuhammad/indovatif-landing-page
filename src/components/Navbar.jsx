import React, { useState } from 'react'
import Indovatif from "../assets/img/indovatif-dark.svg"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    // console.log(navbar);
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto text-black font-semibold'>
            <img src={Indovatif} alt="" className='w-[100px] h-[60px] md:w-[120px] md:h-[70px]' />
            <ul className='hidden md:flex'>
                <li className='p-4 text-[20px]'>Home</li>
                <li className='p-4 text-[20px]'>About</li>
                <li className='p-4 text-[20px]'>Portfolio</li>
                <li className='p-4 text-[20px]'>Service</li>
                <li className='p-4 text-[20px]'>Team</li>
                <li className='p-4 text-[20px]'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden text-3xl'>
                {!nav ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} />}
            </div>
            <div className={!nav ? 'fixed left-[-100%] duration-500' : 'fixed left-0 top-0 w-[60%] h-full bg-white border-r border-r-gray-900 ease-in-out duration-500 md:hidden'}>
                <img src={Indovatif} alt="" className='mx-auto mt-10 ' />
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'>Portfolio</li>
                    <li className='p-4 border-b border-gray-600'>Service</li>
                    <li className='p-4 border-b border-gray-600'>Team</li>
                    <li className='p-4 border-b border-gray-600'>Contact</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar