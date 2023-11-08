import Image from 'next/image'
import React from 'react'

function Download() {
  return (
    <div className="flex download justify-around mt-10">
        <div>
          <Image
            src='/shot.png'
            alt="screen"
            width={400}
            loading='eager'
            height={616}
            />
        </div>
        <div className="text-lighten mt-44">
        {/* w-96 */}
          <h1 className="text-5xl font-bold w-96  mb-14">Download our app and join the Live Deals</h1>
          <div className="flex flex-row">
              <Image
              className="pr-5"
              src='/google.png'
              alt="google"
              width={170}
              loading='eager'
              height={50}
              />
               <Image
              src='/applestore.png'
              alt="apple"
              loading='eager'
              width={170}
              height={50}
              />
          </div>
        </div>
      </div>
  )
}

export default Download