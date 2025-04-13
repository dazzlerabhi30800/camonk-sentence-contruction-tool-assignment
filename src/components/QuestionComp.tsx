import { useState } from "react";
import { useStoreContext } from "../lib/Store";
import Button from "./Button";
import SentenceDisplay from "./SentenceDisplay";

const QuestionComp = () => {
  const { index: currIndex, currQuestion, handleIndex } = useStoreContext();
  const [selectOptions, setSelectOptions] = useState<string[]>([]);
  const handleBlank = (option: string) => {
    setSelectOptions((prev) => prev.filter((item) => item !== option));
  };
  return (
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
                className={`h-1 w-full ${
                  currIndex >= index ? "bg-yellow" : "bg-gray-3"
                } rounded-[10px]`}
                key={index}
              ></span>
            ))}
        </div>
      </div>
      {/* Questions Wrapper */}
      <div className="flex flex-col gap-10">
        {/* Sentence with options */}
        <div className="flex flex-col gap-10">
          {/* sentence */}
          <div className="flex px-[42px] flex-col gap-16">
            <p className="text-gray-4 text-center text-p1">
              Select the missing words in correct order
            </p>
            <SentenceDisplay
              selectedWords={selectOptions}
              template={currQuestion.question}
              handleBlank={handleBlank}
              optionLength={currQuestion.options.length}
            />
            {/* <h1 className="text-p text-black-2 font-medium leading-[1.8]">
              {currQuestion.question}
            </h1> */}
          </div>
          {/* Options */}
          <div className="flex justify-center gap-4">
            {currQuestion.options?.map(
              (option, index) =>
                !selectOptions.includes(option) && (
                  <Button
                    key={index}
                    variant="outline"
                    className="border-gray-5 text-p3 text-gray-1"
                    onClick={() =>
                      setSelectOptions((prev) => [...prev, option])
                    }
                    width={"fit-content"}
                    height={38}
                  >
                    {option}
                  </Button>
                )
            )}
          </div>
        </div>
        {/* Next Button */}
        <Button
          variant="outline"
          className="border-gray-3 text-p2 text-gray-3 self-end"
          disabled={currIndex === 9}
          width={"fit-content"}
          onClick={() => handleIndex()}
          height={64}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default QuestionComp;
