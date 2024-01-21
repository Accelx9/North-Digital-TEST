import { Alert, InputText, Modal } from "@/components";
import { useForm } from "@/hooks";
import { Client, ErrorsClient, InitialStateClient } from "@/types";
import { useState } from "react";

/**
 * Section to create a new client
 * @returns {React.JSX.Element}
 */
export const FormClient = ({
  handleDismiss,
}: {
  handleDismiss: VoidFunction;
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
  const handleValidate = () => {
    const { address, lastNames, names, phone, rut } = values;
    setErrors({});
    if (!names) {
      handleAlert("warning", "The name is required.");
      setErrors((prev) => ({ ...prev, names: true }));
      return;
    }
    if (!lastNames) {
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
          name="names"
          value={values.names}
          onChange={handleChange}
          error={errors.names}
        />
        <InputText
          label="LastNames"
          name="lastNames"
          value={values.lastNames}
          onChange={handleChange}
          error={errors.lastNames}
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
