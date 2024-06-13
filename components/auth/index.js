import { useState } from "react";
import Login from "./login/Login";
import Register from "./register/Register";

const Authentication = () => {
  const [currentPage, setCurrentPage] = useState("login");
  const currentViews = {
    login: <Login setCurrentPage={setCurrentPage} />,
    register: <Register setCurrentPage={setCurrentPage} />,
  };
  return (
    <div className="bg-gray-30 w-full h-screen flex justify-center items-center ">
      <div className="w-full mx-3 sm:mx-0 sm:w-[384px] bg-white rounded-normal shadow px-8 py-16">
        {currentViews[currentPage]}
      </div>
    </div>
  );
};

export default Authentication;
