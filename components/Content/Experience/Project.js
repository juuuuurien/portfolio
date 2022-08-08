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
        className={`${imgPos} relative lg:row-start-1 lg:row-end-2 row-start-1 row-end-6 z-0 shadow-md`}
      >
        <a className="group" href={href} target="_new">
          <img className="rounded-md z-0  h-full w-[100%]" src={hoverSrc} />
          <img
            className="rounded-md top-[0]  h-full w-[100%] z-10 brightness-50 absolute group-hover:opacity-0 transition-all duration-500 before"
            src={src}
          />
          <div className="absolute rounded-md bg-[#030c18] mix-blend-screen top-0 z-[100] w-[100%] group-hover:opacity-0 transition-all " />
        </a>
      </motion.div>

      <motion.div
        variants={descriptionVariants}
        className={`${descPos} lg:bg-transparent bg-[#022a68aa] p-5 rounded-md lg:row-start-1 lg:row-end-2 row-start-3 row-end-7 self-center z-10 ${align}`}
      >
        <a href={href} target="_new">
          <h4 className="lg:px-0 px-6 text-[#CA9F0D]">{title}</h4>
          <div className="p-6 my-4 rounded-xl lg:rounded-sm lg:bg-[#022a6866]">
            {description}
          </div>
          <div className="flex justify-center">
            <ul
              className={`flex flex-row flex-wrap ${
                align === "right" ? "justify-end" : "justify-start"
              } md:gap-5 gap-5 font-mono`}
            >
              {tools?.map((tool, i) => (
                <li className="text-sm text-[#CA9F0D]" key={i}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Project;
