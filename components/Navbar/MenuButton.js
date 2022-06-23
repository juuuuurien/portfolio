import { motion, useCycle } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import React from "react";

const MenuButton = ({ toggle, navOpen }) => {
  return (
    <motion.div
      onClick={toggle}
      className="absolute bg-white w-[45px] h-[45px] left-[-45px] p-2 rounded-l-lg top-4 bg-[#000000e7]"
    >
      {!navOpen && <AiOutlineMenu className="h-[100%] w-[100%]" />}
      {navOpen && <AiOutlineClose className="h-[100%] w-[100%]" />}
    </motion.div>
  );
};

export default MenuButton;
