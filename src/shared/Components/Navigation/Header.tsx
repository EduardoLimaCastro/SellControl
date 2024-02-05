import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { Link } from "react-router-dom";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

import AccountMenu from "./AccountMenu";
import FadeMenu from "./FadeMenu";

export default function Header(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <header className="flex justify-between items-center  text-center mx-2 w-[100%] h-[60px] bg-[#1E4847] rounded-2xl ">
      <div className="flex w-[350px] text-white justify-center items-center">
        <BubbleChartIcon className="h-[40px]" />
        <h1 className="mx-4 h-auto text-md tablet:text-2xl font-['Didact Gothic'] text-white h-[100%]">
          <Link to={"/"}>Sell Control</Link>
        </h1>
      </div>
      <FadeMenu />
      <div className="flex w-full items-center justify-center text-md font-['Didact Gothic'] text-white h-[100%]">
        {props.children}
      </div>
      <AccountMenu />
    </header>
  );
}
