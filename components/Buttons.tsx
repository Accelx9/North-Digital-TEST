import { ButtonHTMLAttributes } from "react";

const VARIANTS = {
  contained: "bg-primary text-white",
  outlined:
    "bg-transparent text-primary border border-primary hover:text-white",
  none: "",
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "contained" | "none";
}

export const Button = ({
  children,
  className,
  variant = "contained",
  ...props
}: Props) => {
  return (
    <button
      className={`my-10  mt-4  font-bold uppercase h-16 w-36 m-0 hover:bg-secondary transition-all ${VARIANTS[variant]} ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};
