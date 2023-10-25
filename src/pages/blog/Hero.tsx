import React from 'react'
import { TypeAnimation } from 'react-type-animation';
export default function Hero() {
   return (
    <div className='blog h-screen mb-10'>
        <div className="relative z-10 h-full">
             <h1 className='text-7xl font-bold text-gray-200 font1 pt-60 text-center'>
                 <TypeAnimation
        sequence={[
          "Blogs from Food experts",
          5000,
          "Blogs from Food creators",
          5000,
          "Blogs from Food scientists",
          5000,
          " Blogs from Food nutritionist",
          5000,
          " Blogs from Food lovers",
          5000
        ]}
        speed={60}
        repeat={Infinity}
      />
            </h1>
      </div>
    </div>
   );
}
