import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react'
export default function Affordable() {
   return (
    <div className="relative bg-black screen">
        <div className="absolute onc media">
            <Image
                src="/Vector.png"
                alt="background image"
               width={700}
                height={700}
            />
        </div>
        <div className="mb-52">
            <div className="relative z-10 h-full">
                <h1 className='text-4xl font-bold text-gray-200 pl-20 pt-32'>Affordable,<br /> Quality & Fresh</h1>
                <p className='text-2xl text-white pt-2 pl-20'>Get quality food for the best prices</p>
                <Button text='Join waitlist'/>
            </div>
            <div className="relative float-right -mt-14">
                <h1 className='text-4xl font-bold text-gray-200 pl-20'>Cook & Earn</h1>
                <p className='text-xl text-white pr-20'>Earn on your culinary skills. Get guaranteed <br /> orders on your meals before starting to cook  </p>
                <button className='bg-green mt-7 ml-20'>Join waitlist</button>
            </div>
        </div>
        <div className="relative w-96 pl-20">
                <h1 className='text-4xl font-bold text-gray-200'>Food Creatives</h1>
                <p className='text-xl text-white'>First creator economy for food. Where food creatives earn.</p>
           
            </div>
    </div>
  
   );
}
