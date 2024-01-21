import React from "react";
import { SVGProps } from "react";

export const FolderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28.819}
    height={28.228}
    {...props}
  >
    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path d="M-44.849 441.301h1920v-1205h-1920Z" />
      </clipPath>
    </defs>
    <path
      d="M0 0h17.459v12.575H9.84c-.258 0-.508.096-.699.27l-4.587 4.17H0Zm18.498-2.078H-1.038c-.574 0-1.039.465-1.039 1.039v19.093c0 .574.465 1.039 1.039 1.039h5.993c.259 0 .507-.096.698-.27l4.588-4.171h8.257c.573 0 1.039-.464 1.039-1.038V-1.039a1.04 1.04 0 0 0-1.039-1.039"
      clipPath="url(#a)"
      style={{
        fill: "#fff ",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      transform="matrix(1.33333 0 0 -1.33333 2.77 25.457)"
    />
  </svg>
);
