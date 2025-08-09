import React from 'react';
import { PacmanLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
        <PacmanLoader color="#bfac9c" size={25} />
      </div>
    );
};

export default Loading;