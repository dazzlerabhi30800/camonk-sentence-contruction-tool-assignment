import { useStoreContext } from "../../lib/Store";
import ScoreQuestionComp from "../../components/ScoreQuestionComp";

const ReviewAnswerWrapper = () => {
  const { questions } = useStoreContext();
  return (
    <div className="flex flex-col gap-16 sm:gap-20 md:gap-[120px] pt-[60px] pb-5 px-4 w-[90%] max-w-3xl">
      {questions.map((item, index) => (
        <ScoreQuestionComp key={item.questionId} item={item} index={index} />
      ))}
    </div>
  );
};

export default ReviewAnswerWrapper;
