import ScoreSentenceDisplay from "./ScoreSentenceDisplay";

const ScoreQuestionComp = () => {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-md">
      {/* Correct Answer */}
      <div className="flex flex-col gap-3 p-4 pb-6">
        <div className="flex items-center justify-between">
          <span className="py-1 w-fit px-2 rounded-xl text-gray-4 bg-gray-6 shadow-sm">
            Prompt
          </span>
          <p className="text-gray-2 text-p4">
            <span className="text-gray-1 font-medium">1</span>/10
          </p>
        </div>
        <ScoreSentenceDisplay
          template="The company's _____________ approach to product development _____________ customer feedback at every stage, _____________ user satisfaction and _____________ a loyal consumer base."
          optionLength={4}
          selectedWords={[
            "User-centric",
            "Incorporated",
            "Enhancing",
            "Cultivating",
          ]}
          className="px-2 text-p3 text-gray-1"
        />
        {/* <p className="text-gray-1 text-p3">
          The cat chased the mouse across the yard, leaping over obstacles along
          the way.
        </p> */}
      </div>
      {/* Submitted Answer */}
      <div className="flex flex-col gap-3 p-6 bg-[#f6f9f9] rounded-b-2xl">
        <div className="flex gap-2 items-center">
          <p className="text-gray-4 text-p3">Your Response</p>
          <span className="p-1 rounded-lg text-green-500 bg-green-100/50">
            Correct
          </span>
        </div>

        <ScoreSentenceDisplay
          template="The company's _____________ approach to product development _____________ customer feedback at every stage, _____________ user satisfaction and _____________ a loyal consumer base."
          optionLength={4}
          selectedWords={[
            "User-centric",
            "Incorporated",
            "Enhancing",
            "Cultivating",
          ]}
          className="text-black-2 text-p2"
        />
        {/* <p className="text-black-2 text-p2">
          The cat chased the mouse across the yard, leaping over obstacles along
          the way.
        </p> */}
      </div>
    </div>
  );
};

export default ScoreQuestionComp;
