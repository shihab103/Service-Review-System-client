import React from "react";
import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <div className="mt-5 h-[500px]">
        <div className="mx-auto max-w-[300px]">
          <img className="shadow-md" src="/error.jpg" alt="" />
        </div>
        <div className="text-center mt-5">
          <h1 className="text-4xl font-bold text-red-400">
            404-Page Not Found
          </h1>
          <p className="my-2">Opps! The Page You're looking for doesn't exist</p>
          <NavLink to='/'><p className="btn btn-outline text-red-500 rounded-full hover:bg-red-500 hover:text-white">Back to Home</p></NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
