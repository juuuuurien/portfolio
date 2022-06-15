import React from "react";
import Image from "next/image";
import Rings from "../../public/assets/rings.svg";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-black ">
      <Image src={Rings} width={100} height={100} />
    </div>
  );
};

export default Loading;
