'use client';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

const SlugComponent = () => {
    const [path, setPath] = useState("");
  return (
    <div>
      <Image 
      src={path ? path : "/mens/5.jpg"}
      alt="ecommerce"
      width={400}
      height={400}/>

      <div className='flex items-center justify-evenly mx-auto mt-2'>
        <div className='cursor-pointer w-16 h-16'>
            <Image src={"/mens/4.jpg"} alt="abc" width={60} height={60} onClick={()=>setPath("/mens/4.jpg")}/>
        </div>
        <div className='cursor-pointer w-16 h-16'>
            <Image src={"/mens/5.jpg"} alt="abc" width={60} height={60} onClick={()=>setPath("/mens/5.jpg")}/>
        </div>
        <div className='cursor-pointer w-16 h-16'>
            <Image src={"/mens/3.jpg"} alt="abc" width={60} height={60} onClick={()=>setPath("/mens/3.jpg")}/>
        </div>
      </div>
    </div>
    
  )
}

export default SlugComponent
