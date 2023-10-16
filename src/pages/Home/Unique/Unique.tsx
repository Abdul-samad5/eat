import Image from 'next/image'
import React from 'react'

export default function Unique() {
  return (
    <div className="bg-green h-full flex justify-around pt-20">
        <div className="ml-38 mt-10">
       
            <Image
            src='/Body.png'
            alt='body'
            width={250}
            height={500}
            style={{objectFit: "contain"}}
            />
        </div> 
        <div className="text-white mt-40">
          <h1 className="text-5xl mb-8">why we are unique?</h1>
          <p className="width mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          <p className="width mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
              <div className="grid grid-cols-2 gap-1 mr-14">
                  <div className="flex">
                    <img src="/Truck.png" alt="ham" className='bg-green rounded-full p-2 mb-11' />
                    <p className='pt-5'>Fast Delivery</p>
                  </div>
                  <div className="flex">
                    <img src="/Timer.png" alt="ham" className='bg-green rounded-full p-2 mb-11' />
                    <p className='pt-5'>24/7 services</p>
                  </div>
                  <div className="flex">
                    <img src="/Hamburger.png" alt="ham" className='bg-green rounded-full p-2 mb-11 ' />
                    <p className='pt-5'>Fresh made food</p>
                  </div>
                  <div className="flex">
                    <img src="/Factory.png" alt="ham" className='bg-green rounded-full p-2 mb-11' />
                    <p className='pt-5'>Quality maintain</p>
                  </div>
              </div>
        </div> 
    </div>
  )
}
