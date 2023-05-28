/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ModSquad from "../../../public/assets/modsquad.svg";
import TwoLeaf from "../../../public/assets/2Leaf.svg";
import CFX from "../../../public/assets/CFX_white.png";
import CFXLogo from "../../../public/assets/CFX Logo.jpg";
import Selfie from "../../../public/assets/selfie.png";
import Selfie2 from "../../../public/assets/selfie2.png";
import Selfie3 from "../../../public/assets/selfie3.png";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import WorkCard from "./components/WorkCard";

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
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  const selfieVariants = {
    hidden: {
      x: 20,
      opacity: 0,
    },
    shown: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 50 },
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
      className="flex flex-col mx-auto py-[5vh] lg:max-w-[55%] max-w-[80%] gap-10"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h3 variants={children} className="section-heading mb-2">
        Who I am
      </motion.h3>
      <div className="flex flex-col md:flex-row self-center">
        <div className="flex flex-col my-10 justify-between">
          <motion.p className=" text-[#CA9F0D]" variants={children}>
            Hi, my name is <span className="font-bold">Julien Lopez.</span>
            <br />
            <br />
          </motion.p>
          <motion.p className=" max-w-[80%]" variants={children}>
            I am a Filipino-American 🇵🇭 Software Engineer specializing in the
            Front End. Using modern technologies such as React and React Native,
            I strive to make smooth, design-minded digital experiences!
          </motion.p>
          {/* <motion.p variants={children}>
            I am currently working as the Lead Developer over at 2Leaf Web Development{" "}
            <motion.span
              className="inline-block"
              whileHover={{
                y: -5,
                transition: { duration: 0.1 },
              }}
            >
              <a href="https://2leaf.com/" target="_new">
                <Image src={TwoLeaf} width="50" height="50" />
              </a>
            </motion.span>
            {
              "."
            }
          </motion.p>
          <motion.p variants={children}>
            I am currently in the middle of transitioning to a Front End position at the California Fruit Exchange.
            <motion.span
              className="inline-block"
              whileHover={{
                y: -5,
                transition: { duration: 0.1 },
              }}
            >
              <a href="https://2leaf.com/" target="_new">
                <Image src={CFX} width="100" height="64" />
              </a>
            </motion.span> 
          </motion.p> */}
          <motion.p variants={children}>
            Other than coding, I like to travel, paint, cook, and eat!
          </motion.p>
        </div>
        <motion.div
          variants={selfieVariants}
          whileHover={{ scale: 1.05, x: 10, y: 10 }}
          className="flex self-center rounded-[50px] border-2 border-[#498fd5]"
        >
          <Image
            alt="logo"
            src={Selfie3}
            width={640}
            height={640}
            className="rounded-[50px] mix-blend-screen opacity-70 hover:opacity-100 duration-300 transition-all"
          />
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full justify-center mt-10">
        <WorkCard>
          <div className="flex flex-row justify-around items-center">
            <motion.span
              className="inline-block"
              whileHover={{
                y: -5,
                transition: { duration: 0.1 },
              }}
            >
              <a href="https://modsquad.com/" target="_new">
                <Image alt="logo" src={ModSquad} width="64" height="50" />
              </a>
            </motion.span>
            <p className="text-sm text-right">2020 - 2022</p>
          </div>
          <br />
          <h5>ModSquad</h5>
          <br />
          <p className="text-sm mb-6">
            At ModSquad, I worked with a team of like-minded moderators to help
            manage, build, and protect online communities all over the world.
          </p>
          <ul className="flex flex-col gap-2 text-left">
            <li className="text-sm pl-5">
              Participated in company wide content moderation proposals.
            </li>
            <li className="text-sm pl-5">
              Was responsible for the onboarding of incoming content moderators.
            </li>
            <li className="text-sm pl-5">
              Regularly adhered to and proposed moderation guidelines for the
              company and their clients.
            </li>
          </ul>
        </WorkCard>
        <WorkCard>
          <div className="flex flex-row justify-around items-center">
            <motion.span
              className="inline-block"
              whileHover={{
                y: -5,
                transition: { duration: 0.1 },
              }}
            >
              <a href="https://2Leaf.com/" target="_new">
                <Image alt="logo" src={TwoLeaf} width="50" height="50" />
              </a>
            </motion.span>
            <p className="text-sm text-right">2022 - 2023</p>
          </div>
          <br />
          <h5>2Leaf Web Development</h5>
          <br />
          <p className="text-sm mb-6">
            At 2Leaf Web Development, I was responsible for creating,
            maintaining, reviewing, and shipping software created by for various
            clients around Sacramento and beyond.
          </p>
          <ul className="flex flex-col gap-2 text-left">
            <li className="text-sm pl-5">
              Built maintainable RESTful APIs from the ground up.
            </li>
            <li className="text-sm pl-5">
              Created beautiful and responsive websites and apps in JavaScript
              and TypeScript using technologies such as React, React Native,
              plain HTML & CSS, PHP and more.
            </li>
            <li className="text-sm pl-5">
              Built backend applications using technologies such as Node.js,
              Express, MongoDB , MySQL.
            </li>
            <li className="text-sm pl-5">
              Deployed apps onto SaaS based platforms such as AWS EC2, AWS S3,
              cPanel and more.
            </li>
            <li className="text-sm pl-5">
              Reviewed, merging, and shipping code created by my peers.
            </li>
          </ul>
        </WorkCard>
        <WorkCard>
          <div className="flex flex-row justify-around items-center">
            <motion.span
              className="inline-block"
              whileHover={{
                y: -5,
                transition: { duration: 0.1 },
              }}
            >
              <a href="https://2Leaf.com/" target="_new">
                <Image alt="logo" src={CFXLogo} width="60" height="50" />
              </a>
            </motion.span>
            <p className="text-sm text-right">2022 - Present</p>
          </div>
          <br />
          <h5>California Fruit Exchange</h5>
          <br />
          <p className="text-sm mb-6">
            As a Front End Developer at the California Fruit Exchange, I create
            beautiful and intuitive user interfaces for the company's internal
            and external applications using technologies such as PHP, Laravel,
            and Vue.
          </p>
          <ul className="flex flex-col gap-2 text-left">
            <li className="text-sm pl-5">
              Maintained and created new features for the company's internal
              production management systems.
            </li>
            <li className="text-sm pl-5">
              Utilized Shopify's Liquid templating language to create and
              maintain multiple online storefronts.
            </li>
            <li className="text-sm pl-5">
              Built API endpoints to sync Shopify data using their many APIs and
              webhooks.
            </li>
            <li className="text-sm pl-5">
              In the process of learning DevOp and CI/CD practices to help
              streamline the company's development process utilizing
              technologies such as Terraform and Jenkins.
            </li>
          </ul>
        </WorkCard>
      </div>
      <motion.div
        className="flex flex-col justify-center items-center mt-20 gap-10"
        variants={children}
      >
        Check out my socials!
        <div className="flex flex-row gap-3">
          <motion.div whileHover={{ y: -5 }}>
            <a href="https://github.com/juuuuurien">
              <AiFillGithub className="h-[25px] w-[25px] hover:text-[#CA9F0D] transition-all duration-[800]" />
            </a>
          </motion.div>
          <motion.div whileHover={{ y: -5 }}>
            <a href="https://www.instagram.com/juuuuurien/">
              <AiFillInstagram className="h-[25px] w-[25px] hover:text-[#CA9F0D] transition-all duration-[800]" />
            </a>
          </motion.div>
          <motion.div whileHover={{ y: -5 }}>
            <a href="https://twitter.com/juuuuurien">
              <AiFillTwitterCircle className="h-[25px] w-[25px] hover:text-[#CA9F0D] transition-all duration-[800]" />
            </a>
          </motion.div>
          <motion.div whileHover={{ y: -5 }}>
            <a href="https://www.linkedin.com/in/julien-lopez-dev/">
              <AiFillLinkedin className="h-[25px] w-[25px] hover:text-[#CA9F0D] transition-all duration-[800]" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
