const Square = (props: any) => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="6" height="6" transform="translate(0.5)" fill="#F8EE44" />
      <rect width="6" height="6" transform="translate(6.5 6)" fill="#5B1A98" />
    </svg>
  );
};
export default Square;
