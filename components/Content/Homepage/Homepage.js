import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Homepage = () => {
  const children = {
    hidden: { y: -10, opacity: 0 },
    shown: { y: 0, x: 0, opacity: 1 },
  };

  const container = {
    hidden: { y: -10, opacity: 0, rotate: -10 },
    shown: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        ease: "easeOut",
        staggerChildren: 0.25,
      },
    },
    exit: {
      y: -10,
      opacity: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.5,
      },
    },
  };

  let name = "Julien Lopez";

  return (
    <motion.section
      id="Home"
      variants={container}
      initial="hidden"
      whileInView={"shown"}
      exit="exit"
      className="content-container h-[100vh]"
      viewport={{ once: true }}
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
      <motion.h2 className="subheading" variants={children}>
        Front end web developer.
      </motion.h2>
      <motion.p variants={children} className="max-w-lg">
        I'm a <strong className="text-yellow-300">Fi</strong>
        <strong className=" text-blue-500">li</strong>
        <strong className="text-red-500">pi</strong>
        <strong className=" text-white">no</strong>-American software engineer
        specializing in the front end. Using modern technologies such as React
        and React Native, I strive to make smooth, design-minded digital
        experiences.
      </motion.p>
      <motion.p variants={children}>
        {"Like what I do? "}
        <span>
          <button>Contact me!</button>
        </span>
      </motion.p>
    </motion.section>
  );
};

export default Homepage;
