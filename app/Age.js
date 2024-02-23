"use client";

import { useState } from "react";
const Age = () => {
  const [agree, setAgree] = useState(false);
  return (
    <>
      {!agree && (
        <div className="z-30 h-screen absolute top-0 w-full bg-pink-500 flex justify-center items-center flex-col">
          <div className="flex items-center flex-col ">
            <h1 className="text-5xl text-white text-center">
              Before Accessing saintsmodels.com , you need to be 18+ years old.
            </h1>
            <button
              onClick={() => setAgree(!agree)}
              className="bg-white text-pink-500 text-lg font-bold mt-4 px-4 py-2 rounded-md"
            >
              I agree that I am 18+{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Age;
