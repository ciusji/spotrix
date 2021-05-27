import React from "react";

export default function FillColorIcon(props) {
  return (
    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>fill_color</title>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="fill_color" fill="#5F6368" fillRule="nonzero">
          <path d="M11.04,5.96 L5.08,0 L4.13666667,0.943333328 L5.72333333,2.53 L2.29333333,5.96 C1.90339549,6.3504234 1.90339549,6.98290993 2.29333333,7.37333333 L5.96,11.04 C6.15333333,11.2366667 6.41,11.3333333 6.66666667,11.3333333 C6.92333334,11.3333333 7.18,11.2366667 7.37333333,11.04 L11.04,7.37333333 C11.4299378,6.98290993 11.4299378,6.3504234 11.04,5.96 Z M3.47,6.66666667 L6.66666667,3.47333333 L9.86333333,6.66666667 L3.47,6.66666667 Z M12.6666667,7.66666667 C12.6666667,7.66666667 11.3333333,9.11 11.3333333,10 C11.3333333,10.7366667 11.93,11.3333333 12.6666667,11.3333333 C13.4033333,11.3333333 14,10.7366667 14,10 C14,9.11 12.6666667,7.66666667 12.6666667,7.66666667 L12.6666667,7.66666667 Z" id="Shape"/>
          {!!props.color ?
            <polygon fill={props.color} points="0 13.3333333 16 13.3333333 16 16 0 16"/> :
            <polygon fillOpacity="0.36" points="0 13.3333333 16 13.3333333 16 16 0 16"/>
          }
        </g>
      </g>
    </svg>
  );
}