import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="flex flex-col justify-center items-center pt-[10vh] pb-[35vh] px-5 lg:mt-[25vh] bg-[#00000033] "
    >
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
    </section>
  );
};

export default Contact;
