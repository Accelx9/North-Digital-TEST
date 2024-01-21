import { useState } from "react";

/**
 * Hook personalizado para el manejo de formularios
 * @param {object} initialState Objeto con los valores iniciales del state
 * @returns {object}
 */
export const useForm = <T extends Object>(initialState: T) => {
  const [values, setValues] = useState(initialState);

  const handleSubmit = (
    event: React.SyntheticEvent,
    callback?: VoidFunction
  ) => {
    if (event) event.preventDefault();
    if (callback) callback();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleReset = () => {
    setValues(initialState);
  };

  return {
    handleChange,
    handleReset,
    handleSubmit,
    values,
    setValues,
  };
};
