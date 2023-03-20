import { createContext } from "react";

export const PaginationContext = createContext(null);

function PaginationProvider({ value, children }) {
  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
}

export default PaginationProvider;
