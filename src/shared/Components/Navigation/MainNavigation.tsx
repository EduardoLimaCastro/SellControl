import Header from "./Header";
import NavLinks from "./NavLinks";

const MainNavigation = () => {
  return (
    <div className="fixed flex gap-8 w-[100%] h-[60px] bg-[#1E4847] rounded-2xl">
      <Header>
        <nav className="mx-4 w-full">
          <NavLinks></NavLinks>
        </nav>
      </Header>
    </div>
  );
};

export default MainNavigation;
