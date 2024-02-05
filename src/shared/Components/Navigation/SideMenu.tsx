import { NavLink } from "react-router-dom";
import { useActiveSectionContext } from "../../Context/ActiveSectionContext";
import { sidelinks } from "../../libs/data";

const SideMenu = () => {
  const { activeSection } = useActiveSectionContext();

  return (
    <aside>
      <div className="bg-[#EBF2FC] w-[280px] h-screen border-r-2 border-indigo-500/75 text-black mt-[60px]">
        <h2 className="text-black">{activeSection}</h2>
        <div className="flex flex-col gap-4 mt-24 items-center">
          {sidelinks.map(
            (sidelink, index) =>
              sidelink.secao === activeSection && (
                <NavLink
                  key={index}
                  className="bg-white rounded-lg p-4 border-2 border-black/50 w-[80%] hover:bg-[#1E4847] hover:text-white"
                  to={`/suppliers/${sidelink.to}`}
                >
                  {sidelink.subsecao}
                </NavLink>
              )
          )}
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
