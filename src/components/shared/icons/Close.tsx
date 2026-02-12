import type { FC } from "react";

const Close: FC<DefaultPropsIcon> = ({
  width = 16,
  height = 18,
  fill = "#c9c9c9",
  className = "",
  onClick,
}) => {
  return (
    <span className={className || ""} onClick={onClick}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        fill="none"
      >
        <g id="Close">
          <path
            id="Line 2"
            d="M0 0L21.2603 0"
            stroke={fill}
            strokeLinecap="round"
            strokeWidth="2.000000"
            transform="matrix(0.658505,0.752577,-0.752577,0.658505,1.01428,1.00404)"
          />
          <path
            id="Line 3"
            d="M0 0L21.2603 0"
            stroke={fill}
            strokeLinecap="round"
            strokeWidth="2.000000"
            transform="matrix(-0.658505,0.752577,0.752577,0.658505,15.004,1.00404)"
          />
        </g>
      </svg>
    </span>
  );
};

export default Close;
