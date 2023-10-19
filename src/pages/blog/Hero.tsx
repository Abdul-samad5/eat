import Image from 'next/image';
import React from 'react'


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
   
        <h1 className='text-7xl font-bold text-gray-200 pl-20 font1 pt-60'>BLOGS FROM FOOD EXPERTS</h1>
       
    </div>
</div>
   );
}
