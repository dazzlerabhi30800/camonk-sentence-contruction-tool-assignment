import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useStoreContext } from "../../lib/Store";
import { useEffect, useState } from "react";

const Remarks = () => {
  const { questions, submitData } = useStoreContext();
  const [scorePercent, setScorePercent] = useState(2 * Math.PI * 100);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  useEffect(() => {
    calculateScore();
  }, []);

  const calculateScore = () => {
    setLoading(true);
    const submitted = submitData.filter((data) => data.isCorrect);
    const totalLength = questions.length;
    const circumference = 2 * Math.PI * 100;
    const score = Math.floor((submitted.length / totalLength) * 100);
    const strokePct =
      (((totalLength - submitted.length) / 10) * 100 * circumference) / 100;
    setScorePercent(strokePct);
    setScore(score);
    setLoading(false);
  };
  return (
    <div className="flex flex-col gap-12 md:gap-20 items-center text-center">
      <div className="flex flex-col gap-6 md:gap-10 items-center">
        <div className="main relative">
          <svg
            className="circular--progress"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <linearGradient id="GradientColor" x1="0" y1="0" x2="1" y2="1">
              <stop offset="10%" stopColor="#317F39" />
              <stop offset="70%" stopColor="#317F39" />
            </linearGradient>
            <circle
              cx="150"
              cy="150"
              r="100"
              id="circle--skeleton"
              strokeDasharray={2 * Math.PI * 100}
              strokeDashoffset={scorePercent}
              strokeLinecap="round"
            />
            <circle
              cx="150"
              cy="150"
              r="100"
              id="circle--progress"
              strokeDasharray={2 * Math.PI * 100}
              strokeDashoffset={scorePercent}
              strokeLinecap="round"
            />
          </svg>
          <div className="flex flex-col absolute text-center  text-[#317f39] top-1/2 left-1/2 -translate-y-[50%] -translate-x-1/2">
            <h1 className="text-xl md:text-3xl font-semibold">{score}</h1>
            <p className="md:text-lg font-medium">Overall Score</p>
          </div>
        </div>
        <p className="text-black-2 text-sm sm:text-base md:text-p2 w-[90%] max-w-3xl">
          {loading
            ? "..."
            : score < 30
            ? "You have done very poor, please improve your grammer"
            : " While you correctly formed several sentences, there are a couple of areas where improvement is needed. Pay close attention to sentence structure and word placement to ensure clarity and correctness. Review your responses below for more details. "}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Link
          to={"/"}
          className=" border-2 border-primary-blue text-primary-blue rounded-lg shadow-sm  py-4 px-8 md:px-16  md:text-p3 font-medium hover:opacity-70"
        >
          Go to Dashboard
        </Link>
        <Button
          variant="outline"
          className="border-transparent text-2xl text-black-1 wif mx-auto hover:translate-y-2 transition duration-300 linear"
        >
          <i className="bi bi-chevron-down"></i>
        </Button>
      </div>
    </div>
  );
};

export default Remarks;
