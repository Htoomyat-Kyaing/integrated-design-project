const UpdateAlert = () => {
  return (
    <div className="absolute bottom-0 flex justify-center mb-4 -translate-x-1/2 max-w-max alert alert-warning left-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 stroke-current shrink-0"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Successfully Edited!</span>
    </div>
  );
};

export default UpdateAlert;
