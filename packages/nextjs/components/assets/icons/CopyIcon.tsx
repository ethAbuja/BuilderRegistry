const CopyIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5.24985 4.5V2.25C5.24985 1.83579 5.58564 1.5 5.99985 1.5H14.9998C15.4141 1.5 15.7498 1.83579 15.7498 2.25V12.75C15.7498 13.1642 15.4141 13.5 14.9998 13.5H12.7498V15.7493C12.7498 16.1639 12.4124 16.5 11.9948 16.5H3.00499C2.58794 16.5 2.25 16.1665 2.25 15.7493L2.25195 5.25065C2.25202 4.83608 2.58948 4.5 3.00706 4.5H5.24985ZM3.75181 6L3.75014 15H11.2498V6H3.75181ZM6.74985 4.5H12.7498V12H14.2498V3H6.74985V4.5Z"
        fill="#868B97"
      />
    </svg>
  );
};

export default CopyIcon;
