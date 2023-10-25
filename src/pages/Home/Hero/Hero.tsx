import React from 'react'


export default function Hero() {
   return (
    <div className='hero  h-screen'>
         <div className="relative z-10 h-full">
         <p className='text-2xl text-white pt-40 font1 pl-36'>You will be amazed</p>
         <h1 className='font-extrabold text-gray-200  font2 text-7xl text-center'>QUALITY, FRESH @BEST PRICES</h1>
         <p className='text-2xl text-white float-right font2 mr-36'>and yes, <br />
             we do swallow too.</p>
            <button className='bg-green float-right mt-24 font2 btn'>Join waitlist</button>
     </div>

    </div>
   );
}
