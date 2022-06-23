import React, { useEffect, useState } from "react";
import {
  AnimateSharedLayout,
  motion,
  useAnimation,
  useCycle,
  useViewportScroll,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/assets/jl-logo.svg";
import MenuButton from "./MenuButton";

const Navbar = () => {
  const [navHighlight, setNavHighlight] = useState("Home");
  const [navHidden, setNavHidden] = useState(false);
  const [navOpen, toggleNav] = useCycle(false, true);

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
    open: {
      x: "-100%",
    },
    closed: {
      x: 0,
    },
  };

  return (
    <motion.div
      variants={container}
      animate={[navHidden ? "hidden" : "shown", navOpen ? "open" : "closed"]}
      initial="hidden"
      className="p-10 px-20 rounded-l-xl left-[100%] md:left-0 fixed flex flex-col md:flex-row md:w-screen md:px-[15vw] lg:pb-4 lg:pt-4 items-center gap-20 z-[100] md:bg-[#00000033] bg-[#000000e7]"
    >
      <MenuButton navOpen={navOpen} toggle={() => toggleNav()} />
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
          <motion.ul className="flex flex-col md:flex-row w-full justify-evenly gap-10">
            {navItems.map((item) => {
              const isSelected = navHighlight === item;
              return (
                <motion.div key={item} variants={children}>
                  <motion.li
                    className="nav-item hover:translate-y-[-5px] translate-y-0 "
                    onClick={() => {
                      setNavHighlight(item);
                      if (navOpen) toggleNav();
                    }}
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
