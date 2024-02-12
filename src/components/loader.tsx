import Image from "next/image";
import React from "react";

type Props = {};

export const Loader = ({}: Props) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src="/logo.svg"
        alt="Micro loader"
        width={140}
        height={140}
        className="animate-pulse duration-700"
      />
    </div>
  );
};
