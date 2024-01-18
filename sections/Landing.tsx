import Image from "next/image";

import Computer from "@/assets/images/Background-pc.webp";
import Person1 from "@/assets/images/Person-1.webp";
import Person2 from "@/assets/images/Person-2.webp";
import Person3 from "@/assets/images/Person-3.webp";

export const Landing = () => {
  return (
    <main className="container-landing h-screen w-screen">
      <div className="w-full  h-full flex relative ">
        <section className="ml-24 flex h-full items-center ">
          <article className="w-1/3">
            <h2 className=" text-7xl font-extrabold text-primary-dark">
              Lorem ipsum Design
            </h2>
            <p className="my-10 w-4/5 text-grey text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              non ipsa ea maiores delectus officia accusantium aut nam
              architecto sed ducimus rerum consectetur dolore sit, quis minus.
              Ratione, iure aliquid!
            </p>
            <button className="bg-primary my-10  mt-4 text-white font-bold uppercase h-16 w-36 hover:bg-secondary transition-all">
              Login
            </button>
          </article>{" "}
          <section className="w-2/3 flex h-full relative">
            <Image
              src={Person1.src}
              alt="Picture of a computer"
              width={150}
              height={750}
              className="absolute bottom-36 left-28 z-10 my-auto mt-10"
            />
            <Image
              src={Person2.src}
              alt="Picture of a computer"
              width={170}
              height={85}
              className="absolute bottom-[25%] left-[44%] z-10 my-auto mt-10"
            />
            <Image
              src={Person3.src}
              alt="Picture of a computer"
              width={170}
              height={85}
              className="absolute top-[18%] left-1/4 z-10 my-auto mt-10"
            />
            <Image
              src={Computer.src}
              alt="Picture of a computer"
              width={400}
              height={200}
              className="w-1/2 ml-32  relative my-auto      mr-auto"
            />
          </section>
        </section>
        {/* <div className="flex w-8/12 ml-auto absolute h-screen">
          <Image
            src={Background.src}
            alt="Background Image"
            width={1000}
            height={500}
            className="w-full h-screen absolute  z-0 right-0  ml-auto"
          />
        </div> */}
      </div>
    </main>
  );
};
