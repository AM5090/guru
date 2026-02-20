import type { FC } from "react";

const Search: FC<DefaultPropsIcon> = ({
  width = 24,
  height = 24,
  fill = "#999999",
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
          id="search"
          width={width}
          height={height}
          x="0.000000"
          y="0.000000"
          fill="rgb(255,255,255)"
          fillOpacity="0"
        />
        <path
          id="Vector"
          d="M11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 15.4183 15.4183 19 11 19Z"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.000000"
        />
        <path
          id="Vector"
          d="M21 21L16.65 16.65"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.000000"
        />
      </svg>
    </span>
  );
};

export default Search;
