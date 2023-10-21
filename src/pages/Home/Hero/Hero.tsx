import Image from 'next/image';
import React from 'react'


export default function Hero() {
   return (
    <div className="relative h-screen hero">
        <div className="absolute inset-0">
            <Image
                src="/background.png"
                alt="background image"
                fill
            />
        </div>
    <div className="relative z-10 h-full">
     <p className='text-2xl text-white pt-40 font2 pl-36'>You will be amazed</p>
        <h1 className='font-bold text-gray-200  font1 text-6xl text-center'>QUALITY, FRESH @BEST PRICES</h1>
        <p className='text-2xl text-white float-right font2 mr-36'>and yes, <br />
we do swallow too.</p>
<button className='bg-green float-right mt-24 font1 btn'>Try it out</button>
    </div>
</div>
   );
}
