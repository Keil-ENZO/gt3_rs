"use client";

import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Picture1 from "../public/picture1.webp";
import Picture10 from "../public/picture10.webp";
import Picture2 from "../public/picture2.webp";
import Pictur4 from "../public/picture4.webp";
import Pictur5 from "../public/picture5.webp";
import Picture8 from "../public/picture8.webp";
import Picture9 from "../public/picture9.webp";

const ZoomImg = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // const pictures = [
  //   {
  //     src: Picture1,
  //     scale: scale4,
  //   },
  //   {
  //     src: Picture2,
  //     scale: scale5,
  //   },
  //   {
  //     src: Picture3,
  //     scale: scale6,
  //   },
  //   {
  //     src: Picture4,
  //     scale: scale6,
  //   },
  //   {
  //     src: Picture5,
  //     scale: scale8,
  //   },
  //   {
  //     src: Picture6,
  //     scale: scale9,
  //   },
  // ];

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={container} className="h-[300vh] relative mb-[100vh]">
      <div className="sticky top-0 h-[100vh] overflow-hidden">
        <motion.div
          style={{ scale: scale4 }}
          className=" w-[100%] h-[100%] absolute top-0 flex items-center justify-center"
        >
          <div className="w-[35vw] h-[25vw] relative">
            <Image
              src={Picture8}
              alt="img"
              fill
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale5 }}
          className=" w-[100%] h-[100%] absolute top-[20vh] right-[32vw] m-5 flex items-center justify-center"
        >
          <div className="w-[25vw] h-[15vw] relative">
            <Image
              src={Picture2}
              alt="img"
              fill
              placeholder="blur"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale6 }}
          className=" w-[100%] h-[100%] absolute top-[-35vh] right-[-35vw] m-5 flex items-center justify-center"
        >
          <div className="w-[25vw] h-[15vw] relative">
            <Image
              src={Picture9}
              alt="img"
              fill
              placeholder="blur"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale6 }}
          className=" w-[100%] h-[100%] absolute top-[-5vh] left-[30vw] m-5 flex items-center justify-center"
        >
          <div className="w-[25vw] h-[15vw] relative">
            <Image
              src={Picture10}
              alt="img"
              fill
              placeholder="blur"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale8 }}
          className=" w-[100%] h-[100%] absolute top-[-35vh] right-[35vw] m-5 flex items-center justify-center"
        >
          <div className="w-[25vw] h-[15vw] relative">
            <Image
              src={Picture1}
              alt="img"
              fill
              placeholder="blur"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale9 }}
          className=" w-[100%] h-[100%] absolute top-[35vh] right-[-5vw] m-5 flex items-center justify-center"
        >
          <div className="w-[28vw] h-[18vw] relative">
            <Image
              src={Pictur5}
              alt="img"
              fill
              placeholder="blur"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale6 }}
          className=" w-[100%] h-[100%] absolute top-[35vh] right-[-35vw] m-5 flex items-center justify-center"
        >
          <div className="w-[28vw] h-[18vw] relative">
            <Image
              src={Pictur4}
              alt="img"
              fill
              placeholder="blur"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ZoomImg;
