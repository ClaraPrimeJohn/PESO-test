import React from 'react'
import pesoLogo from '../assets/peso-logo.png'

const Aboutus = () => {
  return (
    <div className='pt-36 lg:px-32 px-8'>
      <h1 className='text-darkblue uppercase text-5xl text-center font-extrabold'>City Government of Caloocan Public Employment Service Office (PESO)</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 my-24">
        <div className="flex flex-col justify-center text-center">
          <h4 className="text-white bg-orange my-6 p-2 rounded-lg text-2xl font-bold">Mission</h4>
          <p className="text-left text-lg">
            To facilitate equal employment opportunities to the province's constituents through Job Matching and Coaching, employability enhancement and referrals for livelihood or training, and promotion of industrial peace through tripartism.
          </p>
          <h4 className="text-white bg-green my-6 p-2 rounded-lg text-2xl font-bold">Vision</h4>
          <p className="text-left text-lg">
            Creating the Province of Bulacan as a Province that provides reliable and sustainable employment facilitation services that contribute to poverty alleviation and economic development in commitment and accordance with the People's Agenda 10.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img src={pesoLogo} alt="Peso Logo" className="max-w-full h-auto" />
        </div>
      </div>

    </div>
  )
}

export default Aboutus