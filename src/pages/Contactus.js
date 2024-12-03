import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import Banner from '../assets/banner.jpg'

const Contactus = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='pt-32 lg:px-32 px-8'>
            <div className="relative -mx-8 lg:-mx-32 -mt-10 mb-10">
                <img src={Banner} alt="banner" />
            </div>

            <h1 className='text-4xl font-extrabold text-orange text-center my-4'>Get in touch:</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24 m-4">
                <div className="shadow-md rounded-md w-full h-full p-10 flex flex-col justify-center items-center text-center">
                    <FaLocationDot className="text-green text-5xl mb-2" />
                    <h4 className="text-xl p-2 font-bold text-darkblue">PESO South</h4>
                    <a className="text-sm text-blue underline hover:text-darkblue" href="https://maps.app.goo.gl/nXWY6xv4tTmZoeN78" target="_blank" rel="noopener noreferrer">
                        8th Ave, Grace Park East, Caloocan, Metro Manila
                    </a>
                </div>
                <div className="shadow-md rounded-md w-full h-full p-10 flex flex-col justify-center items-center text-center">
                    <FaLocationDot className="text-green text-5xl mb-2" />
                    <h4 className="text-xl p-2 font-bold text-darkblue">PESO North</h4>
                    <a className="text-sm text-blue underline hover:text-darkblue" href="https://maps.app.goo.gl/QKC7B8i4wWcqKUR29" target="_blank" rel="noopener noreferrer">
                        887-1519 Zapote Rd, Caloocan, 1400 Metro Manila
                    </a>
                </div>
                <div className="shadow-md rounded-md w-full h-full p-10 flex flex-col justify-center items-center text-center">
                    <IoCall className="text-green text-5xl mb-2" />
                    <h4 className="text-xl p-2 font-bold text-darkblue">Phone Number</h4>
                    <p className="text-sm">
                        Globe <a href="tel:09945865688" className="text-blue underline hover:text-darkblue">09945865688</a>
                    </p>
                    <p className="text-sm">
                        Smart <a href="tel:09323849283" className="text-blue underline hover:text-darkblue">09323849283</a>
                    </p>
                    <h4 className="text-xl p-2 font-bold text-darkblue">Fax</h4>
                    <p className="text-sm">
                        Landline <a href="tel:23-3245-6547" className="text-blue underline hover:text-darkblue">23-3245-6547</a>
                    </p>
                </div>
                <div className="shadow-md rounded-md w-full h-full p-10 flex flex-col justify-center items-center text-center">
                    <IoIosMail className="text-green text-5xl mb-2" />
                    <h4 className="text-xl p-2 font-bold text-darkblue">Email</h4>
                    <p className="text-sm">
                        Email <a href="mailto:peso@gmail.com" className="text-blue underline hover:text-darkblue">peso@gmail.com</a>
                    </p>
                </div>
            </div>

            <hr className='line-dashed my-10 mx-4' />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-36 mb-10'>
                <div className=''>
                    <h2 className="text-orange text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                    <ul className="space-y-4 m-4 my-8">
                        <li>
                            <button onClick={() => toggleAccordion(0)} className="flex items-center text-left justify-between w-full text-lg focus:outline-none"> May dagdag sahod ba agad? <MdKeyboardArrowDown className={`transform text-2xl transition-transform duration-300 ${openIndex === 0 ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === 0 ? 'max-h-40' : 'max-h-0'}`}>
                                <p className="text-gray-600 mt-2 text-lg px-4">
                                    Placeholder answer for "May dagdag sahod ba agad?".
                                </p>
                            </div>
                        </li>
                        <li>
                            <button onClick={() => toggleAccordion(1)} className="flex items-center text-left justify-between w-full text-lg focus:outline-none"> May free lunch ba lagi? <MdKeyboardArrowDown className={`transform text-2xl transition-transform duration-300 ${openIndex === 1 ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === 1 ? 'max-h-40' : 'max-h-0'}`}>
                                <p className="text-gray-600 mt-2 text-lg px-4">
                                    Placeholder answer for "May free lunch ba lagi?".
                                </p>
                            </div>
                        </li>
                        <li>
                            <button onClick={() => toggleAccordion(2)} className="flex items-center text-left justify-between w-full text-lg focus:outline-none"> Gaano kabilis ang promotion? Mga one week? <MdKeyboardArrowDown className={`transform  text-2xl transition-transform duration-300 ${openIndex === 2 ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === 2 ? 'max-h-40' : 'max-h-0'}`}>
                                <p className="text-gray-600 mt-2 text-lg px-4">
                                    Placeholder answer for "Gaano kabilis ang promotion? Mga one week?".
                                </p>
                            </div>
                        </li>
                        <li>
                            <button onClick={() => toggleAccordion(3)} className="flex items-center text-left justify-between w-full text-lg focus:outline-none"> Kailangan ba talaga ng experience? <MdKeyboardArrowDown className={`transform text-2xl transition-transform duration-300 ${openIndex === 3 ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === 3 ? 'max-h-40' : 'max-h-0'}`}>
                                <p className="text-gray-600 mt-2 text-lg px-4">
                                    Placeholder answer for "Kailangan ba talaga ng experience?".
                                </p>
                            </div>
                        </li>
                        <li>
                            <button onClick={() => toggleAccordion(4)} className="flex items-center text-left justify-between w-full text-lg focus:outline-none">Puwede bang mag-uwi ng office supplies? <MdKeyboardArrowDown className={`transform text-2xl transition-transform duration-300 ${openIndex === 4 ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === 4 ? 'max-h-40' : 'max-h-0'}`}>
                                <p className="text-gray-600 mt-2 text-lg px-4">
                                    Placeholder answer for "Puwede bang mag-uwi ng office supplies?".
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center justify-center m-4">
                    <form className="w-full">
                        <div className="mb-4">
                            <label htmlFor="fullname" className="block text-base font-medium">
                                Fullname:
                            </label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                className="mt-1 w-full px-3 py-2 border border-yellow rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-base font-medium">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 w-full px-3 py-2 border border-yellow rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-base font-medium">
                                Message:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 w-full px-3 py-2 border border-yellow rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-blue rounded-md hover:bg-darkblue"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contactus;
