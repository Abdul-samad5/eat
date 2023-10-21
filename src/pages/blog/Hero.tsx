import Image from 'next/image';
import React from 'react'
import Typed from 'react-typed';

export default function Hero() {
   return (
    <div className="relative h-screen hero mb-24">
        <div className="absolute inset-0">
            <Image
                src="/background.png"
                alt="background image"
                fill
            />
        </div>
    <div className="relative z-10 h-full">
   
        <h1 className='text-7xl font-bold text-gray-200 font1 pt-60 text-center'>
        <Typed className="typed-text"
            strings={["We’d love to hear from you", "WE CARE ABOUT", "BLOGS FROM FOOD EXPERTS"]}
            typeSpeed={40}
            backSpeed={60} 
             loop   
            /> 
        </h1>
       
    </div>
</div>
   );
}
