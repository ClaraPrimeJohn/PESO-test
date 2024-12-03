import React from 'react'
import service from '../assets/service.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import service4 from '../assets/service4.png'

const Heroservice = () => {
    return (
        <div className='py-32 lg:px-32 px-8'>
            <h1 className='text-center text-4xl text-darkblue font-extrabold'>PESO Services</h1>
            <p className='text-center mx-auto py-4 text-lg w-9/12 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deleniti modi non autem dolorem culpa quibusdam necessitatibus reprehenderit, praesentium harum est reiciendis alias deserunt ex veritatis vitae quam? Maiores, eaque.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-8  ">
                <div className="p-8 rounded-md shadow-lg">
                    <img src={service} alt="services" className="w-full h-72 object-cover rounded" />
                    <h4 className='text-orange py-2 text-lg font-bold text-center'>Job Listings</h4>
                    <p className="text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit explicabo, eaque reiciendis placeat ipsa qui. Voluptate at, eius fugit vitae molestias nostrum nemo fuga ipsam adipisci! Ullam, quo tenetur!</p>

                    <div className="flex justify-center mt-4">
                        <button className="text-green nav-effects font-bold">View more</button>
                    </div>  
                </div>

                <div className="p-8 rounded-md shadow-lg">
                    <img src={service2} alt="services" className="w-full h-72 object-cover rounded" />
                    <h4 className='text-orange py-2 text-lg font-bold text-center'>Job Application Process</h4>
                    <p className="text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit explicabo, eaque reiciendis placeat ipsa qui. Voluptate at, eius fugit vitae molestias nostrum nemo fuga ipsam adipisci! Ullam, quo tenetur!</p>
                    <div className="flex justify-center mt-4">
                        <button className="text-green nav-effects font-bold">View more</button>
                    </div>  
                </div>
                <div className="p-8 rounded-md shadow-lg">
                    <img src={service3} alt="services" className="w-full h-72 object-cover rounded" />
                    <h4 className='text-orange py-2 text-lg font-bold text-center'>PESO Activity Announcements</h4>
                    <p className="text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit explicabo, eaque reiciendis placeat ipsa qui. Voluptate at, eius fugit vitae molestias nostrum nemo fuga ipsam adipisci! Ullam, quo tenetur!</p>
                    <div className="flex justify-center mt-4">
                        <button className="text-green nav-effects font-bold">View more</button>
                    </div>  
                </div>
                <div className="p-8 rounded-md shadow-lg">
                    <img src={service4} alt="services" className="w-full h-72 object-cover rounded" />
                    <h4 className='text-orange py-2 text-lg font-bold text-center'>Program Updates and Notifications</h4>
                    <p className="text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit explicabo, eaque reiciendis placeat ipsa qui. Voluptate at, eius fugit vitae molestias nostrum nemo fuga ipsam adipisci! Ullam, quo tenetur!</p>
                    <div className="flex justify-center mt-4">
                        <button className="text-green nav-effects font-bold">View more</button>
                    </div>  
                </div>
            </div>
        </div>


    )
}

export default Heroservice