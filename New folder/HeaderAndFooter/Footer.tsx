import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='bg-neutral-950 pt-20'>
      <Image 
        className=""
        src='/Logo.png'
        alt='logo'
        width={213}
        height={60}
      />
       {/* <ul className='text-white flex'>
          <li className='pr-14'>
          <Link href="/about">About us</Link>
          </li>
           <li className='pr-14'>
          <Link href="/">Service</Link>
          </li>
          <li className='pr-14'>
          <Link href="/blog">Blog</Link>
          </li>
          <li className='pr-2'>
          <Link href="/">Contact</Link>
          </li>
        </ul> */}
    </div>
  )
}

export default Footer