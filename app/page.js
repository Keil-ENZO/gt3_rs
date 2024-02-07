"use client";

import ZoomImg from "@/Components/ZoomImg";
import Image from "next/image";
import Logo from "../app/assets/logo.svg";
import Porsche from "../public/porsche-normal.webp";

import "./globals.css";

export default function Home() {
  let chevaux = 525;
  let seconde = 3.2;
  let vitesse = 296;

  // effet de conteur pour les chiffres
  const counter = () => {
    let i = 0;
    let j = 0;
    let k = 0;
    setInterval(() => {
      if (i < chevaux) {
        i++;
        document.querySelector(".value1").innerHTML = i + " ch";
      }
      if (j < seconde) {
        j += 0.1;
        document.querySelector(".value2").innerHTML = j.toFixed(1) + " s";
      }
      if (k < vitesse) {
        k++;
        document.querySelector(".value3").innerHTML = k + " km/h";
      }
    }, 10);
  };
  counter();

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
            <h2 className="text-[3vw] value1">
              {chevaux}
              <span> ch</span>
            </h2>
            <p>Puissance</p>
          </div>
          <div>
            <h2 className="text-[3vw] value2">
              {seconde}
              <span> s</span>
            </h2>
            <p>0 à 100km/h</p>
          </div>
          <div>
            <h2 className="text-[3vw] value3">
              {vitesse}
              <span> km/h</span>
            </h2>
            <p>Vitesse maximal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
