import React from "react";
import { Icon } from "@iconify/react";

export default function Services() {
  const service = [
    {
      id: 0,
      name: "Poches",
      description: "Des poches pour mettre de l'argent de côté automatiquement",
      icon: "bi:safe",
      color: "#ffbd01",
    },
    {
      id: 1,
      name: "Transferts",
      description:
        "Des transferts gratuits pour envoyer de l'argent à qui vous voulez",
      icon: "mingcute:transfer-line",
      color: "#fd3c2d",
    },
    {
      id: 2,
      name: "Retraits gratuits",
      description:
        "Des retraits gratuits au guichet automatique pour retirer votre argent",
      icon: "uil:money-withdraw",
      color: "#30b67a",
    },
    {
      id: 3,
      name: "Gestion des dépenses",
      description:
        "Un outil de gestion pour mieux suivre et contrôler vos dépenses",
      icon: "uil:graph-bar",
      color: "#ff90a5",
    },
    {
      id: 4,
      name: "Une carte VISA",
      description:
        "Une carte VISA pour payer en ligne et partout dans le monde",
      icon: "f7:creditcard-fill",
      color: "#000000",
    },
  ];

  return (
    <div className="px-20 py-20 flex flex-col justify-center items-center bg-backgroundW">
    <div className="text-center px-40">
      <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-800 via-amber-400 to-blue-800 ">
        L'appli qu'il vous faut pour mieux gérer votre argent
      </h2>
      <p className="text-lg font-medium py-8">
        Dites adieu à la frustration!
        <br />
        Simplifiez votre vie financière en gérant tout votre argent en un seul
        et même endroit.
      </p>
    </div>
    <div className="grid grid-cols-3 gap-10 px-40 py-10 ">
      {service.map((item) => {
        return (
          <div
            key={item.id}
            className={`group border flex flex-col bg-white rounded-lg shadow-md p-4 hover:text-white hover:cursor-pointer 
                  ${
                    item.id === 0
                      ? "hover:bg-[#ffbd01]"
                      : item.id === 1
                      ? "hover:bg-[#fd3c2d]"
                      : item.id === 2
                      ? "hover:bg-[#30b67a]"
                      : item.id === 3
                      ? "hover:bg-[#ff90a5]"
                      : item.id === 4
                      ? "hover:bg-[#000000]"
                      : ""
                  }`}
          >
            <div className="flex justify-start items-center gap-2">
              <Icon
                icon={item.icon}
                style={{ fontSize: "35px" }}
                className="group-hover:text-white"
                // className="text-blue-500"
              />
              <h2 className="text-lg font-bold">{item.name}</h2>
            </div>
            <div>
              <p className="p-1 font-medium">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  );
}
