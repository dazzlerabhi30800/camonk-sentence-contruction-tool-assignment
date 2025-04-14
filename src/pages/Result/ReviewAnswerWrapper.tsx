import React from "react";
import { useStoreContext } from "../../lib/Store";
import ScoreQuestionComp from "../../components/ScoreQuestionComp";

const ReviewAnswerWrapper = () => {
  const { submitData } = useStoreContext();
  return (
    <div className="flex flex-col gap-[120px] py-[60px] px-4 w-[90%] max-w-3xl">
      <ScoreQuestionComp />
    </div>
  );
};

export default ReviewAnswerWrapper;
