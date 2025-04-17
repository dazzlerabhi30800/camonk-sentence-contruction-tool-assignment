import Remarks from "./Remarks";
import ReviewAnswerWrapper from "./ReviewAnswerWrapper";
import HOCLoader from "../../components/HOCLoader";

const Result = () => {
  return (
    <div className="flex  flex-1 flex-col items-center">
      <div className="flex flex-col items-center pt-20 md:pt-[136px] pb-10 md:pb-20">
        <Remarks />
        <ReviewAnswerWrapper />
      </div>
    </div>
  );
};

export default HOCLoader(Result);
