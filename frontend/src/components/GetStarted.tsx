import React from "react";
import bgimage from "../assets/Manage money-amico.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {

  const navigate = useNavigate();

  return (
    <section
      id="getStarted"
      className="px-8 gap-4 grid grid-cols-2 items-center place-items-center "
    >
      <div className="logo font-semibold">
        <h6 className="text-gray-500">
          Managing your expenses has never been easier!
        </h6>
        <h2 className="pb-3 font-bold text-5xl inline-block text-transparent bg-clip-text  bg-gradient-to-r from-indigo-400 from-30% via-sky-500 via-60% to-indigo-400 to-90%">
          DailySpend
        </h2>
        <span className="text-3xl font-bold"> for</span>
        <h2 className="font-bold text-4xl">Daily Expenses Tracking</h2>
        <p className="mt-2 text-gray-500">
          Our app makes managing your daily expenses effortless, <br></br>{" "}
          helping you track every penny and stay within your budget.{" "}
        </p>
        <div className="mt-6">
          <Button onClick={() => navigate('/login')} >
            <div className="flex items-center gap-2 p-1">
              <span className="inline-block ">Get Started</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </Button>
        </div>
      </div>
      <div className="image ">
        <img className="w-[540px] animate-floating" src={bgimage} alt="" />
      </div>
    </section>
  );
};

export default GetStarted;
