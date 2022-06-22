import {
  AnimateSharedLayout,
  motion,
  useAnimation,
  useViewportScroll,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import React, { useEffect, useState } from "react";

import Logo from "../../public/assets/jl-logo.svg";

const Navbar = () => {
  const [navHighlight, setNavHighlight] = useState("Home");
  const [navHidden, setNavHidden] = useState(false);

  const { scrollY } = useViewportScroll();

  const navItems = ["Home", "About", "Experience", "Contact"];

  // handle navigation and scroll animation
  const updateNavBar = () => {
    if (scrollY?.current < scrollY?.prev) {
      setNavHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setNavHidden(true);
    }
  };

  useEffect(() => {
    return scrollY.onChange(() => updateNavBar());
  }, []);

  // framer motion variants
  const children = {
    hidden: { y: -5, opacity: 0 },
    shown: { y: 0, x: 0, opacity: 1 },
    hover: { y: -10 },
  };

  const container = {
    hidden: { y: -80, opacity: 0 },
    shown: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      animate={navHidden ? "hidden" : "shown"}
      initial="hidden"
      className="flex fixed w-screen px-[15vw] pb-4 pt-4 items-center gap-20 z-[100] bg-[#00000033] "
    >
      <motion.div
        variants={children}
        animate="shown"
        whileHover="hover"
        className="h-[100%]"
      >
        <Image src={Logo} className="cursor-pointer" objectFit="contain" />
      </motion.div>
      <motion.nav>
        <AnimateSharedLayout>
          <motion.ul className="flex flex-row w-full justify-evenly gap-10">
            {navItems.map((item) => {
              const isSelected = navHighlight === item;
              return (
                <motion.div key={item} variants={children}>
                  <motion.li
                    className="nav-item hover:translate-y-[-5px] translate-y-0 "
                    onClick={() => setNavHighlight(item)}
                  >
                    <a href={`#${item}`}>{item}</a>
                  </motion.li>
                  {isSelected && (
                    <motion.div
                      layoutId="underline"
                      className="h-[2px] bg-white w-[100%] "
                    ></motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.ul>
        </AnimateSharedLayout>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;
