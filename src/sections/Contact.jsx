import React from 'react';
import Phone from "../assets/img/phone.svg";
import MarkMaps from "../assets/img/mark-maps.svg";
import Email from "../assets/img/email.svg";
import Twitter from "../assets/img/twitter.svg";
import Instagram from "../assets/img/instagram.svg";
import Linkedin from "../assets/img/linkedin.svg";
import Facebook from "../assets/img/facebook.svg";

function Contact() {
    return (
        <div className='max-w-full mt-[100px]'>
            <div className='w-full container mx-auto'>
                <h1 className='text-[40px] font-bold text-center'><span className='text-red-500'>Contact</span> Team</h1>
                <div className='flex flex-col-reverse mt-[70px] md:flex-row'>
                    <div className='w-full flex flex-col bg-[#2C2C2C] px-10 py-5 rounded-xl md:w-1/3 mt-10 md:mt-0'>
                        <h1 className='text-xl text-white md:text-[30px] font-semibold'>Contact Information</h1>
                        <p className='text-[#6D6D6D] text-[15px] mt-[10px]'>Fill up the form and our Team will get back to
                            you within 24 hours.</p>
                        <div className='inline-flex space-x-5 mt-[70px]'>
                            <img src={Phone} alt="" className='w-4' />
                            <p className='text-white'>+62 821 433 384 76</p>
                        </div>
                        <div className='inline-flex space-x-5 my-[40px]'>
                            <img src={Email} alt="" className='w-4' />
                            <p className='text-white'>indovatif@gmail.com</p>
                        </div>
                        <div className='inline-flex space-x-5'>
                            <img src={MarkMaps} alt="" className='w-4' />
                            <p className='text-white'>Kos Hikmah</p>
                        </div>
                        <div className='inline-flex gap-8 mt-[130px]'>
                            <img src={Facebook} alt="" />
                            <img src={Twitter} alt="" />
                            <img src={Instagram} alt="" />
                            <img src={Linkedin} alt="" />
                        </div>
                    </div>
                    <div className='flex-1 md:ml-10'>
                        <form>
                            <div className="grid gap-5 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Rois" required />
                                </div>
                                <div>
                                    <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                    <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                                </div>
                                <div>
                                    <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mail</label>
                                    <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required />
                                </div>
                                <div>
                                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                    <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                            </div>
                            <div className='my-[50px]'>
                                <h1 className='text-[20px] font-semibold'>What the of website do you need?</h1>
                                <div className='grid gap-4 md:grid-cols-3 mt-[20px]'>
                                    <div className="flex flex-wrap">
                                        <div className="flex items-center mr-4">
                                            <input id="red" type="radio" value="" name="web-design" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:bg-red-500 " />
                                            <label for="web-design" className="ml-2 text-[18px] font-medium text-gray-900 dark:text-gray-300">Web Design</label>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="flex items-center mr-4">
                                            <input id="red" type="radio" value="" name="web-development" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:bg-red-500 " />
                                            <label for="web-development" className="ml-2 text-[18px] font-medium text-gray-900 dark:text-gray-300">Web Development</label>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="flex items-center mr-4">
                                            <input id="red" type="radio" value="" name="mobile-development" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:bg-red-500 " />
                                            <label for="mobile-development" className="ml-2 text-[18px] font-medium text-gray-900 dark:text-gray-300">Mobile Development</label>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="flex items-center mr-4">
                                            <input id="red" type="radio" value="" name="ui/ux" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:bg-red-500" />
                                            <label for="ui/ux" className="ml-2 text-[18px] font-medium text-gray-900 dark:text-gray-300">UI/UX</label>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="flex items-center mr-4">
                                            <input id="red" type="radio" value="" name="openApi" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:bg-red-500" />
                                            <label for="openApi" className="ml-2 text-[18px] font-medium text-gray-900 dark:text-gray-300">Open API</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label for="email" className="block mb-2 text-[20px] font-medium text-gray-900 dark:text-white">Message</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Write your message" required />
                            </div>
                            <button type="submit" className="text-white bg-[#EB4D4A] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact