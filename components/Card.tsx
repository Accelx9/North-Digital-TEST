"use client";
import { useState } from "react";

interface PropsLine {
  mt?: number;
  mb?: number;
  border?: number;
  hover?: boolean;
}
const Line = ({ border, mb, mt, hover }: PropsLine) => (
  <hr
    className={`w-full mt-${mt || 4} mb-${mb || 2} border-${border || 4}  h-${
      border || 2
    }  ${hover ? "border-primary" : "border-white"}  `}
  />
);

export const Card = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`border-4 py-4 card  border-white hover:border-primary px-20 text-white hover:text-primary `}
    >
      <Line hover={isHovered} mb={10} />
      <Line hover={isHovered} />
      <Line hover={isHovered} />
      <Line hover={isHovered} />
      <Line hover={isHovered} />
      <Line hover={isHovered} />
      <Line hover={isHovered} />
      <Line hover={isHovered} />
      <Line hover={isHovered} />
      <Line hover={isHovered} />
      <Line hover={isHovered} />
      <Line hover={isHovered} />
      <Line hover={isHovered} />
      <Line hover={isHovered} />
      <Line hover={isHovered} />
      <Line hover={isHovered} mt={10} />
    </div>
  );
};
