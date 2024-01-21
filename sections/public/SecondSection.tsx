import { Card } from "@/components";
const array = [1, 2, 3];

export const SecondSection = () => {
  return (
    <section
      id="content2"
      className="h-screen w-screen bg-primary-light flex justify-center items-center "
    >
      <div className="max-w-screen-2xl  flex flex-col  ">
        <article className="w-1/3 ml-auto">
          <h2 className=" text-7xl font-extrabold text-primary-dark">
            Content 2
          </h2>
          <p className="my-10 w-4/5 text-grey text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            non ipsa ea maiores delectus officia accusantium aut nam architecto
            sed ducimus rerum consectetur dolore sit, quis minus. Ratione, iure
            aliquid!
          </p>
        </article>
        <div className="flex h-full justify-around flex-wrap sm:flex-nowrap">
          {array.map((_, index) => (
            <div key={index} className="w-1/5 mx-4  h-full">
              <Card />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
