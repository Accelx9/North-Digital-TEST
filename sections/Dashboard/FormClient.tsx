import { v4 as uuidv4 } from "uuid";
import { Alert, InputText, Modal } from "@/components";
import { useForm } from "@/hooks";
import { Client, ErrorsClient, InitialStateClient, Sale } from "@/types";
import { Dispatch, SetStateAction, useState } from "react";

/**
 * Section to create a new client
 * @returns {React.JSX.Element}
 */
export const FormClient = ({
  handleDismiss,
  setClient,
}: {
  handleDismiss: VoidFunction;
  setClient: (client: Client) => void;
}): React.JSX.Element => {
  // Notifications
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState<{
    message: string;
    severity: "info" | "warning" | "error" | "success";
  }>({
    message: "",
    severity: "info",
  });

  // Form values
  const { values, handleChange, handleSubmit } =
    useForm<Client>(InitialStateClient);
  const [errors, setErrors] = useState<ErrorsClient>({});

  // Functions
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
   * Function that validates the form, creates the client and send the respective feedback to the user
   */
  const handleValidate = async () => {
    const { address, lastName, name, phone, rut } = values;
    setErrors({});
    if (!name) {
      handleAlert("warning", "The name is required.");
      setErrors((prev) => ({ ...prev, names: true }));
      return;
    }
    if (!lastName) {
      handleAlert("warning", "The lastName is required.");
      setErrors((prev) => ({ ...prev, lastNames: true }));
      return;
    }
    if (!rut) {
      handleAlert("warning", "The rut is required.");
      setErrors((prev) => ({ ...prev, rut: true }));
      return;
    }
    if (!address) {
      handleAlert("warning", "The address is required.");
      setErrors((prev) => ({ ...prev, address: true }));
      return;
    }
    if (!phone) {
      handleAlert("warning", "The phone is required.");
      setErrors((prev) => ({ ...prev, phone: true }));
      return;
    }

    const body: Client = {
      ...values,
      id: uuidv4(),
    };
    try {
      const response = await fetch("api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setClient(body);
        handleAlert("success", "Client added successfully");
        handleDismiss();
      }
    } catch (error) {
      handleAlert("error", "Ooops we had an error adding the client");
    }
  };

  return (
    <Modal
      handleDismiss={handleDismiss}
      handleSubmit={handleValidate}
      title="Add Client"
    >
      <form
        aria-label="Client creation form"
        onSubmit={(e) => handleSubmit(e, handleValidate)}
        className="w-full flex flex-col gap-2"
      >
        <InputText
          label="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />
        <InputText
          label="LastName"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />
        <InputText
          label="RUT"
          name="rut"
          value={values.rut}
          onChange={handleChange}
          error={errors.rut}
        />
        <InputText
          label="Address"
          name="address"
          value={values.address}
          onChange={handleChange}
          error={errors.address}
        />
        <InputText
          label="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
        />{" "}
        <Alert
          show={showAlert}
          severity={alert.severity}
          message={alert.message}
        />
      </form>
    </Modal>
  );
};
