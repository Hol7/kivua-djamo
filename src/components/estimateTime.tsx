import React from 'react'
import { Icon } from "@iconify/react";

export default function EstimateTime() {
    const service = [ {
        name:"Ouvrez un compte en 1min",
        description:"Créez votre compte et recevez immédiatement une carte virtuelle VISA gratuite.",
        icon: "iconoir:flash-solid"
    }, {
        name:"Commandez votre carte physique",
        description:"Recevez votre carte en 48h, retirez de l'argent et payez sans frais partout dans le monde.",
        icon: "heroicons:credit-card-16-solid"

    },{
        name:"Accédez aux services via l'appli",
        description:"Epargnez, transférez, recevez votre salaire, gérez vos dépenses via l'application mobile.",
        icon: "material-symbols-light:smartphone-outline-sharp"

    }  ]
  return (
    <div className="h-40 bg-black text-white flex justify-center items-center w-full px-20">
      <div className="flex ">
        {service.map((item) => {
          return (
            <div className='p-1 gap-2 flex'>
              <Icon
                icon={item.icon}
                style={{ color: "white", fontSize: "32px" }}
              />
              <div className="">
                <h2 className="text-white">{item.name}</h2>
                <p className="text-gray-600">
                 {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
