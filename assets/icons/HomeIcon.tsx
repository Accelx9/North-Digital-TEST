import * as React from "react";
import { SVGProps } from "react";

export const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26.335}
    height={30.613}
    {...props}
  >
    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path d="M-57.16 137.443h1920v-1205h-1920Z" />
      </clipPath>
    </defs>
    <path
      d="M0 0h4.217v11.334l-7.797 7.103-7.799-7.103V0h4.459v5.376c0 .575.466 1.04 1.039 1.04h4.842A1.04 1.04 0 0 0 0 5.376Zm5.256-2.078h-6.295a1.04 1.04 0 0 0-1.039 1.039v5.377h-2.764v-5.377a1.04 1.04 0 0 0-1.039-1.039h-6.537c-.573 0-1.038.465-1.038 1.039v12.832c0 .292.123.571.339.768l8.837 8.05a1.039 1.039 0 0 0 1.399 0l8.836-8.05c.217-.197.34-.476.34-.768V-1.039a1.04 1.04 0 0 0-1.039-1.039"
      clipPath="url(#a)"
      style={{
        fill: "#fff",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      transform="matrix(1.33333 0 0 -1.33333 17.941 27.842)"
    />
  </svg>
);
