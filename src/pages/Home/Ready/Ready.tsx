import Image from 'next/image'
import React from 'react'

export default function Ready() {
  return (
    <div className='h-screen mb-40'>
            <div className="ml-20 mr-20 mt-24 mb-20">
                 <fieldset className="border-2 text-center border-green">
                    <legend className='text-green text-5xl font-extrabold pr-10 pl-10 nexa1'>Ready for the best food deals?</legend>
                    <p className="pr-80 mt-6 pl-80 mb-24 nexa">{"Scrolling through the exciting list of deals on Pusheat is so much fun. Here are 3 steps to get the best food deals. "}</p>
                       <div className='flex justify-around flex-grow-0'>
                        <div className="mb-24">
                            <Image 
                            src='/Hamburger.png'
                            alt='truck'
                            className='bg-green rounded-full p-2 ml-36 mb-11'
                            width={70}
                            height={70}
                            />
                            <h1 className='text-green uppercase text-3xl font-bold pl-20'>Discover</h1>
                            <p className='pl-16 w-72 pt-4'>Browse through a variety of delicious chef-created food deals. From local favorites to exotic cuisines, there&apos;s something for everyone.</p>
                        </div>
                        <div>
                          <Image 
                            src='/Timer.png'
                            alt='truck'
                            className='bg-green rounded-full p-2 ml-28 mb-11'
                            width={70}
                            height={70}
                            />
                            <h1 className='text-green uppercase text-3xl font-bold pl-18'>Join deal</h1>
                            <p className='pt-4 w-72 pl-10 pl-5'>Top up your wallet and join food deals you love. You can also buy immediately if you can&apos;t wait. Your money will not be deducted until the deal is successful.</p>
                        </div>
                        <div>
                        <Image 
                            src='/Truck.png'
                            alt='truck'
                            className='bg-green rounded-full p-2 mb-11 ml-28'
                            width={70}
                            height={70}
                            />
                            <h1 className='text-green uppercase text-3xl font-bold pl-18'>Deliver</h1>
                            <p className='pl-8 pr-5 w-72 pt-4'>Successful deal? Sit back and relax while the chef prepares your order.  Your meal will be delivered straight to your preferred address</p>
                        </div>
                       </div>
                 </fieldset>
            </div>
    </div>
  )
}