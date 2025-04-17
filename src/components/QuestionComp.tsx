import { useEffect, useState } from "react";
import { useStoreContext } from "../lib/Store";
import Button from "./Button";
import SentenceDisplay from "./SentenceDisplay";
import { formatTime } from "../utils/formatTime";
import { Link, useNavigate } from "react-router-dom";

const QuestionComp = () => {
  const {
    index: currIndex,
    currQuestion,
    questions,
    loading,
    handleIndex,
    setSubmitData,
    setCurrQuestion,
    setIndex,
    submitData
  } = useStoreContext();
  const [selectOptions, setSelectOptions] = useState<Array<string>>([]);
  // interval time
  const intervalTime = 30;
  const [time, setTime] = useState(intervalTime);

  // check if the selectedOptions === correctAnswer options
  const checkArray = (arr1: string[], arr2: string[]) => {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  };

  const navigate = useNavigate();

  // this will run every time currIndex changes & reset the time when the question changes.
  useEffect(() => {
    if (currIndex > 0) {
      setTime(intervalTime);
    }
    setCurrQuestion(questions[currIndex]);
  }, [currIndex, loading]);

  // change the current index & add the current submitted anwers in submitData arr;
  const handleNext = () => {
    if (!currQuestion) return;
    const isCorrect = checkArray(currQuestion?.correctAnswer, selectOptions);
    setSubmitData((prev) => [
      ...prev,
      {
        isCorrect,
        question: currQuestion.question,
        options: currQuestion.correctAnswer,
        questionId: currQuestion.questionId,
        chosenOptions: selectOptions,
      },
    ]);
    setSelectOptions([]);
    // if we get to the last question & hit next button submit & redirect to results page.
    if (currIndex === questions.length - 1) {
      navigate("/results");
      setIndex(0);
      return;
    }
    handleIndex();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let currTime = time;
      // if the time is over, show the next question;
      if (currTime <= 0) {
        clearInterval(interval);
        handleNext();
        return;
      }
      currTime--;
      setTime(currTime);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  // push the option on selecting them in the selectedOptions array.
  const handleOption = (option: string) => {
    // first check if there are marked items in array, if it is just update their index;
    const nullIndex = selectOptions.findIndex((item) => item === "null");
    if (nullIndex < 0) {
      setSelectOptions((prev) => [...prev, option]);
    } else {
      const options = [...selectOptions];
      options[nullIndex] = option;
      setSelectOptions(options);
    }
  };

  // when clicking on the blank with chosen option it should remove that option from the selected array.
  const handleBlank = (option: string) => {
    // this will mark the word we are deselecting as null;
    setSelectOptions((prev) =>
      prev.map((item) => {
        if (item === option) {
          return "null";
        }
        return item;
      }),
    );
    // setSelectOptions((prev) => prev.filter((item) => item !== option));
  };

  if (!currQuestion) return;
  return (
    <div className="flex-1 flex flex-col gap-14 w-full max-w-3xl bg-transparent md:bg-white md:shadow-md p-5 md:p-10 rounded-3xl min-h-[600px]">
      {/* Timer Wrapper & Tracker */}
      <div className="flex flex-col gap-8">
        {/* Time & Quit Button */}
        <div className="flex items-center justify-between">
          <p className="text-gray-4 font-semibold text-p">{formatTime(time)}</p>
          <Link
            to={"/results"}
            onClick={(e) => {
              e.preventDefault();
              navigate("/results");
              setIndex(0);
            }}
            className="text-gray-1 border text-center py-2 px-3 rounded-lg shadow-sm hover:opacity-70 text-p2 border-gray-3 "
          >
            Quit
          </Link>
        </div>
        {/* Questions Tracker */}
        <div className="flex gap-2">
          {Array(questions.length)
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
          <div className="flex px-5 md:px-[42px] flex-col gap-16">
            <p className="text-gray-4 text-center md:text-p1">
              Select the missing words in correct order
            </p>
            <SentenceDisplay
              selectedWords={selectOptions}
              template={currQuestion?.question}
              handleBlank={handleBlank}
              optionLength={currQuestion?.options.length}
            />
          </div>
          {/* Options */}
          <div className="flex flex-wrap justify-center min-h-11 h-max gap-4">
            {currQuestion?.options?.map(
              (option, index) =>
                !selectOptions.includes(option) && (
                  <Button
                    key={index}
                    variant="outline"
                    className="border-gray-5 text-[10px] h-fit w-fit md:h-auto md:w-auto md:text-p3 text-gray-1 w-fit h-[38px]"
                    onClick={() => handleOption(option)}
                  >
                    {option}
                  </Button>
                ),
            )}
          </div>
        </div>
        {/* Next Button */}
        <Button
          variant="outline"
          className="disabled:border-gray-2 text-p2 mt-5 md:mt-0 disabled:text-gray-2 disabled:bg-transparent self-end px-5 h-16 w-fit bg-primary-blue text-white border-transparent"
          disabled={selectOptions.length !== currQuestion?.options.length}
          onClick={handleNext}
        >
          <i className="bi bi-arrow-right"></i>
        </Button>
      </div>
    </div>
  );
};

export default QuestionComp;
