import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";

const containerVariants = {
  hidden: { y: 20, opacity: 0 },
  shown: { y: 0, opacity: 1 },
};

const imageVariants = {
  hidden: {
    x: "-5rem",
    opacity: 0,
  },
  shown: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      x: { type: "spring", stiffness: 50 },
    },
  },
};

const descriptionVariants = {
  hidden: {
    x: "5rem",
    opacity: 0,
  },
  shown: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.6,
      x: { type: "spring", stiffness: 75 },
    },
  },
};

const Experience = ({ setNavHighlight }) => {
  return (
    <motion.section
      id="My Work"
      className="flex flex-col min-h-[100vh] lg:px-[10vw] lg:py-[5vh] px-2 justify-center items-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="shown"
        className="flex flex-col items-center lg:max-w-[55vw] max-w-[80vw] gap-10"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h3
          variants={containerVariants}
          initial="hidden"
          animate="shown"
          className="section-heading mb-10 self-start"
        >
          {"Things I'm Proud Of"}
        </motion.h3>
        <Project
          href="https://www.thockey.io/"
          align="right"
          imageVariants={imageVariants}
          descriptionVariants={descriptionVariants}
          src={"/assets/thockey-display.png"}
          hoverSrc={"/assets/thockey-preview.gif"}
          tools={["React", "CSS3", "HTML5", "LocalStorage", "Figma"]}
          title={
            <>
              Thockey.io -{" "}
              <span className="font-normal text-lg">
                The Aesthetic Type Test
              </span>
            </>
          }
          description={
            <p>
              <strong>Thockey.io</strong> is an animated type-test app built
              with React, ChartJS, and utilizes both canvas and CSS animations.
            </p>
          }
        />
        <Project
          href="https://github.com/juuuuurien/FlexLog"
          align="left"
          imageVariants={imageVariants}
          descriptionVariants={descriptionVariants}
          src={"/assets/flexlog-display-2.png"}
          tools={[
            "React Native",
            "Reanimated 2",
            "ReactNative Paper",
            "Figma",
            "AsyncStorage",
          ]}
          title={
            <>
              FlexLog -
              <span className="font-normal text-lg">
                {" Workout Tracker for Android"}
              </span>
            </>
          }
          hoverSrc={"/assets/flexlog-display-2.png"}
          description={
            <p>
              <strong>FlexLog</strong> is a workout tracking app I built and
              regularly use.
            </p>
          }
        />
        <Project
          href="https://github.com/juuuuurien/portfolio"
          align="right"
          imageVariants={imageVariants}
          descriptionVariants={descriptionVariants}
          src={"/assets/portfolio-display.png"}
          tools={["NextJS", "React", "Framer Motion", "TailwindCSS", "Figma"]}
          title={
            <>
              Web Portfolio -
              <span className="font-normal text-lg">
                {" Resume and Experience"}
              </span>
            </>
          }
          hoverSrc={"/assets/portfolio-display.png"}
          description={
            <p>
              <strong>Julien's Portfolio</strong> is a web resume built using
              NextJS as its React framework, Framer Motion as its animation
              scaffold, and Tailwind as its CSS framework.
            </p>
          }
        />
      </motion.div>
    </motion.section>
  );
};

export default Experience;
