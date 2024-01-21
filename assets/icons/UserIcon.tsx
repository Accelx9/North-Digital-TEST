import * as React from "react";
import { SVGProps } from "react";

export const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33.146}
    height={38.647}
    {...props}
  >
    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path d="M-64.969 555.628h1920v-1205h-1920Z" />
      </clipPath>
    </defs>
    <path
      d="M0 0h.007zm-21.742.521A17.563 17.563 0 0 1-11.39-2.832 17.56 17.56 0 0 1-1.039.521v1.692c0 3.852-3.004 7.141-6.839 7.484a1.04 1.04 0 0 0-.469 1.909 5.627 5.627 0 0 1 2.601 4.748 5.65 5.65 0 0 1-5.644 5.643 5.65 5.65 0 0 1-5.643-5.643c0-1.926.971-3.701 2.6-4.748a1.04 1.04 0 0 0-.468-1.909c-3.836-.343-6.841-3.63-6.841-7.484zM-11.39-4.91c-4.371 0-8.528 1.412-12.022 4.084A1.04 1.04 0 0 0-23.82 0v2.213c0 4.171 2.758 7.822 6.581 9.103a7.682 7.682 0 0 0-1.872 5.038c0 4.257 3.464 7.721 7.721 7.721 4.258 0 7.722-3.464 7.722-7.721 0-1.88-.677-3.656-1.872-5.038 3.822-1.282 6.579-4.933 6.579-9.103V0c0-.324-.15-.629-.408-.826C-2.863-3.498-7.021-4.91-11.39-4.91"
      clipPath="url(#a)"
      style={{
        fill: "#fff",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
      transform="matrix(1.33333 0 0 -1.33333 31.76 32.1)"
    />
  </svg>
);