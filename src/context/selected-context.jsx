import { createContext } from "react";

export const SelectedContext = createContext(null);

function SelectedProvider({ value, children }) {
  return (
    <SelectedContext.Provider value={value}>
      {children}
    </SelectedContext.Provider>
  );
}

export default SelectedProvider;
