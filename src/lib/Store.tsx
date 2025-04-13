import React, { createContext, useContext, useState } from "react";

interface context {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const StoreContext = createContext<context | null>(null);

export default function StoreContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [index, setIndex] = useState(4);
  return (
    <StoreContext.Provider value={{ index, setIndex }}>
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
