"use client";

import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Picture1 from "../app/assets/picture1.png";
import Picture10 from "../app/assets/picture10.png";
import Picture2 from "../app/assets/picture2.png";
import Pictur4 from "../app/assets/picture4.png";
import Pictur5 from "../app/assets/picture5.png";
import Picture8 from "../app/assets/picture8.png";
import Picture9 from "../app/assets/picture9.png";

const ZoomImg = () => {
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
    <div ref={container} className="h-[300vh] w-full relative mb-[100vh]">
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
          className=" w-[100%] h-[100%] absolute top-0 m-5 flex items-center justify-center"
        >
          <div className="w-[25vw] h-[15vw] top-[20vh] right-[32vw] relative">
            <Image
              src={Picture2}
              alt="img"
              fill
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale6 }}
          className=" w-[100%] h-[100%] absolute top-0 m-5 flex items-center justify-center"
        >
          <div className="w-[25vw] h-[15vw] top-[-35vh] right-[-35vw] relative">
            <Image
              src={Picture9}
              alt="img"
              fill
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale6 }}
          className=" w-[100%] h-[100%] absolute top-0 m-5 flex items-center justify-center"
        >
          <div className="w-[25vw] h-[15vw] top-[-5vh] left-[30vw] relative">
            <Image
              src={Picture10}
              alt="img"
              fill
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale8 }}
          className=" w-[100%] h-[100%] absolute top-0 m-5 flex items-center justify-center"
        >
          <div className="w-[25vw] h-[15vw] top-[-35vh] right-[35vw] relative">
            <Image
              src={Picture1}
              alt="img"
              fill
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale9 }}
          className=" w-[100%] h-[100%] absolute top-0 m-5 flex items-center justify-center"
        >
          <div className="w-[28vw] h-[18vw] top-[35vh] right-[-5vw] relative">
            <Image
              src={Pictur5}
              alt="img"
              fill
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ scale: scale6 }}
          className=" w-[100%] h-[100%] absolute top-0 m-5 flex items-center justify-center"
        >
          <div className="w-[28vw] h-[18vw] top-[35vh] right-[-35vw] relative">
            <Image
              src={Pictur4}
              alt="img"
              fill
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ZoomImg;
