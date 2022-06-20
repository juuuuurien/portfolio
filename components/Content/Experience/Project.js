import React from "react";
import { motion } from "framer-motion";

const Project = ({
  imageVariants,
  descriptionVariants,
  src,
  hoverSrc,
  description,
  title,
  align,
  href,
  tools,
}) => {
  let imgPos;
  let descPos;

  if (align === "right") {
    imgPos = "col-start-1 lg:col-end-8 col-end-13";
    descPos = "lg:col-start-7 col-start-1 col-end-13";
  }

  if (align === "left") {
    imgPos = "lg:col-start-7 col-start-1 col-end-13";
    descPos = "col-start-1 lg:col-end-8 col-end-13";
  }

  return (
    <motion.div className="grid grid-cols-12">
      <motion.div
        variants={imageVariants}
        whileHover={{
          y: -10,
          transition: { duration: 0.2 },
        }}
        className={`${imgPos} relative  lg:row-start-1 lg:row-end-2 md:row-start-1 md:row-end-4 xs:row-start-3 xs:row-end-6 z-0 shadow-md`}
      >
        <a className="group" href={href} target="_blank">
          <img className="rounded-md z-0 h-[100%]  w-[100%]" src={hoverSrc} />
          <img
            className="rounded-md top-[0] h-[100%] w-[100%] z-10 brightness-50 absolute group-hover:opacity-0 transition-all duration-500 before"
            src={src}
          />
          <div className="absolute rounded-md bg-[#030c18] mix-blend-screen top-0 z-[100] w-[100%] h-[100%] group-hover:opacity-0 transition-all " />
        </a>
      </motion.div>
      <motion.div
        variants={descriptionVariants}
        className={`${descPos} lg:row-start-1 lg:row-end-2 md:row-start-3 md:row-end-6 xs:row-start-1  xs:row-end-3 self-center z-10 ${align}`}
      >
        <h4 className="my-4 lg:px-0 px-6">{title}</h4>
        <div className="p-6 rounded-xl lg:rounded-sm bg-[#022a68]">
          {description}
        </div>
        <div className="p-3 rounded-xl my-4 lg:rounded-sm ">
          <ul
            className={`flex flex-row ${
              align === "right" ? "justify-end" : "justify-start"
            } gap-5 font-mono`}
          >
            {tools?.map((tool) => (
              <li className="text-sm">{tool}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
