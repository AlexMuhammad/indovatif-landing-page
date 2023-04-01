import React from 'react'
import gear24 from "../assets/img/gear24.svg"
import holdGear from "../assets/img/holdgear.svg"
import calender from "../assets/img/calender.svg"

function Service() {
    return (
        <div className='w-full container mx-auto mt-[70px] md:mt-[150px]'>
            <h1 className='text-[40px] font-bold text-center'><span className='text-red-500'>Our</span> Service</h1>
            <div className='w-full flex justify-center md:justify-between gap-10 flex-wrap items-center mt-[70px]'>
                <div>
                    <img src={calender} alt="" className='mx-auto w-20' />
                    <h1 className='text-[40px] font-bold'><span className='text-red-500'>Our</span> Service</h1>
                </div>
                <div>
                    <img src={gear24} alt="" className='mx-auto w-32' />
                    <h1 className='text-[40px] font-bold'><span className='text-red-500'>Our</span> Service</h1>
                </div>
                <div>
                    <img src={holdGear} alt="" className='mx-auto w-32' />
                    <h1 className='text-[40px] font-bold'><span className='text-red-500'>Our</span> Service</h1>
                </div>
            </div>
            <div className='w-full flex justify-around flex-wrap items-center gap-10 mt-[30px] md:mt-[70px]'>
                <div className=''>
                    <img src={gear24} alt="" className='mx-auto w-32' />
                    <h1 className='text-[40px] font-bold'><span className='text-red-500'>Our</span> Service</h1>
                </div>
                <div className=''>
                    <img src={gear24} alt="" className='mx-auto w-32' />
                    <h1 className='text-[40px] font-bold'><span className='text-red-500'>Our</span> Service</h1>
                </div>
            </div>
        </div>
    )
}

export default Service