"use client";
import { AddIcon } from "@/assets/icons";
import Person1 from "@/assets/images/Person-1.webp";
import { InputText, AutoComplete, Button } from "@/components";
import { InitialStateDetails } from "@/constants/details";
import { Detail } from "@/types";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [details, setDetails] = useState<Detail[]>([InitialStateDetails]);

  const handleAddItem = () => {
    const temporalArray = [...details];
    temporalArray.push(InitialStateDetails);
    setDetails(temporalArray);
  };

  const handleRemoveItem = (position: number) => {
    const temporalArray = [...details];
    temporalArray.splice(position, 1);
    setDetails(temporalArray);
  };

  return (
    <div className="max-w-[85%] w-full h-full pb-4 sm:pb-0  sm:h-[80%]  m-auto">
      <div className="flex items-end">
        <Image
          src={Person1.src}
          alt="Picture of a computer"
          width={80}
          height={80}
          className=""
        />
        <div className=" pl-10 w-full">
          <p className="text-5xl mb-6 font-extrabold">New Sale</p>
          <hr className="h-1 mb-7 bg-slate-300   w-full" />
        </div>
      </div>
      <p className="text-4xl mt-16">Document</p>

      <div className="w-full  flex sm:gap-12 flex-wrap sm:flex-nowrap  mt-10">
        <div className="w-full sm:w-2/5 flex items-center">
          <div className="w-10/12">
            <AutoComplete label="Client" name="client" />
          </div>
          <div className="w-2/12 mt-auto ">
            <Button className="h-16 my-0 mx-0 ml-4 w-16">
              <AddIcon className="mx-auto mt-2 h-8" />
            </Button>
          </div>
        </div>
        <div className="w-full sm:w-2/5">
          <AutoComplete label="Branch Office" name="office" />
        </div>
        <div className="w-full sm:w-1/5">
          <InputText label="Currency" readOnly disabled name="currency" />
        </div>
      </div>

      <p className="text-4xl mt-16">Details</p>

      {details.map((detail, index) => (
        <div
          key={index}
          className="w-full  flex sm:gap-12 flex-wrap sm:flex-nowrap  mt-10"
        >
          <div className="w-full sm:w-2/5">
            <AutoComplete label="Name" name="name" value={detail.product} />
          </div>
          <div className="w-2/5 flex flex-wrap sm:flex-nowrap sm:gap-12">
            <div className="w-full sm:w-1/2 ">
              <InputText
                label="Quantity"
                type="number"
                name="quantity"
                value={detail.quantity}
              />
            </div>
            <div className="w-full sm:w-1/2 ">
              <InputText
                label="Price"
                readOnly
                disabled
                name="price"
                value={detail.price}
              />
            </div>
          </div>
          <div className="w-full sm:w-1/5 flex sm:gap-10 items-center">
            <div className="w-3/4">
              <InputText
                label="Subtotal"
                readOnly
                disabled
                name="subtotal"
                value={detail.price || 0 * detail.quantity}
              />
            </div>{" "}
            <div className="w-1/4 mt-auto">
              <Button className="h-16 grid place-items-center place-content-center my-0 mx-0 w-16">
                <AddIcon
                  onClick={() => handleRemoveItem(index)}
                  className="h-8 w-8 rotate-45 mt-3"
                />
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Button onClick={handleAddItem} className="my-16 capitalize">
        Add
      </Button>

      <div className="w-full flex gap-12">
        <div className="w-full ml-auto gap-12 sm:w-1/5 sm:max-w-[20%]">
          <InputText
            label="Total"
            readOnly
            disabled
            value={details.reduce(
              (acc, current) =>
                (acc += current.quantity * (current.price || 0)),
              0
            )}
            name="total"
          />
        </div>
      </div>

      <div className="my-16 flex justify-end">
        <div className="sm:w-1/5 flex">
          <Button className="px-7 w-full sm:w-1/2 ml-auto">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
