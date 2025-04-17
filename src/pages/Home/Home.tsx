import { useEffect } from "react";
import MainWrapper from "./MainWrapper";
import { useStoreContext } from "../../lib/Store";

const Home = () => {
  const { resetState } = useStoreContext();
  useEffect(() => {
    resetState();
    return () => {
      resetState();
    };
  }, []);
  return (
    <div className="flex flex-1 flex-col">
      <MainWrapper />
    </div>
  );
};

export default Home;
