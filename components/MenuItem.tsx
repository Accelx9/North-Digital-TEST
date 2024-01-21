"use client";
import Link from "next/link";
import React, { Fragment, useState } from "react";

interface Props {
  text: string;
  path: string;
  icon: React.JSX.Element;
}

export const MenuItem = ({ path, text, icon }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (isHovering: boolean) => {
    setIsHovered(isHovering);
  };

  return (
    <div className=" relative  h-20  flex w-20 ">
      <Link
        href={`${path}`}
        onMouseEnter={() => handleMouseEnter(true)}
        onMouseLeave={() => handleMouseEnter(false)}
        className="bg-primary h-full items-center flex justify-center cursor-pointer  w-20 hover:bg-secondary transition-all "
      >
        {icon}
      </Link>

      {
        <Fragment>
          <div
            className={`bg-slate-200  ${
              !isHovered ? "opacity-0 top-10" : "top-5 opacity-100"
            } absolute   p-3 aspect-square rotate-45 left-24  text-left w-6 transition-all`}
          ></div>
          <div
            className={`bg-slate-200 cursor-default ${
              !isHovered ? "opacity-0 top-10" : "top-2  opacity-100"
            } absolute w-24 text-center p-3 rounded-full left-24  transition-all`}
          >
            {text}
          </div>
        </Fragment>
      }
    </div>
  );
};
