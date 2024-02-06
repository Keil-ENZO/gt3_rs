"use client";

import ZoomImg from "@/Components/ZoomImg";
import Image from "next/image";
import Logo from "../public/logo.svg";

import "./globals.css";

export default function Home() {
  return (
    <div>
      <div className="p-20 m-20">
        <Image src={Logo} alt="img" className="w-full" />
        <p className="text-[5vw]">911 GT3 RS</p>
      </div>

      <ZoomImg />
    </div>
  );
}
