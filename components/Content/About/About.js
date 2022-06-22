import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ModSquad from "../../../public/assets/modsquad.svg";

const About = ({ setNavHighlight }) => {
  const children = {
    hidden: { y: -10, x: -20, opacity: 0 },
    shown: { y: 0, x: 0, opacity: 1 },
  };

  const container = {
    hidden: { y: -10, opacity: 0, rotate: -10 },
    shown: {
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  //  <strong className="text-red-400">ModSquad</strong>;

  return (
    <motion.section
      id="About"
      variants={container}
      initial="hidden"
      whileInView={"shown"}
      exit="exit"
      className="mx-auto py-[12rem] lg:max-w-[45%] max-w-[80%] "
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.h3
        variants={children}
        className="section-heading mb-10 after:h-[1px] after:w-[10rem] after:bg-white after:inline-block after:relative after:top-[-5px] after:ml-4 "
      >
        About me
      </motion.h3>
      <motion.p variants={children}>
        My love for programming began, like many, on social media apps like
        Tumblr and MySpace! After learning that it is possible to create
        beautiful designs with lines of code, I was hooked.
      </motion.p>
      <motion.p variants={children}>
        I am currently proudly working as a tier 2 moderator at{" "}
        <motion.span
          className="inline-block character"
          whileHover={{
            y: -5,
            transition: { duration: 0.1 },
          }}
        >
          <a href="https://modsquad.com/" target="_new">
            <Image src={ModSquad} width="120" height="40" />
          </a>
        </motion.span>
        {
          ". As a tier 2 moderator, I work with a team of like-minded moderators to help manage, build, and protect online communities all over the world. Although my current occupation is not 100% programming, "
        }
        <span className="text-white">
          it is my dream to be a developer who is passionate about programming ,
          web design, and creating new things .
        </span>
      </motion.p>
      <motion.p variants={children}>
        {
          "   Other than coding, I like to travel, paint, cook, and eat! Checkout my socials here ->"
        }
      </motion.p>
    </motion.section>
  );
};

export default About;
