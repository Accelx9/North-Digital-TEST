"use client";

interface Props {
  message: string;
  severity: "info" | "warning" | "error" | "success";
  show?: boolean;
}

const styles = {
  error: " bg-red-100  border-red-400 text-red-700",
  success: " bg-green-100  border-green-400 text-green-700",
  info: " bg-blue-100  border-blue-400 text-blue-700",
  warning: " bg-orange-100  border-orange-400 text-orange-700",
};

export const Alert = ({ message, severity, show }: Props) => {
  return (
    <div
      className={`absolute top-10 w-64  border-l-4 left-1/2 right-1/2 border px-4 py-3 rounded ${
        styles[severity]
      } ${show ? "opacity-100" : "opacity-0"} transition-all`}
      role="alert"
    >
      <p>{message}</p>
    </div>
  );
};
