import React from "react";

function ChevronButtom({ svgProps }) {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgProps}
      >
        <g id="icon/chevron-bottom">
          <path
            id="Vector"
            d="M19.5 9L12 16.5L4.5 9"
            stroke="#13101E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </>
  );
}

export default ChevronButtom;
