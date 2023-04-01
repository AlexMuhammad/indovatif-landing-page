import React from 'react'
import Navbar from '../components/Navbar'

function MainLayout({ children }) {
    return (
        // <div className='min-h-full min-w-full bg-red-300'>
        <div className='max-w-[1440px] mx-auto px-[24px] md:px-[120px] pt-[32px]'>
            {children}
        </div>
        // </div>
    )
}

export default MainLayout