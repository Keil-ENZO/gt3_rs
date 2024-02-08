"use client"; // Marque le composant comme étant rendu côté client

import Image from "next/image";
import { useEffect } from "react";
import ZoomImg from "../Components/ZoomImg";
import Logo from "../app/assets/logo.svg";
import Porsche from "../public/porsche-normal.webp";

import "./globals.css";

export default function Home() {
  let chevaux = 525;
  let seconde = 3.2;
  let vitesse = 296;

  let scroll = 0;

  useEffect(() => {
    const counter = () => {
      let i = 0;
      let j = 0;
      let k = 0;

      const interval = setInterval(() => {
        if (i < 525) {
          i += 1;
          document.querySelector(".value1").innerText = i + " ch";
        }
        if (j < 3.2) {
          j += 0.01;
          document.querySelector(".value2").innerText = j.toFixed(1) + " s";
        }
        if (k < 296) {
          k += 1;
          document.querySelector(".value3").innerText = k + " km/h";
        }
        if (i === 525 && j === 3.2 && k === 296) {
          clearInterval(interval);
        }
      }, 10);

      return () => clearInterval(interval);
    };

    window.addEventListener("scroll", () => {
      if (window.scrollY > scroll) {
        counter();
      }
      scroll = window.scrollY;
    });
  }, []);

  return (
    <div>
      <div className="p-20 m-20">
        <Image src={Logo} alt="img" className="w-full" />
        <p className="text-5xl">911 GT3 RS</p>
      </div>

      <ZoomImg />

      <div className="flex flex-col justify-center items-center h-screen">
        <div>
          <Image src={Porsche} alt="img" width={800} height={300} />
        </div>

        <div className="w-[50vw] flex justify-between items-center">
          <div>
            <h2 className="text-[3vw] value1">
              {chevaux}
              <span> ch</span>
            </h2>
            <p className="text-xl">Puissance</p>
          </div>
          <div>
            <h2 className="text-[3vw] value2">
              {seconde}
              <span> s</span>
            </h2>
            <p className="text-xl">0 à 100km/h</p>
          </div>
          <div>
            <h2 className="text-[3vw] value3">
              {vitesse}
              <span> km/h</span>
            </h2>
            <p className="text-xl">Vitesse maximal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
