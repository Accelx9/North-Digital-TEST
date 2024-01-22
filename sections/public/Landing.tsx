import Image from "next/image";
import Computer from "@/assets/images/Background-pc.webp";
import Person1 from "@/assets/images/Person-1.webp";
import Person2 from "@/assets/images/Person-2.webp";
import Person3 from "@/assets/images/Person-3.webp";
import Link from "next/link";
import { Button } from "@/components";

export const Landing = () => {
  return (
    <main id="login" className=" container-landing h-screen w-screen">
      <div className="w-full  h-full flex relative max-w-screen-2xl px-10 lg:px-0 lg:w-10/12 mx-auto ">
        <section className="flex h-full items-center ">
          <article className="w-full animate md:w-1/2 lg:w-1/3">
            <h2 className="text-4xl md:text-5xl xl:text-7xl font-extrabold text-primary-dark">
              Lorem ipsum Design
            </h2>
            <p className="my-10 w-4/5 text-grey text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              non ipsa ea maiores delectus officia accusantium aut nam
              architecto sed ducimus rerum consectetur dolore sit, quis minus.
              Ratione, iure aliquid!
            </p>
            <Link href={"/Login"}>
              <Button>Login</Button>
            </Link>
          </article>{" "}
          <section className="hidden  md:w-2/3 md:flex h-full relative">
            <Image
              src={Person1.src}
              alt="Picture of a computer"
              width={140}
              height={75}
              className="animate absolute bottom-[22%] left-32 z-10 my-auto mt-10"
            />
            <Image
              src={Person2.src}
              alt="Picture of a computer"
              width={170}
              height={85}
              className="animate absolute bottom-[28%] left-[88%] lg:left-[44%] z-10 my-auto mt-10"
            />
            <Image
              src={Person3.src}
              alt="Picture of a computer"
              width={170}
              height={85}
              className="animate absolute top-[22%] left-1/2 lg:left-1/4 z-10 my-auto mt-10"
            />
            <Image
              src={Computer.src}
              alt="Picture of a computer"
              width={400}
              height={200}
              className="w-full lg:w-1/2 ml-32 animate relative my-auto      mr-auto"
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
