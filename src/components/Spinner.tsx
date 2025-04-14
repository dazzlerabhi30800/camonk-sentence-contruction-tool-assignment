const Spinner = () => {
  return (
    <div className="flex flex-1 justify-center h-inherit items-center">
      <div className="text-3xl animate-spin w-fit">
        <i className="bi  bi-arrow-clockwise"></i>
      </div>
    </div>
  );
};

export default Spinner;
