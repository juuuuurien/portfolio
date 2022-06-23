import { motion } from "framer-motion";
import React from "react";

const ToolBubble = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{
        width: 320,
        height: 60,
        padding: "1rem",
        transition: {
          delay: 3,
        },
      }}
      className="tooltip max-w-[20vw] absolute translate-x-[225px] translate-y-[-165px] bg-white rounded-md"
    >
      <motion.span
        className="absolute"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 3.3,
          },
        }}
      >
        Try interacting with some elements!
      </motion.span>
    </motion.div>
  );
};

export default ToolBubble;
