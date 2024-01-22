"use client";
import { AddIcon } from "@/assets/icons";
import Person1 from "@/assets/images/Person-1.webp";
import { Alert, AutoComplete, Button, InputText } from "@/components";
import { InitialStateDetails } from "@/constants/details";
import data from "@/data.json";
import { FormClient } from "@/sections";
import {
  BranchOffice,
  Client,
  Detail,
  ErrorsSale,
  Product,
  Sale,
} from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  // Navigation
  const router = useRouter();
  // Form
  const [values, setValues] = useState<Sale>({} as Sale);
  const [errors, setErrors] = useState<ErrorsSale>({});
  const [details, setDetails] = useState<Detail[]>([InitialStateDetails]);

  // Modal
  const [showModal, setShowModal] = useState(false);

  // Notifications
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState<{
    message: string;
    severity: "info" | "warning" | "error" | "success";
  }>({
    message: "",
    severity: "info",
  });

  // Options
  const [clients, setClients] = useState<
    {
      label: string;
      value: any;
    }[]
  >([]);
  const [products, setProducts] = useState<
    {
      label: string;
      value: Product;
    }[]
  >([]);
  const [offices, setOffices] = useState<
    {
      label: string;
      value: BranchOffice;
    }[]
  >([]);

  // Functions

  /**
   *
   * @param severity Severity of the alert
   * @param message Content of the alert
   */
  const handleAlert = (
    severity: "info" | "warning" | "error" | "success",
    message: string
  ) => {
    setShowAlert(true);
    setAlert({
      message,
      severity,
    });

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  /**
   * Function that validates the form and creates the sale
   */
  const handleSave = async () => {
    const { branchOffice, client } = values;
    setErrors({});
    if (!client) {
      handleAlert("warning", "The client is required.");
      setErrors((prev) => ({ ...prev, client: true }));
      return;
    }
    if (!branchOffice) {
      handleAlert("warning", "The branch office is required.");
      setErrors((prev) => ({ ...prev, branchOffice: true }));
      return;
    }
    if (details.some((detail) => !detail.product || !detail.quantity)) {
      handleAlert(
        "warning",
        "Please fill the name and quantity of the details."
      );
      return;
    }
    const body: any = {
      ...values,
      totalSale: details
        .reduce(
          (acc, current) => (acc += current.quantity * (current.price || 0)),
          0
        )
        .toString(),
      details,
      date: new Date(),
      id: uuidv4(),
    };

    try {
      const response = await fetch("api/sales", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        handleAlert("success", "Sale created successfully");
      }
    } catch (error) {
      handleAlert("error", "Ooops we had an error creating the sale");
    }
  };

  /**
   * Function that controls the value of the form
   */
  const handleChangeForm = (property: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [property]: value }));
  };

  /**
   * Function that controls the display of the modal to add clients
   */
  const handleToggleModal = () => setShowModal(!showModal);

  /**
   * Function that adds a detail to the list of details
   */
  const handleAddDetail = () => {
    const temporalArray = [...details];
    temporalArray.push(InitialStateDetails);
    setDetails(temporalArray);
  };

  /**
   * Function that removes a detail from the list of details
   * @param position Position of the detail in the list
   */
  const handleRemoveDetail = (position: number) => {
    const temporalArray = [...details];
    if (temporalArray.length === 1) return;
    temporalArray.splice(position, 1);
    setDetails(temporalArray);
  };

  const handleSetClient = (client: Client) => {
    setClients([
      ...data.clients.map((client) => ({
        label: client.name + " " + client.lastName,
        value: client,
      })),
      {
        label: client.name + " " + client.lastName,
        value: client,
      },
    ]);
    setValues((prev) => ({ ...prev, client }));
  };

  /**
   * Function that controls the change of a value of the detail
   * @param property Property that will be updated
   * @param value New value of the property
   * @param index Position of the detail in the list
   */
  const handleChangeDetail = (
    property: "product" | "quantity",
    value: string | Product,
    index: number
  ) => {
    const temporalArray = [...details];
    temporalArray[index] = { ...temporalArray[index], [property]: value };
    if (property === "product" && typeof value !== "string") {
      temporalArray[index] = {
        ...temporalArray[index],
        price: Number(value?.price),
      };
    }
    setDetails(temporalArray);
  };

  // Effects
  useEffect(() => {
    const { clients, offices, products } = data;
    setClients(
      clients.map((client) => ({
        label: client.name + " " + client.lastName,
        value: client,
      }))
    );
    setProducts(
      products.map((product) => ({
        label: product.name,
        value: product,
      }))
    );
    setOffices(
      offices.map((office) => ({
        label: office.name,
        value: office,
      }))
    );
  }, []);

  useEffect(() => {
    const { branchOffice } = values;
    if (!branchOffice) {
      setValues((prev) => ({ ...prev, currency: { id: "", name: "" } }));
      return;
    }
    setValues((prev) => ({
      ...prev,
      currency: {
        id: branchOffice.currency[0],
        name: branchOffice.currency[1],
      },
    }));
  }, [values.branchOffice]);

  return (
    <div className="max-w-[85%] w-full h-full  pb-4 sm:pb-0 sm:pt-10 m-auto">
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
            <AutoComplete
              onChange={(e) => {
                handleChangeForm("client", e);
              }}
              value={
                values.client
                  ? values.client?.name + " " + values.client?.lastName
                  : ""
              }
              options={clients}
              label="Client"
              name="client"
              error={errors.client}
            />
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
          <AutoComplete
            onChange={(e) => handleChangeForm("branchOffice", e)}
            options={offices}
            label="Branch Office"
            name="office"
            error={errors.branchOffice}
          />
        </div>
        <div className="w-full mt-2 lg:mt-2 lg:w-2/12">
          <InputText
            value={values.currency?.id}
            label="Currency"
            readOnly
            disabled
            name="currency"
          />
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
              options={products}
              onChange={(event) => {
                handleChangeDetail("product", event, index);
              }}
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
                value={detail.price * detail.quantity}
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
          <Button
            onClick={handleSave}
            className="px-7 w-full lg:w-1/2 ml-auto capitalize"
          >
            Save
          </Button>
        </div>
      </div>
      {showModal && (
        <FormClient
          setClient={handleSetClient}
          handleDismiss={handleToggleModal}
        />
      )}
      <Alert
        show={showAlert}
        severity={alert.severity}
        message={alert.message}
      />
    </div>
  );
};

export default Home;
