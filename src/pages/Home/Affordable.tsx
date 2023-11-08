import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react'
export default function Affordable() {
   return (
  <div className="flex justify-around afford bg-black text-white">

    <div className="-ml-20 mt-16">
        <div>
            <h1 className='text-4xl font-extrabold text-gray-200 font2 mb-5'>Irresistible <br /> 
food deals</h1>
            <p className='text-xl mb-5 nexaRegular font-normal'>Get 5 star quality meals at the best prices <br /> possible.</p>
          <div className="-mt-10 -ml-20"> <Button text='Join waitlist'/></div> 
        </div>
        <div className="w-80 mt-60">
            <h1 className='text-3xl font-bold text-gray-200'>Food Creatives</h1>
           <p className='text-white font2 font-normal text-xl'>Africa&apos;s first food creator economy where food creatives earn.</p>
        </div>
        
    </div>
  <div className=" mt-64 -mr-32">
                <h1 className='text-4xl font-extrabold text-gray-200 pl-48 font2'>Cook & Earn</h1>
              <p className='text-xl text-white nexaRegular font-normal pr-20'>Earn on your culinary skills. Get guaranteed <br /> orders on your meals before starting to cook  </p>
              <button className='bg-green mt-7 ml-24'>Become a chef</button>
    </div>
</div>

   );
}



{/*<div className="relative afford h-screen">
<div className="absolute inset-0">
    <Image
        src="/Vector.png"
        alt="background image"
        fill
    />
</div>
<div className="relative z-10 flex flex-col items-center justify-center h-full">
    <h1 className='text-2xl font-bold text-gray-200'>Next JS 13 Background Image with Tailwind CSS </h1>
    <p className='mt-4 text-sm text-white'>lorem ipsom Next JS 13 Background Image with Tailwind CSS</p>
</div>
</div> */}