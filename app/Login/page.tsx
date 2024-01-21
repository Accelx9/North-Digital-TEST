"use client";
import { Alert, Button, InputText } from "@/components";
import { useForm } from "@/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  // Form values
  const { values, handleChange, handleSubmit } = useForm({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<{
    username?: boolean;
    password?: boolean;
  }>({});

  // Navigation
  const router = useRouter();

  // Notifications
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState<{
    message: string;
    severity: "info" | "warning" | "error" | "success";
  }>({
    message: "",
    severity: "info",
  });

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

  const handleValidate = () => {
    const { password, username } = values;
    setErrors({});
    if (!username) {
      handleAlert("warning", "The name is required.");
      setErrors((prev) => ({ ...prev, username: true }));
      return;
    }
    if (!password) {
      handleAlert("warning", "The password is required.");
      setErrors((prev) => ({ ...prev, password: true }));
      return;
    }
    router.push("/Dashboard");
  };

  return (
    <section className="bg-primary-light container-landing ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <form
          onSubmit={(e) => handleSubmit(e, handleValidate)}
          className="w-full bg-light rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <div>
              <InputText
                label="Username"
                name="username"
                error={errors.username}
                onChange={handleChange}
              />
              <InputText
                label="Password"
                name="password"
                error={errors.password}
                onChange={handleChange}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border  rounded bg-gray-50 focus:ring-3 focus:ring-primary-300   "
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 ">
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline "
                >
                  Forgot password?
                </Link>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>

              <p className="text-sm font-light text-gray-500 ">
                Don’t have an account yet?{" "}
                <Link
                  href="#"
                  className="font-medium text-primary-600 hover:underline "
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>{" "}
      <Alert
        show={showAlert}
        severity={alert.severity}
        message={alert.message}
      />
    </section>
  );
};

export default Page;
