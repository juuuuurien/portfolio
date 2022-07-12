import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ModSquad from "../../../public/assets/modsquad.svg";
import Selfie from "../../../public/assets/selfie.png";
import Selfie2 from "../../../public/assets/selfie2.png";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const About = ({ setNavHighlight }) => {
  const children = {
    hidden: { y: 10, x: -20, opacity: 0 },
    shown: { y: 0, x: 0, opacity: 1 },
  };

  const container = {
    hidden: { y: -10, opacity: 0 },
    shown: {
      y: 0,
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
      className="flex flex-col mx-auto py-[8rem] lg:max-w-[45%] max-w-[80%] gap-6"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h3 variants={children} className="section-heading mb-10 ">
        About me
      </motion.h3>
      <motion.p variants={children}>
        I am a <strong className="text-yellow-300">Fi</strong>
        <strong className=" text-blue-500">li</strong>
        <strong className="text-red-500">pi</strong>
        <strong className=" text-white">no</strong>-American software engineer
        specializing in the front end. Using modern technologies such as React
        and React Native, I strive to make smooth, design-minded digital
        experiences!
      </motion.p>
      <motion.p variants={children}>
        I am currently working as a proud member of{" "}
        <motion.span
          className="inline-block"
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
          ". As a ModSquad moderator, I work with a team of like-minded moderators to help manage, build, and protect online communities all over the world. "
        }
      </motion.p>
      <motion.p variants={children} className="text-[#CA9F0D]">
        Although my current occupation is not 100% programming, it is my dream
        to be a developer who is passionate about tech, web design, and creating
        new things .
      </motion.p>
      <motion.p variants={children}>
        Other than coding, I like to travel, paint, cook, and eat!
      </motion.p>

      <motion.div
        className="flex flex-col justify-center items-center mt-20 gap-10"
        variants={children}
      >
        <div className="flex flex-row gap-10 float-right">
          <Image
            src={Selfie2}
            height={200}
            width={200}
            className="rounded-[100%]"
          />
        </div>
        Check out my socials!
        <div className="flex flex-row gap-3">
          <motion.div whileHover={{ y: -10 }}>
            <a href="https://github.com/juuuuurien">
              <AiFillGithub className="h-[25px] w-[25px]" />
            </a>
          </motion.div>
          <motion.div whileHover={{ y: -10 }}>
            <a href="https://www.instagram.com/juuuuurien/">
              <AiFillInstagram className="h-[25px] w-[25px]" />
            </a>
          </motion.div>
          <motion.div whileHover={{ y: -10 }}>
            <a href="https://twitter.com/juuuuurien">
              <AiFillTwitterCircle className="h-[25px] w-[25px]" />
            </a>
          </motion.div>
          <motion.div whileHover={{ y: -10 }}>
            <a href="https://www.linkedin.com/in/julien-lopez-dev/">
              <AiFillLinkedin className="h-[25px] w-[25px]" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
