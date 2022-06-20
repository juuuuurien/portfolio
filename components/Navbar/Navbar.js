import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

import React, { useEffect, useState } from "react";

const NavItem = ({ children }) => {
  return (
    <motion.li
      whileHover={{
        y: -5,
        transition: { duration: 0.1 },
      }}
    >
      {children}
    </motion.li>
  );
};

const Navbar = ({ page, setPage, style }) => {
  const [navHidden, setNavHidden] = useState(false);

  // handle navigation and scroll animation
  let scrollTop = 0;

  const navY = useAnimation();

  const handleScroll = () => {
    let currentTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentTop > scrollTop) {
      // if scrolling down
      if (currentTop > scrollTop + 50) setNavHidden(true);
    } else {
      // if scrolling up
      setNavHidden(false);
    }

    scrollTop = currentTop <= 0 ? 0 : currentTop;
  };

  useEffect(() => {
    console.log(navHidden);
    if (navHidden) {
      console.log("hide");

      navY.start({
        y: -90,
      });
    }

    if (!navHidden) {
      console.log("show");
      navY.start({
        y: 0,
      });
    }
  }, [navHidden]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      animate={navY}
      style={style}
      className="flex fixed w-screen px-[10vw] pb-8 pt-4 items-center justify-between bg-[#020711c1]"
    >
      <h4 className="mx-10">Logo</h4>
      <nav>
        <ul className="flex  flex-row w-full justify-evenly gap-10">
          <NavItem>
            <a href="#Home">Home</a>
          </NavItem>
          <NavItem>
            <a href="#About">About me</a>
          </NavItem>
          <NavItem>
            <a href="#Experience">Experience</a>
          </NavItem>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Navbar;