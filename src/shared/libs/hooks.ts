import { useActiveSectionContext } from "../Context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { links } from "../libs/data";

type SectionName = (typeof links)[number]["name"];

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - (timeLastClick as number) > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeLastClick, sectionName]);

  return {
    ref,
  };
}
