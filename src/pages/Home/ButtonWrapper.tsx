import Button from "../../components/Button";

const ButtonWrapper = () => {
  return (
    <div className="flex gap-4">
      <Button variant="outline">Back</Button>
      <Button variant="default">Start</Button>
    </div>
  );
};

export default ButtonWrapper;
