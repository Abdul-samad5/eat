import Image from 'next/image';
import React from 'react'
export default function Counter() {
    const datas =[
        {
            id:1,
            dount:'100K+',
            text:"MENU FOOD"
        },
        {
            id:2,
            dount:'20K+',
            text:"CHEFS"
        },
        {
            id:3,
            dount:'400K+',
            text:"DEALS"
        },
        {
            id:4,
            dount:'6.9M+',
            text:"COMPETITIONS"
        },
    ]
   return (
    <div className="mt-10 bg-green h-72">
    
      <div className='flex justify-around items-center text-white '>
        {
            datas.map((data, index)=>
            <div className='pl-10' key={`${data.id}+${index}`}>
                 <h1 className='text-5xl'> {data.dount}</h1>
                <p className="pr-10 text-xl font-normal">{data.text}</p>
            </div>
                )
        }
             <Image
                className="-mr-8"
                src='/Vector (2).png'
                alt='vector'
                width={190}
                height={290} />
      </div>
    </div>
  
   );
}
