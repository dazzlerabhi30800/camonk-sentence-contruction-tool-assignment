import QuestionComp from "../../components/QuestionComp";
import { useStoreContext } from "../../lib/Store";

const Questions = () => {
  const { currQuestion, loading } = useStoreContext();
  return (
    <main className="flex items-center justify-center">
      {!currQuestion && loading ? (
        <div className="text-3xl animate-spin w-fit">
          <i className="bi  bi-arrow-clockwise"></i>
        </div>
      ) : (
        <QuestionComp />
      )}
    </main>
  );
};

export default Questions;
