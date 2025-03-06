"use client";

import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Logo from "../app/assets/logo.svg";
import "./globals.css";

const GT3RSPage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 7]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <div className="md:my-20 p-10 flex justify-center items-start flex-col w-full">
        <Image src={Logo} alt="img" className="w-[80%] max-w-[1024px]" />
        <h2>911 GT3 RS</h2>
      </div>

      <div ref={container} className="h-[300vh] w-[100%] relative mb-[5vh]">
        <div className="sticky top-0 h-[100vh] overflow-hidden">
          <motion.div
            style={{ scale: scale4 }}
            className="w-[100%] h-[100%] absolute top-0 flex items-center justify-center"
          >
            <div className="w-[35vw] h-[25vw] relative">
              <Image
                src="/picture8.webp"
                alt="img"
                fill
                placeholder="blur"
                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ scale: scale5 }}
            className="w-[100%] h-[100%] absolute top-0 m-5 flex items-center justify-center"
          >
            <div className="w-[25vw] h-[15vw] top-[20vh] right-[32vw] relative">
              <Image
                src="/picture2.webp"
                alt="img"
                fill
                placeholder="blur"
                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ scale: scale6 }}
            className="w-[100%] h-[100%] absolute top-0 m-5 flex items-center justify-center"
          >
            <div className="w-[25vw] h-[15vw] top-[-35vh] right-[-35vw] relative">
              <Image
                src="/picture9.webp"
                alt="img"
                fill
                placeholder="blur"
                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ scale: scale6 }}
            className="w-[100%] h-[100%] absolute top-0 m-5 flex items-center justify-center"
          >
            <div className="w-[25vw] h-[15vw] top-[-5vh] left-[30vw] relative">
              <Image
                src="/picture10.webp"
                alt="img"
                fill
                placeholder="blur"
                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ scale: scale8 }}
            className="w-[100%] h-[100%] absolute top-0 m-5 flex items-center justify-center"
          >
            <div className="w-[25vw] h-[15vw] top-[-35vh] right-[35vw] relative">
              <Image
                src="/picture1.webp"
                alt="img"
                fill
                placeholder="blur"
                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ scale: scale9 }}
            className="w-[100%] h-[100%] absolute top-0 m-5 flex items-center justify-center"
          >
            <div className="w-[28vw] h-[18vw] top-[35vh] right-[-5vw] relative">
              <Image
                src="/picture5.webp"
                alt="img"
                fill
                placeholder="blur"
                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ scale: scale6 }}
            className="w-[100%] h-[100%] absolute top-0 m-5 flex items-center justify-center"
          >
            <div className="w-[28vw] h-[18vw] top-[35vh] right-[-35vw] relative">
              <Image
                src="/picture4.webp"
                alt="img"
                fill
                placeholder="blur"
                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col justify-center items-center mb-[20px]">
        <div className="w-full flex flex-col justify-around md:items-center md:flex-row">
          <div>
            <h2 className=" value1">525 ch</h2>
            <p className="text-[2rem]">Puissance</p>
          </div>

          <div>
            <h2 className=" value2">3.2 s</h2>
            <p className="text-[2rem]">0 à 100km/h</p>
          </div>

          <div>
            <h2 className=" value3">296 km/h</h2>
            <p className="text-[2rem]">Vitesse maximal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GT3RSPage;
