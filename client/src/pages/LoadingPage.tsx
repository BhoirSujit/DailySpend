import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

const LoadingPage = () => {
  return (
    <div className="h-[100vh] grid place-items-center relative">
      <div className="text-8xl text-indigo-600 animate-spin absulute">
        <AiOutlineLoading />
      </div>
    </div>
  );
};

export default LoadingPage;
