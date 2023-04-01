import React from 'react'

function Card({ data: dData }) {
    return (
        <div className='flex justify-center items-center flex-col py-5 md:py-10 w-full md:flex-row'>
            <img src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt="" className='w-52 md:w-[305px] md:h-[300px] rounded-md' />
            <div className='text-left md:text-left md:w-1/2 md:px-4'>
                <h1 className='font-bold text-[40px] md:w-[70%]'>
                    {dData.title}</h1>
                <p className='text-justify space-x-5 md:px-0'>{dData.description}</p>
                <div className='space-x-[10px] mx-auto'>
                    <button className='text-white bg-red-500 px-[20px] py-[8px] rounded-md'>See Detail</button>
                    <button className='text-white bg-gray-800 px-[20px] py-[8px] rounded-md'>All Portfolio</button>
                </div>
            </div>
        </div>
    )
}

export default Card