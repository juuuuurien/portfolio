import React from "react";
import { motion } from "framer-motion";
import SvgPortrait from "./SvgPortrait";

const Homepage = () => {
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
        delay: 0.5,
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
        delay: 0.55,
        delayChildren: 0.55,
        ease: "easeOut",
        staggerChildren: 0.15,
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
        className="flex flex-col gap-6 align-center justify-center lg:min-w-[440px]"
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
        <motion.h3 variants={children} className="max-w-lg font-normal">
          I love creating things,{" "}
          <span className="relative inline-block after:absolute after:content-[''] after:top-[16px] after:z-[1] after:left-[-5px] after:rotate-[-1deg] origin-bottom-left after:w-[0%] after:hover:w-[103%] after:transition-all after:duration-[600ms] after:ease-[cubic-bezier(1,-0.08, 0.2, 1)] after:h-[55%] after:opacity-[40%] after:bg-yellow-300 after:mix-blend-light ">
            especially for the web.
          </span>{" "}
          💻
        </motion.h3>
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
        className="flex flex-col items-center justify-center lg:w-[px]"
      >
        <SvgPortrait />
      </motion.div>
    </div>
  );
};

export default Homepage;
