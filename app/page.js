"use client"; // Marque le composant comme étant rendu côté client

import Image from "next/image";
import ZoomImg from "../Components/ZoomImg";
import Logo from "../app/assets/logo.svg";

import "./globals.css";

export default function Home() {
  return (
    <div>
      <div className="p-20 m-20">
        <Image src={Logo} alt="img" className="w-full" />
        <p className="text-5xl">911 GT3 RS</p>
      </div>

      <ZoomImg />

      <div className="flex flex-col justify-center items-center mb-[20px]">
        <div className="w-[50vw] flex justify-between items-center">
          <div>
            <h2 className="text-[3vw] value1">
              525
              <span> ch</span>
            </h2>
            <p className="text-xl">Puissance</p>
          </div>
          <div>
            <h2 className="text-[3vw] value2">
              3.2
              <span> s</span>
            </h2>
            <p className="text-xl">0 à 100km/h</p>
          </div>
          <div>
            <h2 className="text-[3vw] value3">
              296
              <span> km/h</span>
            </h2>
            <p className="text-xl">Vitesse maximal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
