import HOCLoader from "../../components/HOCLoader";
import QuestionComp from "../../components/QuestionComp";

const Questions = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <QuestionComp />
    </div>
  );
};

export default HOCLoader(Questions);
