"use client";
import Link from "next/link";
import Join from "../Join";
import Image from "next/image";
import { useEffect, useState } from "react";
function About() {
  return (
    <>
      <MainSection />
      <Serviciu />
      <div id="join">
        <Join />
      </div>
    </>
  );
}

const Serviciu = () => {
  return (
    <div className="bg-white  gap-8 md:flex-row flex-col text-white-50 py-36 flex items-center justify-center px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 ">
      <div className="md:w-5/12 w-full md:block hidden p-2  rounded-sm ">
        <Image
          alt="Illustration"
          src="/illustration.png"
          width={1920}
          height={1920}
          className="w-7/12"
        />
      </div>
      <div className="md:w-5/12 md:block flex flex-col items-center">
        <h1 className="text-4xl font-semibold md:text-left text-center text-gray-950">
          Tailored Triumphs with SaintsModels
        </h1>
        <div className="md:w-5/12 w-full md:hidden mt-6 p-2   rounded-sm ">
          <Image
            alt="Illustration"
            src="/illustration.png"
            width={1920}
            height={1920}
            className="object-cover"
          />
        </div>

        <p className="mt-6 md:my-6 text-gray-950">
          Embrace a modeling experience like no other with SaintsModels. Our
          services are meticulously crafted to be your compass to success on
          OnlyFans. Enjoy personalized guidance, strategic promotion, and a
          supportive community that fosters growth. Being a model with us means
          unlocking a pathway to triumph, where every step is shaped by your
          unique journey and aspirations.
        </p>
        <Link
          href="#join"
          className="bg-pink-500  hover:scale-105 shadow-md hover:shadow-pink-500/50 transition-all rounded-md px-4 py-2 font-semibold  items-center justify-center gap-2 hidden md:inline-flex text-gray-50"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-gray-50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.4l1.4.7a7.7 7.7 0 0 0 .7.3 21 21 0 0 0 16.4-.3l1.5-.7V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.4 7.9.6-.3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.4l.6.3a10 10 0 0 0 .7.3 23 23 0 0 0 18-.3h.1L21 13l.4.9ZM12 10a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
              clipRule="evenodd"
            />
          </svg>
          Let's Talk
        </Link>
      </div>
      <Link
        href="#join"
        className="bg-pink-500 hover:scale-105 shadow-md hover:shadow-pink-500/50 transition-all  rounded-md px-4 py-3 font-semibold w-full  items-center justify-center gap-2 md:hidden flex text-gray-50"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-gray-50"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.4l1.4.7a7.7 7.7 0 0 0 .7.3 21 21 0 0 0 16.4-.3l1.5-.7V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.4 7.9.6-.3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.4l.6.3a10 10 0 0 0 .7.3 23 23 0 0 0 18-.3h.1L21 13l.4.9ZM12 10a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
            clipRule="evenodd"
          />
        </svg>
        Let's Talk
      </Link>
    </div>
  );
};
const MainSection = () => {
  const [number, setNumber] = useState(0);
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    if (!isDone) {
      setNumber(number + 1);
    }
    if (number == 8000) {
      setIsDone(true);
    }
  }, [number]);
  return (
    <div className="bg-pink-500 min-h-screen gap-12 md:flex-row flex-col text-white-50 py-40 flex items-center justify-between  px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 ">
      <div className="md:w-5/12 font w-full text-center hidden p-8 text-white   bg-pink-900/30 slide-in rounded-md md:flex items-center justify-center gap-4 flex-col">
        <h3 className="text-4xl text-center font-semibold">
          Increase Your Reach{" "}
          <Image
            alt="Onlyfans Logo"
            src="/only.png"
            className="w-7/12 mx-auto mt-4"
            width={1920}
            height={1920}
          />
        </h3>
        <h3 className="text-xl font-semibold">
          {!isDone && number} {isDone && "∞"} Followers
        </h3>
      </div>
      <div className="md:w-5/12 md:block flex flex-col items-center">
        <h1 className="text-4xl font-semibold md:text-left text-center text-white">
          Expand Your Reach, Amplify Your Impact
        </h1>
        <div className="md:w-5/12 font w-full  md:hidden p-8 text-white   bg-pink-900/20 rounded-md  my-12 items-center justify-center gap-4 flex-col">
          <h3 className="text-4xl text-center font-semibold">
            Increase Your Reach{" "}
            <Image
              alt="Onlyfans Logo"
              src="/only.png"
              className="w-1/2  mx-auto mt-4"
              width={1920}
              height={1920}
            />
          </h3>
          <h3 className="text-xl  font-semibold text-center">
            {!isDone && number} {isDone && "∞"} Followers
          </h3>
        </div>

        <p className="mt-6 md:my-6 text-white">
          {" "}
          With SaintsModels, reaching new heights is more than a goal—it's a
          reality. We empower our models to expand their reach and amplify their
          impact on OnlyFans. Benefit from strategic promotion, engagement tips,
          and a community that rallies behind your success. Join us in the
          pursuit of a broader audience and heightened influence, where every
          post has the potential to resonate with a larger and more captivated
          audience.
        </p>
        <Link
          href="#join"
          className="bg-white hover:scale-105 shadow-md hover:shadow-pink-500/50 transition-all  rounded-md px-4 py-2 font-semibold  items-center justify-center gap-2 hidden md:inline-flex text-pink-500"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-pink-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.4l1.4.7a7.7 7.7 0 0 0 .7.3 21 21 0 0 0 16.4-.3l1.5-.7V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.4 7.9.6-.3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.4l.6.3a10 10 0 0 0 .7.3 23 23 0 0 0 18-.3h.1L21 13l.4.9ZM12 10a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
              clipRule="evenodd"
            />
          </svg>
          Let's Talk
        </Link>
      </div>
      <Link
        href="#join"
        className="bg-white hover:scale-105 shadow-md hover:shadow-md transition-all  rounded-md px-4 py-3 font-semibold  items-center justify-center gap-2 md:hidden flex text-pink-500 w-full"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-pink-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.4l1.4.7a7.7 7.7 0 0 0 .7.3 21 21 0 0 0 16.4-.3l1.5-.7V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.4 7.9.6-.3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.4l.6.3a10 10 0 0 0 .7.3 23 23 0 0 0 18-.3h.1L21 13l.4.9ZM12 10a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
            clipRule="evenodd"
          />
        </svg>
        Let's Talk
      </Link>
    </div>
  );
};

export default About;
