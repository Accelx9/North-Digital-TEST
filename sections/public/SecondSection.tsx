"use client";
import { Card } from "@/components";
import Clouds from "@/assets/images/Clouds.webp";
import Image from "next/image";
import { useRef } from "react";
import { useIsVisible } from "@/hooks";

const array = [1, 2, 3];

export const SecondSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <section
      ref={ref}
      id="content2"
      className="h-full md:h-screen w-screen bg-primary-light flex justify-center items-center "
    >
      <div className="max-w-screen-2xl relative flex flex-col  ">
        <Image
          src={Clouds.src}
          alt="Picture of a computer"
          width={400}
          height={200}
          className="w-full lg:w-1/2 ml-32 absolute animate my-auto hidden md:block      mr-auto"
        />
        <article
          className={`${
            isVisible && "animate"
          } w-full z-50 mt-4 md:mt-0 md:w-1/2 lg:w-1/3 ml-auto`}
        >
          <h2 className="text-4xl md:text-5xl xl:text-7xl font-extrabold text-primary-dark">
            Content 2
          </h2>
          <p className="my-10 w-4/5 text-grey text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            non ipsa ea maiores delectus officia accusantium aut nam architecto
            sed ducimus rerum consectetur dolore sit, quis minus. Ratione, iure
            aliquid!
          </p>
        </article>
        <div className="flex h-full justify-around flex-wrap md:flex-nowrap">
          {array.map((_, index) => (
            <div
              key={index}
              className={`w-full md;w-1/3 lg:w-1/5  mx-4  h-full ${
                isVisible && "animate"
              }`}
            >
              <Card />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
