import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <div className=' w-full h-full flex mt-24 ' >
        <div className='w-full flex flex-col justify-center gap-8 pl-40'>
        <div className='flex flex-col justify-start items-start '>
            <h2 className='text-8xl text-left text-transparent  bg-clip-text font-bold bg-gradient-to-r from-yellow-400 via-purple-500 to-grn '>No stress,
        </h2>
            <h2 className='text-8xl text-left text-transparent  bg-clip-text font-bold bg-gradient-to-r from-yellow-400 via-purple-500 to-grn '>
            Djamo Rek!</h2>

        </div>
        <div>
            <p className='font-normal text-start text-lg '>
            L'appli pour mieux gérer votre argent. <br/>
            Ouvrez un compte gratuit maintenant en un clic.
            </p>
        </div>
        <div className='flex items-center gap-3'>
            <input value="+225" className='border-2  rounded-lg text-lg p-1 w-16' />
            <input placeholder='Votre numéro de téléphone'  className='border-2 px-4 rounded-lg text-sm py-2 p-1 w-2/5' />
            <button className='bg-blue-700 text-white text-lg  px-6 py-1 hover:bg-buttonBlue  rounded-full'>
            Ouvrir un compte gratuit
            </button>


        </div>
        <div>
            <Image src="/image/eco_logo_blue.jpg" height={10} width={200}  alt='ecobank'/>
        </div>

        </div>
        <div className='w-full  flex justify-start align-bottom items-end relative'>
        {/* <div className='h-full'> */}
        <Image src="/image/djamo_app_in_phone_sn.svg" width={0} height={0} style={{ height:"100%", width:"50%" ,padding:5 }} alt='hero'/>
        {/* </div> */}
        <div className='h-full  flex w-full justify-center items-end absolute  '>
              <Image src="/image/ecobank_djamo.png" width={220} height={5} 
            style={{ height:"350px" , marginTop:10 ,  }} 
            alt='hero'/>
        </div>
       
           
          
        </div>
      
    </div>
  )
}
