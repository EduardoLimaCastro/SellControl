import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { useActiveSectionContext } from "../../Context/ActiveSectionContext";
import { links } from "../../libs/data";

const NavLinks = () => {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <ul className=" hidden tablet:block">
      <div className="flex justify-center h-[40px] items-center mx-4 rounded-lg hover:text-[#1E4847]">
        <ul className="flex w-[100%] gap-4 flex-wrap items-center justify-center  text-[0.9rem] font-medium text-gray-400 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {/* <NavLink to="/" exact className="mx-2 hover:text-[#1E4847] w-[100%]">
            Home
          </NavLink>
        </div>
        <div className="flex justify-center h-[40px] items-center hover:bg-white mx-4 rounded-lg hover:text-[#1E4847]">
          <NavLink
            to="/suppliers"
            exact
            className="mx-2 hover:text-[#1E4847] w-[100%]"
          >
            Fornecedores
          </NavLink> */}
          {links.map((link) => (
            <NavLink
              className={clsx(
                "flex  text-white items-center justify-center px-2 py-3 hover:text-gray-950 transition w-[100px]",
                {
                  "text-green-950 font-bold bg-gray-100 rounded-md hover:text-green-700 hover:bg-gray-300":
                    activeSection === link.name,
                }
              )}
              to={`/${link.link}`}
              onClick={() => {
                setActiveSection(link.name);
              }}
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </ul>
  );
};
export default NavLinks;
