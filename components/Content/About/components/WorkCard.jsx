import React from "react";

const WorkCard = ({ children }) => {
  return (
    <article className="flex flex-1 text-center flex-col gap-2 rounded-lg border-[#498fd5] border-2 md:max-w-[33%] px-2 py-4 bg-[#498fd522] hover:bg-transparent transition-all ">
      {children}
    </article>
  );
};

export default WorkCard;
