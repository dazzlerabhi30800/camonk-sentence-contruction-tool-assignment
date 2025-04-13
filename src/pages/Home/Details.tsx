const Details = () => {
  const detailData = [
    {
      title: "Time Per Question",
      text: <p className="text-gray-2 text-xs md:text-p2">30 sec</p>,
      textClass: "",
    },

    {
      title: "Total Question",
      text: <p className="text-gray-2 text-xs md:text-p2">10</p>,
    },

    {
      title: "Coins",
      text: (
        <p className="flex items-end gap-1 text-gray-1 text-xs md:text-p3">
          <span className="w-5 h-5 md:w-6 md:h-6 rounded-[50%] border-3 border-yellow-400 bg-yellow-500"></span>
          0
        </p>
      ),
    },
  ];
  return (
    <div className="flex items-center gap-10 md:gap-16">
      {detailData?.map(({ title, text }, index) => (
        <div className="flex items-center gap-5 md:gap-8" key={index}>
          <div className="flex flex-col items-center font-medium text-center gap-4">
            <p className="text-black-1 text-sm md:text-p1">{title}</p>
            {text}
          </div>
          {index < detailData.length - 1 && (
            <span className="h-12 md:h-16 bg-gray-3 w-[2px]"></span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Details;
