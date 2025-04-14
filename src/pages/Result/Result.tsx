import Remarks from "./Remarks";
import ReviewAnswerWrapper from "./ReviewAnswerWrapper";
import { useStoreContext } from "../../lib/Store";
import Spinner from "../../components/Spinner";

const Result = () => {
  const { loading } = useStoreContext();
  return (
    <div className="flex  flex-1 flex-col items-center">
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center py-20">
          <Remarks />
          <ReviewAnswerWrapper />
        </div>
      )}
    </div>
  );
};

export default Result;
