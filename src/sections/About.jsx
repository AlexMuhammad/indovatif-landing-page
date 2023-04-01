import React from 'react'
import Man from '../assets/img/youngman.png'
import Robot from "../assets/img/robot.png"

function About() {
    return (
        <div className='mt-[70px] md:mt-[150px]'>
            <div className='container mx-auto'>
                <h1 className='text-[28px] font-bold text-center md:text-[40px]'><span className='text-red-500'>About</span> Us</h1>
            </div>
            <div className='flex justify-between items-center mt-[70px] md:mt-[80px] flex-col md:flex-row'>
                <img src={Robot} alt="young man" className='w-96 md:w-[414px] md:h-[400px]' />
                <div className='w-full block text-center md:text-right md:w-[60%]'>
                    <h1 className='text-[30px] md:text-[40px] mt-[20px] md:mt-0'><span className='font-bold'>Sebuah layanan</span>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h1>
                    <button className='bg-red-500 px-[40px] py-[8px] text-white rounded-[6px] mt-[20px] md:mt-0'>More</button>
                </div>
            </div>
        </div>
    )
}

export default About