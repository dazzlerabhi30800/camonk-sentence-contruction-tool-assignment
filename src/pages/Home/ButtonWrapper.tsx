import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const ButtonWrapper = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4">
      <Button variant="outline" className="w-[120px] md:w-[140px] h-[42px]">
        Back
      </Button>
      <Button
        onClick={() => navigate("/questions")}
        className="w-[120px] md:w-[140px] h-[42px]"
        variant="default"
      >
        Start
      </Button>
    </div>
  );
};

export default ButtonWrapper;
