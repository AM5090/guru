import type { FC } from "react";

const Plus: FC<DefaultPropsIcon> = ({
  width = 24,
  height = 24,
  fill = "#ffffff",
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
        <rect
          id="24/ outlined / suggested / symbol / +"
          width={width}
          height={height}
          x="0.000000"
          y="0.000000"
          fill="rgb(255,255,255)"
          fillOpacity="0"
        />
        <path
          id="Vector"
          d="M0 0L14 0"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.000000"
          transform="matrix(0,1,-1,0,12,5)"
        />
        <path
          id="Vector"
          d="M5 12L19 12"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.000000"
        />
      </svg>
    </span>
  );
};

export default Plus;
