import { Sale } from "@/types";
import React, { Fragment } from "react";

export const SaleDetails = ({ sale }: { sale: Sale }) => {
  return (
    <Fragment>
      {" "}
      <p className="text-xl my-2">
        <strong>Client:</strong> {"   "}
        {sale.client.name}
      </p>
      <p className="text-xl my-2">
        <strong>Branch Office:</strong> {"   "}
        {sale.client.name}
      </p>
      <p className="text-xl my-2">
        <strong>Currency:</strong> {"   "}
        {sale.client.name}
      </p>
      <p className="text-2xl my-6 font-bold">Details</p>
      {sale.details.map((detail, index) => (
        <div className="flex flex-col" key={index}>
          <p className="text-xl my-2">
            <strong>Name:</strong> {"   "}
            {detail.product.name}
          </p>
          <p className="text-xl my-2">
            <strong>Quantity:</strong> {"   "}
            {detail.quantity}
          </p>
          <p className="text-xl my-2">
            <strong>Price:</strong> {"   "}
            {sale.currency.name}
            {detail.price}
          </p>
          <p className="text-xl my-2">
            <strong>Subtotal:</strong> {"   "}
            {detail.price * detail.quantity}
          </p>
        </div>
      ))}
      <p className="text-xl my-6">
        <strong>Total:</strong> {"   "}
        {sale.totalSale}
      </p>
    </Fragment>
  );
};
