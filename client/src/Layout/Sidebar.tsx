import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  AdjustmentsVerticalIcon,
  ArrowRightStartOnRectangleIcon,
  BanknotesIcon,
  ChartPieIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Sidebar = ({activeNav}) => {
  const expenseExpand = useRef();
  const reportExpand = useRef();

  const handleExpenseExpand = (e) => {
    expenseExpand.current?.classList.toggle("hidden");
  };

  const handleReportExpand = (e) => {
    reportExpand.current?.classList.toggle("hidden");
  };

  return (
    <nav className="border-r h-[100vh] p-4 ">
      <ul className="flex flex-col  gap-2">
        <li>
          <Link
            className="flex gap-2 hover:bg-slate-100 p-2 rounded-md"
            to={"/dashbord"}
          >
            <ChartPieIcon  className=" size-6" />
            <span className="flex-grow">Dashbord</span>
          </Link>
        </li>
        <li>
          <button
            onClick={handleExpenseExpand}
            className="flex gap-2 hover:bg-slate-100 p-2 rounded-md"
    
          >
            <BanknotesIcon className="size-6" />
            <div className="flex-grow"> Expenses</div>
            <ChevronDownIcon className="size-6" />
          </button>
          <ul ref={expenseExpand} className="flex flex-col w-full hidden">
            <li>
              <Link
                className="pl-10  block  hover:bg-slate-100 p-2 rounded-md"
                to={"/add-expenses"}
              >
                <span>Add</span>
              </Link>
            </li>
            <li>
              <Link
                className="pl-10  block hover:bg-slate-100 p-2 rounded-md"
                to={"/manage-expenses"}
              >
                Manage
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <button
            onClick={handleReportExpand}
            className="flex  gap-2 hover:bg-slate-100 p-2 rounded-md"
          >
            <ClipboardDocumentListIcon className="size-6" />
            <div className="flex-grow">Reports</div>

            <ChevronDownIcon className="size-6" />
          </button>
          <ul ref={reportExpand} className="flex flex-col w-full hidden">
            <li>
              <Link
                className="pl-10  block  hover:bg-slate-100 p-2 rounded-md"
                to={"/add-expenses"}
              >
                <span>Date wise</span>
              </Link>
            </li>
            <li>
              <Link
                className="pl-10  block hover:bg-slate-100 p-2 rounded-md"
                to={"/manage-expenses"}
              >
                Months wise
              </Link>
            </li>
            <li>
              <Link
                className="pl-10  block hover:bg-slate-100 p-2 rounded-md"
                to={"/manage-expenses"}
              >
                Year wise
              </Link>
            </li>
            <li>
              <Link
                className="pl-10  block hover:bg-slate-100 p-2 rounded-md"
                to={"/manage-expenses"}
              >
                Category wise
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <hr className="my-3" />
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            className="flex gap-2 hover:bg-slate-100 p-2 rounded-md"
            to={"/profile"}
          >
            <AdjustmentsVerticalIcon className=" size-6" />
            <span className="flex-grow">Profile</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex gap-2 hover:bg-slate-100 p-2 rounded-md"
            to={""}
          >
            <ArrowRightStartOnRectangleIcon className="size-6" />
            <span className="flex-grow"> Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
