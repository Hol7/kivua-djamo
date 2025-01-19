import Image from 'next/image'
import React from 'react'

function NavBar() {
  const navList = [
    "Accueil",
    "Produits & Services",
    "Tarifs",
    "Témoignagnes",
    "Points relais",
    "Apprendre",
    "FAQs",
  ]; 

  return (
    <div className="px-20 border shadow-md bg-white fixed z-10 left-0 top-0  flex  w-full h-24 justify-between gap-10 items-center">
      <div className='hover:cursor-pointer'>
        <Image src="/image/djamo-logo-black.svg" height={50} width={100} alt="Djamo" />
      </div>
      <div className="flex justify-center gap-8 items-center">
        {navList.map((item) => {
          return (
            <ul className=" hover:cursor-pointer hover:bg-slate-100 py-2 px-1 hover:text-blue-700">
              <li className="text-[16px] font-normal">{item}</li>
            </ul>
          );
        })}
      </div>
      <div>
        <button className=" bg-blue-700 text-white px-6 py-5 hover:bg-buttonBlue font-semibold rounded-full">
          Ouvrir un compte gratuit
        </button>
      </div>
    </div>
  );
}

export default NavBar