import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Homepage from "./Homepage/Homepage";

const Content = ({ page }) => {
  return (
    <div className="ph-30">
      <AnimatePresence exitBeforeEnter>
        {page === "Homepage" && <Homepage key="homepage" />}
        {page === "About" && <About key="about" />}
        {page === "Experience" && <Experience />}
      </AnimatePresence>
    </div>
  );
};

export default Content;
