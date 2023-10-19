import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Card() {
    const cards =[
        {
            id:1,
            img:'/Frame.png',
            author:"Author name here . Just now",
            text:"Our top 10 food deals",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            link:'Read More'
        },
        {
            id:2,
            img:'/Frame 2.png',
            author:"Author name here . 5 min",
            text:"How to get the best deals",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            link:'Read More'
        },
        {
            id:3,
            img:'/Frame 3.png',
            author:"Author name here . Yesterday",
            text:"Another nice blog title",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            link:'Read More'
        },
        {
            id:4,
            img:'/Frame 4.png',
            author:"Author name here . 3 days ago",
            text:"Our top 10 food deals",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            link:'Read More'
        },
        {
            id:5,
            img:'/Frame 5.png',
            author:"Author name here . 5 min",
            text:"How to get the best deals",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            link:'Read More'
        },
        {
            id:6,
            img:'/Frame 6.png',
            author:"Author name here . 20 min",
            text:"Another nice blog title",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            link:'Read More'
        },
        {
            id:7,
            img:'/Frame 6.png',
            author:"Author name here . 20 min",
            text:"Another nice blog title",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            link:'Read More'
        },
        {
            id:8,
            img:'/Frame.png',
            author:"Author name here . 20 min",
            text:"Another nice blog title",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            link:'Read More'
        },
        {
            id:9,
            img:'/Frame 4.png',
            author:"Author name here . 20 min",
            text:"Another nice blog title",
            para:'Lorem ipsum dolor sit amet.Nisi porta arcu laoreet pharetra velit faucibus. Nisi porta laoreet pulvinar feugiat felis vel...',
            link:'Read More'
        }
    ]
  return (
    <>
     <div className='grid grid-cols-3 grid-rows-3 gap-x-1 gap-y-10'>
        {
            cards.map((card)=>(
                // <div>
                    <div key={card.id} className="w-96 ml-7 rounded-xl border-solid border-2 pb-10 pt-2 pr-3 pl-3 border-borderColor" >
                        <Image
                            src={card.img}
                            height={233}
                            width={370}
                            alt='card'
                            />
                            <p className="text-cardText text-xs mt-5 mb-4">{card.author}</p>
                            <h1 className='text-cardHead text-2xl font-bold mb-3'>{card.text}</h1>
                            <p className='text-cardPara mb-4'>{card.para}</p>
                            <Link href="/" className="text-green underline">{card.link}</Link>
                    </div>
                    
                // </div>
                
            ))
        }
    </div>
   <div className="ml-96 mb-40">
   <Button text='See more'/>
   </div>
    </>
  )
}

export default Card