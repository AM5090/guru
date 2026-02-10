import type { FC } from "react";

const UserIcon: FC<DefaultPropsIcon> = ({
  width = 24,
  height = 24,
  multiFill = ["#c9c9c9", "#cacaca"],
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
          id="user icon"
          width={width}
          height={height}
          x="0.000000"
          y="0.000000"
        />
        <circle
          id="Ellipse 1"
          cx="12"
          cy="7.25"
          r="4"
          stroke={multiFill[0]}
          strokeWidth="2.000000"
        />
        <path
          id="Rectangle 1"
          d="M19 16.75C19 14.5409 17.2091 12.75 15 12.75L9 12.75C6.79086 12.75 5 14.5409 5 16.75L5 21.75L19 21.75L19 16.75ZM17 19.75L17 16.75C17 16.4739 16.9512 16.2179 16.8536 15.9822C16.7559 15.7465 16.6095 15.531 16.4142 15.3358C16.219 15.1405 16.0035 14.9941 15.7678 14.8964C15.5321 14.7988 15.2761 14.75 15 14.75L9 14.75C8.72386 14.75 8.46794 14.7988 8.23223 14.8964C7.99653 14.9941 7.78105 15.1405 7.58579 15.3358C7.39052 15.531 7.24408 15.7465 7.14645 15.9822C7.04882 16.2179 7 16.4739 7 16.75L7 19.75L17 19.75Z"
          fill={multiFill[1]}
          fillRule="evenodd"
        />
      </svg>
    </span>
  );
};

export default UserIcon;
