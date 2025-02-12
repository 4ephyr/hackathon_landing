'use client'
import { Icon } from '@iconify-icon/react';

export default function Registration() {
  return (
    <main id="register" className="w-full h-screen bg-secondary">
        <div className="text-center py-8">
          <h1 className="text-6xl text-primary font-bold font-primary">Registration</h1>
        </div>
        <div className=''>
        <div className="flex justify-between max-w-1/2 items-center py-5 gap-8">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="font-semibold text-primary text-2xl italic font-primary">Date and Timing :-</h1>
              <p className="text-primary text-xl font-primary italic font-light mt-2">
              February 24, 25 2025 <br />
              Day I - 1 PM <br />
              to <br />
              Day II - 3 PM
              </p>
            </div>
            <div>
              <h1 className="font-semibold text-primary text-2xl italic font-primary">Venue :-</h1>
              <p className="text-primary text-xl font-primary italic font-light mt-2">
              Seminar Hall <br />
              A Block and B Block
              </p>
            </div>
          </div>
          {/* <hr className="text-primary rotate-90  w-[300px]" /> */}
          <div className="flex flex-col h-full">
            <div className='
            flex flex-col gap-8'>
              <div className='flex gap-4 items-center'>
                <Icon className='text-secondary bg-primary p-3 rounded-full' icon="material-symbols:call" width="32" height="32" />
                <p className='text-primary font-semibold text-xl'>+91  94977 97015  <br />  +91 80865 85030</p>
              </div>
              <div className='flex gap-4 items-center'>
                <Icon className='text-secondary bg-primary p-3 rounded-full' icon="material-symbols:mail-rounded" width="32" height="32" />
                <p className='text-primary font-semibold text-xl'>takedown.cse@uec.ac.in</p>
              </div>
              <div className='flex gap-4 items-center'>
                <Icon className='text-secondary bg-primary p-3 rounded-full' icon="material-symbols:location-on-rounded" width="32" height="32" />
                <p className='text-primary font-semibold text-xl'>Universal Engineering College <br />
                Vallivattom, Thrissur</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </main>
  )
}
