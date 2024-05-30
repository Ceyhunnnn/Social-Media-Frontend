const Send = ({ onclick }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      onClick={onclick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2822_78)">
        <path
          d="M18.3334 1.66667L9.16669 10.8333"
          stroke="#5D6778"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3334 1.66667L12.5 18.3333L9.16669 10.8333L1.66669 7.5L18.3334 1.66667Z"
          stroke="#5D6778"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2822_78">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Send;
