import Button from "../../components/Button";

const Questions = () => {
  const options = ["Captivating", "Eclectic", "Garnering", "Blended"];
  return (
    <main className="flex items-center justify-center">
      <div className="flex-1 flex flex-col gap-14 max-w-3xl bg-white shadow-md p-10 rounded-3xl">
        {/* Timer Wrapper & Tracker */}
        <div className="flex flex-col gap-8">
          {/* Time & Quit Button */}
          <div className="flex items-center justify-between">
            <p className="text-gray-4 font-semibold text-p">0:18</p>
            <Button
              className="text-gray-1 text-p2 border-gray-3"
              width={76}
              height={44}
              variant="outline"
            >
              Quit
            </Button>
          </div>
          {/* Questions Tracker */}
          <div className="flex gap-2">
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <span
                  className="h-1 w-full bg-yellow rounded-[10px]"
                  key={index}
                ></span>
              ))}
          </div>
        </div>
        {/* Questions Wrapper */}
        <div className="flex flex-col gap-10">
          {/* Sentence with options */}
          <div className="flex flex-col gap-10">
            {/* Sentence */}
            <div className="flex px-[42px] flex-col gap-16">
              <p className="text-gray-4 text-center text-p1">
                Select the missing words in correct order
              </p>
              <h1 className="text-p text-black-2 font-medium">
                The _____________ musical performance _____________ elements
                from various genres, _____________ the audience with its unique
                sound and _____________ critical acclaim from industry experts.
              </h1>
            </div>
            {/* Options */}
            <div className="flex justify-center gap-4">
              {options?.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="border-gray-5 text-p3 text-gray-1"
                  width={"fit-content"}
                  height={38}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
          {/* Next Button */}
          <Button
            variant="outline"
            className="border-gray-3 text-p2 text-gray-3 self-end"
            width={"fit-content"}
            height={64}
          >
            Next
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Questions;
