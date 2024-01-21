import * as React from "react";
import { SVGProps } from "react";

export const SquareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24.97}
    height={26.156}
    {...props}
  >
    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path d="M-62.236 334.035h1920v-1205h-1920Z" />
      </clipPath>
    </defs>
    <path
      d="M0 0h-16.65c-.574 0-1.039.465-1.039 1.039v17.539a1.04 1.04 0 0 0 1.039 1.039h9.102a1.04 1.04 0 0 0 0-2.078h-8.063V2.078h14.573v7.73a1.039 1.039 0 1 0 2.077 0V1.039C1.039.465.574 0 0 0"
      clipPath="url(#a)"
      style={{
        fill: "#fff",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      transform="matrix(1.33333 0 0 -1.33333 23.585 26.156)"
    />
  </svg>
);
