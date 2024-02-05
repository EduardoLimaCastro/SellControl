import { createContext, useContext, useState } from "react";
import { sidelinks } from "../libs/data";

export type SubSectionName = (typeof sidelinks)[number]["subsecao"];

type ActiveSubSectionContextProviderProps = {
  children: React.ReactNode;
};

type supplierContextType = {
  activeSubSection: SubSectionName;
  setActiveSubSection: React.Dispatch<React.SetStateAction<SubSectionName>>;
};

export const supplierContext = createContext<supplierContextType | null>(null);

export default function ActiveSubSectionContextProvider({
  children,
}: ActiveSubSectionContextProviderProps) {
  const [activeSubSection, setActiveSubSection] =
    useState<SubSectionName>("Dashboard");
  return (
    <supplierContext.Provider
      value={{
        activeSubSection,
        setActiveSubSection,
      }}
    >
      {children}
    </supplierContext.Provider>
  );
}
export function useActiveSubSectionContext() {
  const context = useContext(supplierContext);

  if (context === null) {
    throw new Error(
      "useActiveSubSectionContext must be used within an ActiveSSubectionContextProvider"
    );
  }

  return context;
}
