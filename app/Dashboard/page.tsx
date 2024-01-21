"use client";

import { AddIcon } from "@/assets/icons";
import Person1 from "@/assets/images/Person-1.webp";
import { InputText, AutoComplete, Button, Modal, Alert } from "@/components";
import { InitialStateDetails } from "@/constants/details";
import { FormClient } from "@/sections";
import { Detail } from "@/types";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [details, setDetails] = useState<Detail[]>([InitialStateDetails]);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState({});

  const handleToggleModal = () => setShowModal(!showModal);

  const handleAddDetail = () => {
    const temporalArray = [...details];
    temporalArray.push(InitialStateDetails);
    setDetails(temporalArray);
  };

  const handleRemoveDetail = (position: number) => {
    const temporalArray = [...details];
    if (temporalArray.length === 1) return;
    temporalArray.splice(position, 1);
    setDetails(temporalArray);
  };

  const handleChangeDetail = (
    property: "product" | "quantity",
    value: string,
    index: number
  ) => {
    const temporalArray = [...details];
    temporalArray[index] = { ...temporalArray[index], [property]: value };
    setDetails(temporalArray);
  };

  return (
    <div className="max-w-[85%] w-full h-full lg:pb-0 pt-10   mx-auto">
      <div className="flex mt-2 lg:mt-0 items-end">
        <Image
          src={Person1.src}
          alt="Picture of a computer"
          width={80}
          height={80}
          className=""
        />
        <div className=" pl-10 w-full">
          <p className="text-4xl lg:text-5xl mb-6 font-extrabold">New Sale</p>
          <hr className="h-1 mb-7 bg-slate-300   w-full" />
        </div>
      </div>
      <p className="text-3xl lg:text-4xl mt-10">Document</p>

      <div className="w-full  flex lg:gap-12 flex-wrap lg:flex-nowrap  mt-5">
        <div className="w-full lg:w-5/12 flex">
          <div className="w-10/12">
            <AutoComplete label="Client" name="client" />
          </div>
          <div className="w-2/12 mt-4 ">
            <Button
              onClick={handleToggleModal}
              className="h-16 my-0 mx-0 mb-0 lg:ml-4  w-full"
            >
              <AddIcon className="mx-auto  mt-2 h-8" />
            </Button>
          </div>
        </div>
        <div className="w-full mt-2 lg:mt-2 lg:w-5/12">
          <AutoComplete label="Branch Office" name="office" />
        </div>
        <div className="w-full mt-2 lg:mt-2 lg:w-2/12">
          <InputText label="Currency" readOnly disabled name="currency" />
        </div>
      </div>

      <p className="text-3xl lg:text-4xl mt-10">Details</p>

      {details.map((detail, index) => (
        <div
          key={index}
          className="w-full  flex lg:gap-12 flex-wrap lg:flex-nowrap  mt-5"
        >
          <div className="w-full lg:w-5/12">
            <AutoComplete
              label="Name"
              name="name"
              value={detail.name}
              onChange={(event) =>
                handleChangeDetail("product", event.target.value, index)
              }
            />
          </div>
          <div className="lg:w-1/2 flex flex-wrap lg:flex-nowrap lg:gap-12">
            <div className="w-full mt-2 lg:mt-0 lg:w-1/3 ">
              <InputText
                label="Quantity"
                type="number"
                name="quantity"
                min={0}
                value={detail.quantity}
                onChange={(event) =>
                  handleChangeDetail("quantity", event.target.value, index)
                }
              />
            </div>
            <div className="w-full mt-2 lg:mt-0 lg:w-1/3 ">
              <InputText
                label="Price"
                readOnly
                disabled
                name="price"
                value={detail.price}
              />
            </div>
            <div className="w-full mt-2 lg:mt-0 lg:w-1/3">
              <InputText
                label="Subtotal"
                readOnly
                disabled
                name="subtotal"
                value={detail.price || 0 * detail.quantity}
              />
            </div>
          </div>{" "}
          <div className="w-full lg:w-1/12 lg:mt-4">
            <Button className="h-16 grid place-items-center place-content-center my-0 mx-0 w-16">
              <AddIcon
                onClick={() => handleRemoveDetail(index)}
                className="h-8 w-8 rotate-45 mt-3"
              />
            </Button>
          </div>
        </div>
      ))}

      <Button onClick={handleAddDetail} className="my-6 capitalize">
        Add
      </Button>

      <div className="w-full flex gap-12">
        <div className="w-full ml-auto gap-12 lg:w-1/5 lg:max-w-[20%]">
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

      <div className="mt-6 h-44 md:h-auto  flex justify-end">
        <div className="lg:w-1/5 flex">
          <Button className="px-7 w-full lg:w-1/2 ml-auto capitalize">
            Save
          </Button>
        </div>
      </div>
      {showModal && <FormClient handleDismiss={handleToggleModal} />}
      {showAlert && <Alert severity="success" message="uwu" />}
    </div>
  );
};

export default Home;
