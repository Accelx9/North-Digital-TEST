import { ButtonHTMLAttributes } from "react";

export const Button = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`bg-primary my-10  mt-4 text-white font-bold uppercase h-16 w-36 m-0 hover:bg-secondary transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
