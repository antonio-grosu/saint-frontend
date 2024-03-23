"use client";

import { useEffect, useState } from "react";
const Age = () => {
  const [loading, setLoading] = useState(true);
  const [agree, setAgree] = useState(false);
  useEffect(() => {
    localStorage.getItem("agreement");
    if (localStorage.getItem("agreement") === "true") {
      setAgree(true);
    }
    setLoading(false);
  }, []);
  return (
    <>
      {!agree && !loading && (
        <div className="z-30  fixed bottom-0 p-6  rounded-t-md w-full bg-blue-100 flex justify-center items-center flex-col">
          <div className="flex items-center flex-col ">
            <h1 className="text-lg text-pink-500 font-bold text-center">
              <svg
                className="w-8 h-8 text-white p-1 bg-pink-500  rounded-md  inline-block mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.09 3.294c1.924.95 3.422 1.69 5.472.692a1 1 0 0 1 1.438.9v9.54a1 1 0 0 1-.562.9c-2.981 1.45-5.382.24-7.25-.701a38.739 38.739 0 0 0-.622-.31c-1.033-.497-1.887-.812-2.756-.77-.76.036-1.672.357-2.81 1.396V21a1 1 0 1 1-2 0V4.971a1 1 0 0 1 .297-.71c1.522-1.506 2.967-2.185 4.417-2.255 1.407-.068 2.653.453 3.72.967.225.108.443.216.655.32Z" />
              </svg>
              Before Accessing saintsmodels.com , you need to be 18+ years old.
            </h1>
            <button
              onClick={() => {
                setAgree(!agree);
                localStorage.setItem("agreement", true);
              }}
              className="bg-white hover:shadow-md hover:shadow-pink-500/10 transition-all hover:scale-105 flex items-center justify-center gap-2 text-pink-500 text-sm font-bold mt-4 px-4 py-2 rounded-md"
            >
              I agree that I am 18+{" "}
              <svg
                className="w-6 h-6 text-pink-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Age;
