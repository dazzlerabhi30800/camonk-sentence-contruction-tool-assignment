import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const ButtonWrapper = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4">
      <Button variant="outline">Back</Button>
      <Button onClick={() => navigate("/questions")} variant="default">
        Start
      </Button>
    </div>
  );
};

export default ButtonWrapper;
