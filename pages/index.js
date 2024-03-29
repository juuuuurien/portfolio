import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar/Navbar";

import Homepage from "../components/Content/Homepage/Homepage";
import About from "../components/Content/About/About";
import Experience from "../components/Content/Experience/Experience";
import ToolBubble from "../components/ToolBubble/ToolBubble";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import ThreeDots from "../public/assets/three-dots.svg";
import Contact from "../components/Content/Contact/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // handle loading screen
  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log("settings false");
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Julien Lopez Portfolio | Fullstack Web Developer</title>
        <meta
          name="description"
          content="Julien Lopez is a freelance fullstack web developer. This portfolio exemplifies his experience with SEO, hosting, developing, and creating websites."
        />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        {loading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0.8,
              transition: { delay: 0.1, duration: 0.8 },
            }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center w-screen h-screen bg-[#06070a] "
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{
                scale: [1, 1.4, 0],
                opacity: 0,
                transition: {
                  duration: 0.4,
                  delay: 1.0,
                },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5, ease: [0.17, 0.67, 0.83, 0.67] },
              }}
            >
              <Image src={ThreeDots} width={45} height={45} />
            </motion.div>
          </motion.div>
        )}
        {!loading && (
          <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="content"
          >
            <Navbar />
            <Homepage />
            <About />
            <Experience />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
