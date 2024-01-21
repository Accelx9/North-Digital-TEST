import * as React from "react";
import { SVGProps } from "react";

export const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22.629}
    height={22.088}
    {...props}
  >
    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path d="M-873.905 442.216h1920v-1205h-1920Z" />
      </clipPath>
    </defs>
    <path
      d="M0 0h-6.516v-6.442h-3.939V0h-6.517v3.682h6.517v6.442h3.939V3.682H0Z"
      clipPath="url(#a)"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      transform="matrix(1.33333 0 0 -1.33333 22.63 13.499)"
    />
  </svg>
);
