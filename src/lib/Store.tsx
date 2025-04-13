import React, { createContext, useContext, useEffect, useState } from "react";
import db from "../../api/db.json";

interface context {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  currQuestion: question;
  setCurrQuestion: React.Dispatch<React.SetStateAction<question>>;
  submitData: submit[];
  setSubmitData: React.Dispatch<React.SetStateAction<Array<submit>>>;
  handleIndex: () => void;
  questions: question[];
}

const StoreContext = createContext<context | null>(null);

export default function StoreContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data: { questions },
  } = db;
  const [index, setIndex] = useState(0);
  const [currQuestion, setCurrQuestion] = useState(questions[index]);
  const [submitData, setSubmitData] = useState<submit[]>([]);

  const handleIndex = () => {
    setIndex((prev) => Math.floor((prev + 1) % questions.length));
  };

  return (
    <StoreContext.Provider
      value={{
        index,
        setIndex,
        currQuestion,
        setCurrQuestion,
        handleIndex,
        submitData,
        setSubmitData,
        questions,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error(
      "You haven't the wrapped the main comp within Store Context Provider"
    );
  }
  return context;
};
