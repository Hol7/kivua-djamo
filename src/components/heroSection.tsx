import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <div className='bg-red-300 w-full h-full flex mt-24' >
        <div className='w-1/2 bg-pink-500'>
        left

        </div>
        <div className='w-1/2 py-10 px-10 bg-yellow-300 flex justify-start align-bottom items-end relative'>
        {/* <div className='h-full'> */}
        <Image src="/image/djamo_app_in_phone_sn.svg" width={0} height={0} style={{ height:"100%", width:"45%" ,padding:10 }} alt='hero'/>
        {/* </div> */}
        <div className='h-full  flex w-full justify-center items-end absolute  '>
              <Image src="/image/ecobank_djamo.png" width={200} height={5} 
            style={{ height:"300px" , marginTop:10 , marginRight:100 }} 
            alt='hero'/>
        </div>
       
           
          
        </div>
      
    </div>
  )
}
