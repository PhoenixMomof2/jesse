import React, { useRef }  from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import sunset_mountain from '../images/sunset_mountain.png'
import image_bottom from '../images/image-bottom.png'

export const Intro = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-medium text-cream text-7xl md:text-5xl absolute inset-0 z-10"
      >
        Keep your head in the clouds and dream big!  
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${sunset_mountain})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${image_bottom})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  )
}
