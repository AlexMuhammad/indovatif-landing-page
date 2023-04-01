import React from 'react'
// import profile from "../assets/img/profile.svg";
import Instagram from "../assets/img/Instagram-dark.svg";
import Linkedin from "../assets/img/linkedin-dark.svg";
import Mail from "../assets/img/mail-dark.svg";

function CardTeam({ data }) {
    const { name, position, image } = data
    console.log(image)
    return (
        <div className='flex flex-col items-center justify-center  border-4 border-[#EB4D4A] shadow-md py-4 md:py-10 rounded-xl mt-[40px] md:mt-[70px]'>
            <div className='w-bg-slate-30 rounded-full'>
                <img src={image} alt="" className='rounded-full w-3/4 mx-auto md:w-full' />
            </div>
            <h3 className='mt-[24px] text-2xl font-bold'>{name}</h3>
            <h3 className='text-xl font-semibold text-[#EB4D4A]'>{position}</h3>
            <div className='w-[90%] border-[1px] border-[#EB4D4A] mt-5'></div>
            <div className='flex gap-5 md:gap-10 mt-5 md:mt-[50px]'>
                <div className='md:p-2 p-2 my-auto  rounded-xl'>
                    <img src={Instagram} alt="" className='w-5 md:w-8' />
                </div>
                <div className='md:p-2 p-2 my-auto rounded-xl'>
                    <img src={Linkedin} alt="" className='w-5 md:w-8' />
                </div>
                <div className='md:p-2 p-2 my-auto rounded-xl'>
                    <img src={Mail} alt="" className='w-5 md:w-8' />
                </div>
            </div>
        </div>
    )
}

export default CardTeam