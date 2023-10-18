import React from 'react'

type Props = {
    text: string;
  };
export default function Button({text}: Props) {
   return (
   <div>
        <button className='bg-green ml-20 mt-11 '>{text}</button>   
   </div>
   
   );
}
