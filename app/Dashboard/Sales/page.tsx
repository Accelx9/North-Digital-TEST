"use client";
import Person1 from "@/assets/images/Person-1.webp";
import { Button, Modal } from "@/components";
import { SaleDetails } from "@/sections";
import { Sale } from "@/types";
import Image from "next/image";
import { useState } from "react";

const sales: Sale[] = [
  {
    branchOffice: {
      name: "Canada",
      id: "1",
    },
    client: {
      name: "Drakes",
      id: "1",
    },

    currency: { name: "CAD", id: "1" },
    details: [
      {
        name: "Devil dogs",
        quantity: 100,
        price: 4.5,
      },
    ],
    date: new Date(),
    totalSale: 10000,
    id: "10",
  },
];

const Page = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Sale>({} as Sale);

  // Functions

  const handleToggleModal = (data?: Sale) => {
    setShowDetails(!showDetails);
    if (data) setSelectedItem(data);
  };

  return (
    <div className="max-w-[85%] w-full h-full pb-4 sm:pb-0 sm:pt-10 m-auto">
      <div className="flex mt-2 sm:mt-0 items-end">
        <Image
          src={Person1.src}
          alt="Picture of a computer"
          width={80}
          height={80}
          className=""
        />
        <div className=" pl-10 w-full">
          <p className="text-4xl sm:text-5xl mb-6 font-extrabold">Sales</p>
          <hr className="h-1 mb-7 bg-slate-300   w-full" />
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-12">
        {sales.map((sale, index) => (
          <div
            key={index}
            className="bg-white shadow-lg w-full  sm:w-64 h-44 p-3 rounded-lg"
          >
            <h4 className="text-md">
              <strong>Date of sale: </strong>
              {"21/1/2024"}{" "}
            </h4>
            <h4 className="text-md">
              <strong>Client: </strong>
              {sale.client.name}{" "}
            </h4>
            <h4 className="text-md">
              <strong>Branch Office: </strong>
              {sale.branchOffice.name}{" "}
            </h4>
            <div className="flex mt-4 items-end justify-end">
              <Button className="h-9" onClick={() => handleToggleModal(sale)}>
                Ver detalles
              </Button>
            </div>
          </div>
        ))}
      </div>
      {showDetails && (
        <Modal
          title={"Sale details"}
          handleDismiss={handleToggleModal}
          textClose="Close"
        >
          <SaleDetails sale={selectedItem} />
        </Modal>
      )}
    </div>
  );
};

export default Page;