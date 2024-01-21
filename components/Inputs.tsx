import { Fragment, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelInline?: boolean;
  errorMessage?: string;
  error?: boolean;
}

export const InputText = ({
  label,
  error,
  errorMessage = "This field is required",
  labelInline,
  ...props
}: Props) => {
  return (
    <div className={`w-full ${labelInline && "flex items-center"}`}>
      {label && (
        <label
          className={`text-grey ${labelInline && "mr-2"}`}
          htmlFor={props.name}
        >
          {label}
        </label>
      )}
      <input
        className={`outline-primary h-16 p-4 w-full bg-white ${
          label && "mt-2"
        } ${error && "border border-red-400"}`}
        {...props}
      />
      {error && (
        <p className="text-end text-sm mt-2 text-red-400">{errorMessage}</p>
      )}
    </div>
  );
};
