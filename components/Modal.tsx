import { AddIcon } from "@/assets/icons";
import React, { Fragment } from "react";
import { Button } from ".";

interface Props {
  title: string;
  children: React.ReactNode;
  handleSubmit: VoidFunction;
  handleDismiss: VoidFunction;
}

/**
 * @param handleDismiss Function that triggers on the dismiss event
 * @param handleSubmit Function that triggers on the submit event
 * @param children Content of the modal
 * @param title Title of the modal
 * @returns {React.JSX.Element}
 */
export const Modal = ({
  children,
  title,
  handleSubmit,
  handleDismiss,
}: Props): React.JSX.Element => {
  return (
    <Fragment>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className=" w-10/12 sm:w-full my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex w-full items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">{title}</h3>

              <button
                onClick={handleDismiss}
                className="h-10 w-10 text-center cursor-pointer text-lg hover:text-gray-700 transition-all text-grey"
              >
                <AddIcon className="rotate-45 ml-2 " />
              </button>
            </div>
            {/*body*/}
            <div className=" w-full bg-light p-6 flex-auto">{children}</div>
            {/*footer*/}
            <div className="flex items-center justify-between gap-2 p-6 border-t border-solid border-blueGray-200 rounded-b">
              <Button
                variant="outlined"
                className="capitalize"
                onClick={() => {
                  handleDismiss();
                  handleSubmit();
                }}
              >
                Cancel
              </Button>
              <Button
                className="capitalize"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </Fragment>
  );
};
