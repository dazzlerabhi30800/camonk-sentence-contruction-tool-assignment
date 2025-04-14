import QuestionComp from "../../components/QuestionComp";
import Spinner from "../../components/Spinner";
import { useStoreContext } from "../../lib/Store";

const Questions = () => {
  const { currQuestion, loading } = useStoreContext();
  return (
    <div className="flex flex-1 items-center justify-center">
      {!currQuestion && loading ? <Spinner /> : <QuestionComp />}
    </div>
  );
};

export default Questions;
