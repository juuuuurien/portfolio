import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      key="about-me"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="content-container"
    >
      <h3 className="after:h-[1px] after:w-[100px] after:bg-white after:inline-block after:relative after:top-[-5px] after:ml-2 ">
        About me
      </h3>
    </motion.section>
  );
};

export default About;
