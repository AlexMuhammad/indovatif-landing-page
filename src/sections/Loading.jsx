import React from 'react'
import Indovatif from "../assets/img/indovatif-dark.svg"

function Loading() {
    return (
        <div className='max-w-full h-[90vh]'>
            <div className='flex justify-center items-center h-full'>
                <img src={Indovatif} alt="" className='animate-bounce' />
            </div>
        </div>
    )
}

export default Loading