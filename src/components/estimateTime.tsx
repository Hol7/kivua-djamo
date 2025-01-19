"use client"

import React from 'react'
import { Icon } from "@iconify/react";

export default function EstimateTime() {
  const service = [
    {
      id: 0,
      name: "Ouvrez un compte en 1min",
      description:
        "Créez votre compte et recevez immédiatement une carte virtuelle VISA gratuite.",
      icon: "iconoir:flash-solid",
    },
    {
      id: 1,
      name: "Commandez votre carte physique",
      description:
        "Recevez votre carte en 48h, retirez de l'argent et payez  sans frais partout dans le monde.",
      icon: "heroicons:credit-card-16-solid",
    },
    {
      id: 2,
      name: "Accédez aux services via l'appli",
      description:
        "Epargnez, transférez, recevez votre salaire, gérez vos dépenses via l'application mobile.",
      icon: "material-symbols:smartphone",
    },
  ];
  return (
    <div className="h-48 bg-black text-white flex justify-center items-center  w-full px-20">
      <div className="flex  px-20 gap-6">
        {service.map((item) => {
          return (
            <div key={item.id} className=" gap-2 flex justify-start items-start ">
              <Icon
                icon={item.icon}
                style={{ color: "white", fontSize: "60px" }}
              />
              <div className="pt-4">
                <h2 className="text-white">{item.name}</h2>
                <p className="text-gray-600 pt-1">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
