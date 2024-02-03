"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [socials, setSocials] = useState(false);
  return (
    <div className="relative">
      <nav className="z-10 flex fixed w-full  top-0 items-center justify-between flex-wrap bg-gray-200 px-8  py-2 md:py-4 md:px-12  lg:px-16 xl:px-24  2xl:px-28 ">
        <Link href="/" className="md:w-2/12 w-8/12">
          <Image
            src="/logo.svg"
            className=" object-cover"
            width={1920}
            height={1920}
          />
        </Link>
        <div className=" hidden md:flex items center justify-between gap-4 text-gray-950">
          <Link
            href="/about"
            className="hover:text-pink-500 hover:underline hover:underline-offset-2 transition-all"
          >
            About us
          </Link>
          <Link
            href="/faq"
            className="hover:text-pink-500 hover:underline hover:underline-offset-2 transition-all"
          >
            Questions
          </Link>
        </div>
        <Link
          href="#join"
          className=" hover:scale-105 shadow-md hover:shadow-pink-500/50 transition-all   hidden px-4 md:flex items-center justify-center gap-2 text-gray-50 rounded-md py-2 font-semibold bg-pink-500"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M7 6c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M2 11c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
              clip-rule="evenodd"
            />
            <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
          </svg>
          Join us
        </Link>
        <svg
          className="w-8 h-8 md:hidden text-gray-800 dark:text-pink-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          onClick={() => setMobile(!mobile)}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </nav>
      {mobile && (
        <div className="relative   flex ">
          <div
            className="fixed z-20 top-0 h-screen w-full bg-gray-950/40"
            onClick={() => {
              setMobile(false);
            }}
          ></div>
          <div className="fixed slide-right top-0 right-0 z-20 h-screen w-7/12 flex flex-col justify-between gap-4 items-start bg-pink-500 p-8">
            <div className="w-full">
              <h3 className="text-white font-semibold text-xl underline underline-offset-4">
                Navigation
              </h3>
              <Link
                href="/"
                className="py-4 slide-in flex items-center justify-start gap-2"
                onClick={() => setMobile(!mobile)}
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m4 12 8-8 8 8M6 10.5V19c0 .6.4 1 1 1h3v-3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3h3c.6 0 1-.4 1-1v-8.5"
                  />
                </svg>
                Home
              </Link>
              <Link
                href="/about"
                className="py-4 slide-in flex items-center justify-start gap-2"
                onClick={() => setMobile(!mobile)}
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.8-3.1a5.5 5.5 0 0 0-2.8-6.3c.6-.4 1.3-.6 2-.6a3.5 3.5 0 0 1 .8 6.9Zm2.2 7.1h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1l-.5.8c1.9 1 3.1 3 3.1 5.2ZM4 7.5a3.5 3.5 0 0 1 5.5-2.9A5.5 5.5 0 0 0 6.7 11 3.5 3.5 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4c0 1.1.9 2 2 2h.5a6 6 0 0 1 3-5.2l-.4-.8Z"
                    clip-rule="evenodd"
                  />
                </svg>
                About us
              </Link>
              <Link
                href="/faq"
                className="py-4 slide-in flex items-center justify-start gap-2"
                onClick={() => setMobile(!mobile)}
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9-3a1.5 1.5 0 0 1 2.5 1.1 1.4 1.4 0 0 1-1.5 1.5 1 1 0 0 0-1 1V14a1 1 0 1 0 2 0v-.5a3.4 3.4 0 0 0 2.5-3.3 3.5 3.5 0 0 0-7-.3 1 1 0 0 0 2 .1c0-.4.2-.7.5-1Zm1 7a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Questions
              </Link>
              <Link
                href="#join"
                onClick={() => setMobile(!mobile)}
                className="py-2 slide-in rounded-md flex items-center justify-center w-full bg-white text-pink-500 font-semibold gap-2"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-pink-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 6c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M2 11c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
                    clip-rule="evenodd"
                  />
                  <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                </svg>
                Join us
              </Link>
            </div>
            <div className="w-full">
              {" "}
              <h3 className="text-white font-semibold mt-4 text-xl underline underline-offset-4">
                Contact us
              </h3>
              <Link
                href={"/"}
                onClick={() => setMobile(!mobile)}
                // href="/email"
                className="py-4 slide-in flex items-center justify-start gap-2"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.5a6 6 0 0 1 1.5 4v4a1 1 0 1 1-2 0v-4a4 4 0 0 0-4-4h-.5C5 6 3 8 3 10.5V16c0 .6.4 1 1 1h7v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h5c.6 0 1-.4 1-1v-6a4 4 0 0 0-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z" />
                </svg>
                Email
              </Link>
              <Link
                href={"/"}
                onClick={() => setMobile(!mobile)}
                // href="/about"
                className="py-4 slide-in flex items-center justify-start gap-2"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z" />
                </svg>
                Phone Number
              </Link>
            </div>
            <h3 className="text-xl font-semibold">saintsmodels.com</h3>
          </div>
        </div>
      )}
      <div className="fixed w-1/12 right-8 md:right-0 h-screen p-8 flex items-end md:bottom-0x bottom-8 ">
        <div className="grid grid-cols-1 gap-2">
          {!socials && (
            <div
              onClick={() => {
                setSocials(!socials);
              }}
              className="w-12 h-12 bg-pink-500 shadow-md border-2 border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-100 transition-all"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 3a1 1 0 0 0-1 1v8c0 .6.4 1 1 1h1v2a1 1 0 0 0 1.7.7L9.4 13H15c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1H4Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M8 17.2h.1l2.1-2.2H15a3 3 0 0 0 3-3V8h2c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1h-1v2a1 1 0 0 1-1.7.7L14.6 18H9a1 1 0 0 1-1-.8Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          )}
          {socials && (
            <>
              <Link
                href="https://www.instagram.com/saint_models"
                onClick={() => {
                  setSocials(!socials);
                }}
                className="w-12 h-12  slide-in flex items-center justify-center cursor-pointer  transition-all"
              >
                <Image
                  src="/insta.svg"
                  width={500}
                  height={500}
                  className="w-full  bg-white rounded-md p-1"
                />
              </Link>
              <Link
                href="https://wa.me/0766851285"
                onClick={() => {
                  setSocials(!socials);
                }}
                className="w-12 h-12 slide-in  rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-100 transition-all"
              >
                <Image
                  src="/whatsapp.svg"
                  width={0}
                  height={0}
                  className="w-full bg-white rounded-md p-1"
                />
              </Link>
              <div
                onClick={() => {
                  setSocials(!socials);
                }}
                className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-100 transition-all"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3a1 1 0 0 0-1 1v8c0 .6.4 1 1 1h1v2a1 1 0 0 0 1.7.7L9.4 13H15c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1H4Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 17.2h.1l2.1-2.2H15a3 3 0 0 0 3-3V8h2c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1h-1v2a1 1 0 0 1-1.7.7L14.6 18H9a1 1 0 0 1-1-.8Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
