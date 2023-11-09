import Image from 'next/image'
import React from 'react'

export default function Unique() {
  return (
    <div className="bg-green h-full flex justify-around pt-20 pb-32">
        <div className="ml-38 mt-10">
            <Image
            src='/Body.png'
            alt='body'
            width={300}
            height={600}
            loading='lazy'
            style={{objectFit: "contain"}}
            />
        </div> 
        <div className="text-white mt-40">
          <h1 className="text-5xl mb-8">Why we are unique?</h1>
          <p className="width mb-8">Pusheat isn&apos;t just a platform; it&apos;s a movement. Like TikTok for food creatives, chefs, and anyone ready to showcase and sell their culinary masterpieces, we&apos;re setting a new standard in the culinary world.</p>
          <p className="width mb-8">Pusheat is the pioneering food creator platform in Africa. This groundbreaking concept opens up a world of opportunities for both food lovers and culinary creators on the continent.</p>
              <div className="grid grid-cols-2 gap-1 mr-14">
                  <div className="flex">
                    <Image 
                      src='/Truck.png'
                      loading='lazy'
                      alt='truck'
                      className='bg-green rounded-full p-2 mb-11'
                      width={70}
                      height={70}
                    />
                 
                    <p className='pt-5'>Savings and convenience</p>
                  </div>
                  <div className="flex">
                  <Image 
                      src='/Timer.png'
                      alt='truck'
                      className='bg-green rounded-full p-2 mb-11'
                      width={70}
                      height={70}
                      loading='lazy'

                    />
                    
                    <p className='pt-5'>Variety and exploration</p>
                  </div>
                  <div className="flex">
                  <Image 
                      src='/Hamburger.png'
                      alt='truck'
                      className='bg-green rounded-full p-2 mb-11'
                      width={70}
                      height={70}
                      loading='lazy'
                    />
                    
                    <p className='pt-5'>All meals are freshly made</p>
                  </div>
                  <div className="flex">
                    <Image 
                        src='/Factory.png'
                        alt='truck'
                        className='bg-green rounded-full p-2 mb-11'
                        width={70}
                        height={70}
                        loading='lazy'
                      />
                    
                    <p className='pt-5'>Interactive food deals</p>
                  </div>
              </div>
        </div> 
    </div>
  )
}
