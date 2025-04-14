import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Remarks = () => {
  const circumference = 2 * Math.PI * 100;
  const strokePct = ((0 / 10) * 100 * circumference) / 100;
  return (
    <div className="flex flex-col gap-20 items-center text-center">
      <div className="flex flex-col gap-10 items-center">
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
              strokeDasharray={circumference}
              strokeDashoffset={strokePct}
              strokeLinecap="round"
            />
            <circle
              cx="150"
              cy="150"
              r="100"
              id="circle--progress"
              strokeDasharray={circumference}
              strokeDashoffset={strokePct}
              strokeLinecap="round"
            />
          </svg>
          <div className="flex flex-col absolute text-center  text-[#317f39] top-1/2 left-1/2 -translate-y-[50%] -translate-x-1/2">
            <h1 className="text-3xl font-semibold">Score</h1>
            <p className="text-lg font-medium">Overall Score</p>
          </div>
        </div>
        <p className="text-black-2 text-p2 w-[90%] max-w-3xl">
          While you correctly formed several sentences, there are a couple of
          areas where improvement is needed. Pay close attention to sentence
          structure and word placement to ensure clarity and correctness. Review
          your responses below for more details.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Link
          to={"/"}
          className="py-4 border-2 border-primary-blue text-primary-blue rounded-lg shadow-sm px-16 text-p3 font-medium hover:opacity-70"
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
