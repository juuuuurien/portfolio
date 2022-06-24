import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SvgPortrait from "./SvgPortrait";
import Image from "next/image";
import Portrait from "../../../public/assets/portrait.svg";
import ToolBubble from "../../ToolBubble/ToolBubble";

const Homepage = ({ setNavHighlight, navHighlight }) => {
  const children = {
    hidden: { y: 10, opacity: 0 },
    shown: { y: 0, x: 0, opacity: 1 },
  };

  const svgVariants = {
    hidden: { x: 40, opacity: 0 },
    shown: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 1,
      },
    },
  };

  const container = {
    hidden: { y: 10, opacity: 0, rotate: -10 },
    shown: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        delay: 0.75,
        delayChildren: 0.75,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
    exit: {
      y: 10,
      opacity: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.5,
      },
    },
  };

  let name = "Julien Lopez";

  return (
    <div className="flex lg:flex-row flex-col pt-[20vh] xl:pt-0 xl:px-[25vw] px-[25px] justify-center align-center min-h-[100vh]">
      <motion.section
        id="Home"
        className="flex flex-col gap-6 align-center justify-center"
        variants={container}
        initial="hidden"
        whileInView={"shown"}
        viewport={{ once: true }}
        exit="exit"
      >
        <motion.h5 className="font-normal font-mono" variants={children}>
          Hi, my name is
        </motion.h5>
        <motion.h1 variants={children}>
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block character"
              whileHover={{
                scale: 1.5,
                transition: { duration: 0.1 },
              }}
            >
              {char}
            </motion.span>
          ))}
          ,
        </motion.h1>
        <motion.h2 className="subheading font-light" variants={children}>
          Front end web developer.
        </motion.h2>
        <motion.p variants={children} className="max-w-lg  ">
          I am a <strong className="text-yellow-300">Fi</strong>
          <strong className=" text-blue-500">li</strong>
          <strong className="text-red-500">pi</strong>
          <strong className=" text-white">no</strong>-American software engineer
          specializing in the front end. Using modern technologies such as React
          and React Native, I strive to make smooth, design-minded digital
          experiences!
        </motion.p>
        <motion.p variants={children}>
          <a href="mailto:Julien24Lopez@gmail.com">
            <button>Hire me!</button>
          </a>
        </motion.p>
      </motion.section>
      <motion.div
        variants={svgVariants}
        initial="hidden"
        animate="shown"
        className="flex flex-col items-center justify-center lg:w-[200px]"
      >
        <SvgPortrait />
      </motion.div>
    </div>
  );
};

export default Homepage;
