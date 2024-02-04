"use client";
import { useState } from "react";
import Join from "../Join";
function FAQ() {
  return (
    <>
      <div className="bg-neutral-50  py-36 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 ">
        <h1 className="text-4xl  font-bold w-full text-center text-pink-500">
          Saint's Models Agency FAQ
        </h1>
        <div className="mt-8 flex slide-in flex-col items-center justify-between  gap-4">
          <Question
            qes="How do I get started as a model with SaintsModels?"
            res="To begin your journey, simply visit our website and follow the easy sign-up process. Once registered, our team will guide you through the onboarding steps."
          />
          <Question
            qes="What sets SaintsModels apart from other agencies on OnlyFans?"
            res="SaintsModels offers personalized support, strategic promotion, and a supportive community. We prioritize the success of our models, providing a unique and enriching experience beyond a traditional modeling platform."
          />
          <Question
            qes="Is there flexibility in customizing my OnlyFans profile, and are there specific content guidelines to be aware of?"
            res="Absolutely! You have the flexibility to customize your profile according to your preferences. While there are no strict content guidelines, we recommend aligning with OnlyFans' policies to ensure a seamless experience for both models and subscribers."
          />
          <Question
            qes="How can I seek support or assistance if I encounter issues or have questions?"
            res="Assistance is just a message away. Reach out to our dedicated support channel for quick and helpful responses. Our community forum is also a great space to connect with fellow models and share experiences. We aim to address inquiries within 24 hours."
          />
        </div>
      </div>
      <div id="join">
        <Join />
      </div>
    </>
  );
}

const Question = (props) => {
  const [shown, setShown] = useState(false);
  return (
    <div className="md:w-5/12 w-full mx-auto">
      <div
        className={
          shown
            ? "bg-pink-500  cursor-pointer px-4 py-3 rounded-md flex items-center justify-center"
            : "bg-pink-500/20 hover:scale-105 transition-all cursor-pointer  px-4 py-3 rounded-md flex items-center justify-center"
        }
        onClick={() => {
          setShown(!shown);
        }}
      >
        <p
          className={
            shown
              ? "text-white  font-bold text-md underline underline-offset-2 flex items-center justify-center"
              : "text-gray-950/90 text-md  font-bold flex items-center justify-between gap-0 "
          }
        >
          <svg
            className="w-1/12  text-gray-800 inline-block dark:text-gray-950 mr-2 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9-3a1.5 1.5 0 0 1 2.5 1.1 1.4 1.4 0 0 1-1.5 1.5 1 1 0 0 0-1 1V14a1 1 0 1 0 2 0v-.5a3.4 3.4 0 0 0 2.5-3.3 3.5 3.5 0 0 0-7-.3 1 1 0 0 0 2 .1c0-.4.2-.7.5-1Zm1 7a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
              clipRule="evenodd"
            />
          </svg>

          <span className="w-full">{props.qes}</span>
        </p>
      </div>
      {shown && (
        <div className="w-full slide-in transition-all mt-2 mx-auto bg-gray-300/20 p-4 text-gray-950">
          {props.res}
        </div>
      )}
    </div>
  );
};

export default FAQ;
