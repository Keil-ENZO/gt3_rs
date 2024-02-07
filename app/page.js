"use client";

import ZoomImg from "@/Components/ZoomImg";
import Image from "next/image";
import Logo from "../app/assets/logo.svg";
import Porsche from "../public/porsche-normal.webp";

import "./globals.css";

export default function Home() {
  return (
    <div>
      <div className="p-20 m-20">
        <Image src={Logo} alt="img" className="w-full" />
        <p className="text-[5vw]">911 GT3 RS</p>
      </div>

      <ZoomImg />

      <div className="flex flex-col justify-center items-center h-[85vh]">
        <div>
          <Image src={Porsche} alt="img" className="w-[50vw]" />
        </div>

        <div className="w-[50vw] flex justify-between items-center">
          <div>
            <h2 className="text-[3vw]">525ch</h2>
            <p>Puissance</p>
          </div>
          <div>
            <h2 className="text-[3vw]">3,2s</h2>
            <p>0 à 100km/h</p>
          </div>
          <div>
            <h2 className="text-[3vw]">296km/h</h2>
            <p>Vitesse maximal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
