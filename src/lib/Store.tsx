import React, { createContext, useContext, useState } from "react";

interface context {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  currQuestion: question | undefined;
  setCurrQuestion: React.Dispatch<React.SetStateAction<question | undefined>>;
  submitData: submit[];
  setSubmitData: React.Dispatch<React.SetStateAction<Array<submit>>>;
  handleIndex: () => void;
  questions: question[];
  setQuestions: React.Dispatch<React.SetStateAction<Array<question>>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  resetState: () => void;
}

const StoreContext = createContext<context | null>(null);

export default function StoreContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [questions, setQuestions] = useState<question[]>([]);
  const [index, setIndex] = useState(0);
  const [currQuestion, setCurrQuestion] = useState<question | undefined>();
  const [submitData, setSubmitData] = useState<submit[]>([]);
  const [loading, setLoading] = useState(false);

  const handleIndex = () => {
    setIndex((prev) => prev + 1);
  };

  const resetState = () => {
    setSubmitData([]);
    setIndex(0);
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
        setQuestions,
        loading,
        setLoading,
        resetState,
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
      "You haven't the wrapped the main comp within Store Context Provider",
    );
  }
  return context;
};
