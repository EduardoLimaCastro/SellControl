import { NavLink } from "react-router-dom";
import { useActiveSectionContext } from "../../Context/ActiveSectionContext";
import { sidelinks } from "../../libs/data";
import clsx from "clsx";
import { useState } from "react";

const SideMenu = () => {
  type subsectionType = (typeof sidelinks)[number]["subsecao"];

  const { activeSection } = useActiveSectionContext();
  const [subSection, SetSubSection] = useState<subsectionType>();

  return (
    <aside>
      <div className="bg-[#EBF2FC] w-[280px] h-screen border-r-2 border-indigo-500/15 text-black mt-[60px]">
        <h2 className="text-black">{activeSection}</h2>
        <div className="flex flex-col gap-4 mt-24 items-center">
          {sidelinks.map(
            (sidelink, index) =>
              sidelink.secao === activeSection && (
                <NavLink
                  className={clsx(
                    " rounded-lg p-4 border-2 border-black/50 w-[80%] bg-white hover:text-green-950 hover:bg-gray-200",
                    {
                      " text-white  font-bold rounded-md bg-green-950":
                        subSection === sidelink.subsecao,
                    }
                  )}
                  key={index}
                  to={`/suppliers/${sidelink.to}`}
                  onClick={() => {
                    SetSubSection(sidelink.subsecao);
                  }}
                >
                  {sidelink.subsecao}
                  {/* <p>{activeSubection}</p> */}
                </NavLink>
              )
          )}
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
