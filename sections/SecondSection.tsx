import Picture from "@/assets/images/Picture.webp";
import Image from "next/image";
const array = [1, 2, 3, 4];

export const SecondSection = () => {
  return (
    <section className="h-screen w-screen bg-primary-light flex flex-col max-w-screen-2xl mx-auto  justify-center">
      <article className="w-1/3 ml-auto">
        <h2 className=" text-7xl font-extrabold text-primary-dark">
          Content 2
        </h2>
        <p className="my-10 w-4/5 text-grey text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non
          ipsa ea maiores delectus officia accusantium aut nam architecto sed
          ducimus rerum consectetur dolore sit, quis minus. Ratione, iure
          aliquid!
        </p>
      </article>
      <div className="flex sm:flex-wrap">
        {array.map((_, index) => (
          <div key={index} className="w-full sm:mx-4 sm:w-1/3 md:w-1/5">
            <Image
              src={Picture.src}
              alt="Picture of a computer"
              width={150}
              height={750}
              className="w-full"
            />
            <p className="my-4  text-grey text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              non ipsa ea maiores delectus officia accusantium aut nam
              architecto sed ducimus rerum consectetur dolore sit, quis minus.
              Ratione, iure aliquid!
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
