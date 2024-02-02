"use client";

import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./globals.css";


export default function Home() {

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: "#test",
    start: "top top",
    end: "bottom top",
    duration: 3,
    rotation: 360,
  });




  return (
    <main className="min-h-screen">
      <div id="smooth-wrapper">
        <div className="h-[100vh]">
          <h1 className="title">ScrollSmoother</h1>
          </div>

            <div id="test" className="box box-a p-24 bg-neutral-600 w-20 h-20">a</div>
            <div className="box box-b p-24 bg-blue-600  w-20 h-20">b</div>
            <div className="box box-c p-24 bg-green-600  w-20 h-20">c</div>
      </div>
    </main>
  );
}
