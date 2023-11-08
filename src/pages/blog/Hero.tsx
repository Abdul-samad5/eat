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
          1000,
          "Blogs from Food creators",
          1000,
          "Blogs from Food scientists",
          1000,
          "Blogs from Food nutritionist",
          1000,
          "Blogs from Food lovers",
          1000
        ]}
        speed={50}
        repeat={Infinity}
      />
            </h1>
      </div>
    </div>
   );
}
