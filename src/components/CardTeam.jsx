import React from 'react'
// import profile from "../assets/img/profile.svg";
import Instagram from "../assets/img/instagram.svg";
import Linkedin from "../assets/img/linkedin.svg";
import Mail from "../assets/img/mail.svg";

function CardTeam({ data }) {
    const { name, position, image } = data
    console.log(image)
    return (
        <div className='flex flex-col items-center justify-center  border-2 border-[#EB4D4A] py-10 rounded-xl shadow-md mt-[40px] md:mt-[70px]'>
            <div className='w-bg-slate-30 rounded-full'>
                <img src={image} alt="" className='w-full' />
            </div>
            <h3 className='mt-[24px] text-2xl font-bold'>{name}</h3>
            <h3 className='text-xl font-semibold text-[#EB4D4A]'>{position}</h3>
            <div className='flex gap-10 mt-[50px]'>
                <div className='p-2 bg-[#EB4D4A] rounded-xl'>
                    <img src={Instagram} alt="" />
                </div>
                <div className='p-2 bg-[#EB4D4A] rounded-xl place-content-center'>
                    <img src={Linkedin} alt="" />
                </div>
                <div className='p-2 bg-[#EB4D4A] rounded-xl'>
                    <img src={Mail} alt="" className='mt-1' />
                </div>
            </div>
        </div>
    )
}

export default CardTeam