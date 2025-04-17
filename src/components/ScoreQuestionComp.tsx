import { useStoreContext } from "../lib/Store";
import ScoreSentenceDisplay from "./ScoreSentenceDisplay";

interface scoreProps {
  item: question;
  index: number;
}

const ScoreQuestionComp = ({ item, index }: scoreProps) => {
  const { submitData } = useStoreContext();
  const submitted = submitData.find(
    (data) => data.questionId === item.questionId,
  );
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-md">
      {/* Correct Answer */}
      <div className="flex flex-col gap-3 p-4 pb-6">
        <div className="flex items-center justify-between">
          <span className="py-1 text-p4 w-fit px-2 rounded-xl text-gray-4 bg-gray-6 shadow-sm">
            Prompt
          </span>
          <p className="text-gray-2 text-p4">
            <span className="text-gray-1 font-medium">{index + 1}</span>/10
          </p>
        </div>
        <ScoreSentenceDisplay
          template={item.question}
          optionLength={4}
          selectedWords={item.correctAnswer}
          className="md:px-2 text-gray-1 text-p4 md:text-p3 "
        />
      </div>
      {/* Your Submitted Answer */}
      <div className="flex flex-col gap-3 py-6 px-4 md:px-6  bg-[#f6f9f9] rounded-b-2xl">
        <div className="flex gap-2 text-p4 md:text-p3 items-center">
          <p className="text-gray-4">Your Response</p>
          <span
            className={`p-1 rounded-lg text-green-500 bg-green-100/50 ${
              submitted
                ? submitted.isCorrect
                  ? "text-green-500 bg-green-100/50"
                  : "text-red-500 bg-red-100/50"
                : "text-red-500 bg-red-100/50"
            }`}
          >
            {submitted
              ? submitted.isCorrect
                ? "Correct"
                : "Incorrect"
              : "Incorrect"}
          </span>
        </div>

        <ScoreSentenceDisplay
          template={item.question}
          optionLength={item.options.length}
          selectedWords={submitted ? submitted.chosenOptions : []}
          className="text-black-2 text-p3 md:text-p2"
        />
      </div>
    </div>
  );
};

export default ScoreQuestionComp;
