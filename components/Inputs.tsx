import { Fragment, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelInline?: boolean;
}

export const InputText = ({ label, labelInline, ...props }: Props) => {
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
        }`}
        {...props}
      />
    </div>
  );
};
