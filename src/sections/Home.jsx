import React from 'react'
import Robot from "../assets/img/robot.png"

function Home() {
    return (
        <div className='w-full flex justify-between items-center mt-[50px] md:mt-[100px] flex-col md:flex-row'>
            <div className='flex flex-col text-left md:w-[40%]'>
                <h3 className='text-[20px] font-semibold text-center md:text-start'>Welcome To</h3>
                <h1 className='text-[28px] md:text-[40px] font-bold my-[5px] text-center md:text-start'><span className='text-red-500'>Indo</span>vatif Company</h1>
                <p className='text-[14px] md:text-[18px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequatur pariatur voluptas iusto reprehenderit! Dicta eveniet autem ut culpa, fugit inventore, at mollitia repellat optio sunt cupiditate voluptatum libero quod consectetur! Repellat quia eaque quaerat veniam. Optio sint culpa porro, at a qui aperiam eos laboriosam iusto unde dolorem iure?</p>
                <div className='space-x-[20px] mt-[18px] mx-auto md:mx-0'>
                    <button className='bg-red-400 px-[30px] py-[10px] rounded-[10px] text-white'>More</button>
                    <button className='bg-gray-700 px-[30px] py-[10px] rounded-[10px] text-white'>Our Service</button>
                </div>
            </div>
            <div className='mt-[20px] md:mt-0'>
                <img src={Robot} alt="" className='w-[300px] h-[280px] md:w-[377px] md:h-[336px]' />
            </div>
        </div>
    )
}

export default Home