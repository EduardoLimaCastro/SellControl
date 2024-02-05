import { createContext, useContext, useState } from "react";
import { sidelinks } from "../libs/data";

export type SubSectionName = (typeof sidelinks)[number]["subsecao"];

type ActiveSubSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSubSectionContextType = {
  activeSubection: SubSectionName;
  setActiveSubSection: React.Dispatch<React.SetStateAction<SubSectionName>>;
};

export const SubSectionContext =
  createContext<ActiveSubSectionContextType | null>(null);

export default function ActiveSubSectionContextProvider({
  children,
}: ActiveSubSectionContextProviderProps) {
  const [activeSubection, setActiveSubSection] =
    useState<SubSectionName>("Dashboard");
  return (
    <SubSectionContext.Provider
      value={{
        activeSubection,
        setActiveSubSection,
      }}
    >
      {children}
    </SubSectionContext.Provider>
  );
}

export function useActiveSubSectionContext() {
  const context = useContext(SubSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
