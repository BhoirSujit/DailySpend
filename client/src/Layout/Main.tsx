import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/solid";
import {  ReactNode } from "react";
import { Link } from "react-router-dom";

const Main = ({children, title }) => {
  return (
    <main className="p-2">
      <div className="bread flex items-center gap-1">
        <Link className="flex items-center gap-1" to={"/"}>
          {" "}
          <HomeIcon className="size-4" />
          <ChevronRightIcon className="size-4 " />
        </Link>
        <span >
        <h2>{title}</h2>
        </span>
     

       
      </div>
<h2 className="text-2xl mt-2 font-semibold">{title}</h2>
      <div>
        {children}
      </div>
    </main>
  );
};

export default Main;
