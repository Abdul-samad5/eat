import Image from 'next/image';
import React from 'react'
export default function Counter() {
    const datas =[
        {
            id:1,
            count:'100K+',
            text:"MENU FOOD"
        },
        {
            id:2,
            count:'20K+',
            text:"CHEFS"
        },
        {
            id:3,
            count:'400K+',
            text:"DEALS"
        },
        {
            id:4,
            count:'6.9M+',
            text:"COMPETITIONS"
        },
    ]
   return (
    <div className="h-full mt-10 bg-green">
    
      <div className='flex justify-around items-center text-white '>
        {
            datas.map((data)=>
            <div className='pl-10' key={data.id}>
                 <h1 className='text-5xl'> {data.count}</h1>
                <p className="pr-10 text-xl font-normal">{data.text}</p>
            </div>
           
                )
        }
            <Image
                className="-mr-16"
                src='/Vector (2).png'
                alt='vector'
                width={320}
                height={500} />
      </div>
    </div>
  
   );
}
