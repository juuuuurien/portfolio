import React from "react";
import { motion } from "framer-motion";

import { AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="Contact" className=" ">
      <div className="py-[20vh] flex flex-col justify-center items-center px-5">
        <h6 className="font-mono font-semibold">Like what I do?</h6>
        <motion.h2 className="section-heading text-5xl md:text-6xl font- mb-10 mt-2 self-center">
          {"Contact Me"}
        </motion.h2>
        <p className=" py-10 px-10 lg:max-w-[33%] rounded-md">
          {
            " I am currently looking for all kinds of work! If you want to work together, have any questions, or simply want to say hi, please reach out and I'll get back to you as soon as I can!"
          }
        </p>
        <a href="mailto:Julien24Lopez@gmail.com">
          <button>Say Hello!</button>
        </a>
      </div>
      <div className="flex text-sm py-5 items-center justify-center  hover:text-[#CA9F0D] transition-all duration-[800]">
        <motion.div
          whileHover={{ y: -10 }}
          className="flex flex-col h-fit w-fit items-center justify-center cursor-pointer"
        >
          <span>Copyright © Julien's Blog 2022. Made with Next.js, TailwindCSS, and ❤  by Julien Lopez</span>
          <AiFillGithub className="h-[25px] w-[25px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
