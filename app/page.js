"use client";
import Image from "next/image";
import Join from "./Join";
import Link from "next/link";
import Age from "./Age";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Age />

      <Testimonials />
      <Serviciu />
      <div id="join">
        <Join />
      </div>
    </>
  );
}

const Hero = () => {
  const [hero, setHero] = useState(1);
  const [finished, setFinished] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (hero < 3) setHero(hero + 1);
      if (hero === 3) setFinished(true);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [hero]);

  return (
    <div className="bg-white min-h-screen gap-8 md:flex-row flex-col text-gray-950 py-36 flex items-center justify-between px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72">
      <div className="md:w-5/12 md:block flex flex-col items-center ">
        <h1 className="text-4xl font-semibold capitalize">
          {" "}
          Let Us Guide You in Your journey
        </h1>
        <p className="mt-4 md:my-6 hidden md:block ">
          Our supportive community and tailored strategies will empower your
          journey, ensuring success in every step. Take the leap and thrive in
          the realm of SaintsModels—where your potential meets unparalleled
          support.
        </p>
        <Link
          href="/about"
          className="bg-pink-500 hover:scale-105 shadow-md hover:shadow-pink-500/50 transition-all  rounded-md px-4 py-2 font-semibold  items-center justify-center gap-2 hidden md:inline-flex text-gray-50"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 14h-2.7L11 20.3l-.9.7H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM9 3H4a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V4a1 1 0 0 0-1-1ZM6.5 18.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.1 7.9l-3.5-3.5a1 1 0 0 0-1.4 0L12 6.5v10l7.1-7.2a1 1 0 0 0 0-1.4Z" />
          </svg>
          Learn More
        </Link>
      </div>
      <div
        className={
          finished
            ? "md:w-5/12 w-full relative p-2  rounded-sm "
            : "md:w-5/12 w-full relative md:h-64 h-96  p-2  rounded-sm "
        }
      >
        {!finished && (
          <>
            {hero >= 1 && (
              <div className="md:w-8/12 w-9/12 slide-in  absolute  md:top-12 top-0">
                <Image
                  priority
                  alt="Pie Chart"
                  src="/heroFirst.png"
                  className="object-cover rounded-md"
                  width={1920}
                  height={1920}
                />
              </div>
            )}
            {hero >= 2 && (
              <div className="md:w-8/12 w-9/12 slide-in  absolute right-0 md:top-12 top-24">
                <Image
                  priority
                  alt="Chart"
                  src="/heroSecond.svg"
                  className="object-cover"
                  width={1920}
                  height={1920}
                />
              </div>
            )}
          </>
        )}
        {finished && (
          <Image
            priority
            width={1920}
            height={1920}
            src="/heroThird.png"
            className="rounded-md slide-right shadow-md shadow-pink-500/20"
            alt="Logos"
          />
        )}
      </div>
      <p className="mt-12 md:my-6 md:hidden block ">
        {" "}
        Our supportive community and tailored strategies will empower your
        journey, ensuring success in every step. Take the leap and thrive in the
        realm of SaintsModels—where your potential meets unparalleled support.
      </p>

      <Link
        href="/about"
        className="bg-pink-500 hover:scale-105 shadow-md hover:shadow-pink-500/50 transition-all   rounded-md px-4 py-3 w-full font-semibold  items-center justify-center gap-2 md:hidden inline-flex text-gray-50"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 14h-2.7L11 20.3l-.9.7H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM9 3H4a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V4a1 1 0 0 0-1-1ZM6.5 18.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.1 7.9l-3.5-3.5a1 1 0 0 0-1.4 0L12 6.5v10l7.1-7.2a1 1 0 0 0 0-1.4Z" />
        </svg>
        Learn More
      </Link>
    </div>
  );
};

const Testimonials = () => {
  const arr = [
    {
      name: "Madison Evans",
      review:
        "Choosing saintsmodels.com for OnlyFans was a brilliant move. Their professionalism, approachability, and support have boosted my profile engagement, and I feel more confident in my content. Thank you for being an integral part of my journey!",
      img: "/review1.svg",
    },
    {
      name: "Sophia Rose",
      review:
        "Saintsmodels.com is a game-changer for my OnlyFans career. The personalized assistance, strategic planning, and genuine care for my success have resulted in significant growth. My earnings have soared, thanks to their continuous support and expertise!",
      img: "/review2.svg",
    },
    {
      name: "Isabella Taylor",
      review:
        "Grateful for the incredible support from saintsmodels.com on OnlyFans. Their expertise and dedication have skyrocketed my profile, and I've seen a substantial increase in subscribers. Professionalism at its best!",
      img: "/review3.svg",
    },
  ];
  const [testimonial, setTestimonial] = useState(arr[0]);
  let i = 0;
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (i < 3) {
        setTestimonial(arr[i]);
        i++;
      } else {
        i = 0;
        setTestimonial(arr[i]);
        i++;
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-pink-500 py-36 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 ">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-4xl md:inline-block font-semibold md:w-8/12">
          Discover what our talented models have to say about their
          transformative experiences with SaintsModels.
        </h1>
        <p className="hidden md:inline-block mt-4 md:mt-0 md:w-4/12">
          From elevated earnings to unparalleled support, read the testimonials
          that showcase the real impact of joining our community.
        </p>
      </div>
      <div className="mt-12 slide-in md:mt-16 w-full gap-8 items-center justify-center text-center grid md:grid-cols-2 grid-cols-1">
        <div className="w-full p-4 bg-white/20 rounded-md">
          <div className="flex items-center justify-center ">
            <div className="w-2/12">
              <Image
                priority
                alt="Testimonial Photo"
                src={testimonial.img}
                width={1920}
                height={1920}
                className=" mr-4 mb-2 rounded-full"
              />
            </div>

            <h4 className="text-lg font-semibold text-white ml-4">
              {testimonial.name}
            </h4>
          </div>

          <p className="mt-4 text-xs text-white">{testimonial.review}</p>
        </div>
        <div className="w-full ">
          <Image
            priority
            alt="Results"
            src="/testimonialsIllustration.png"
            width={1920}
            height={1920}
            className="object-cover rounded-md"
          />
        </div>
      </div>
      <p className="md:hidden mt-12 ">
        {" "}
        From elevated earnings to unparalleled support, read the testimonials
        that showcase the real impact of joining our community.
      </p>
    </div>
  );
};

const Serviciu = () => {
  return (
    <div className="bg-white  gap-8 md:flex-row flex-col text-white-50 py-36 flex items-center justify-center px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 ">
      <div className="w-7/12">
        <div className="md:w-5/12 w-full md:block hidden p-2  rounded-sm ">
          <Image
            priority
            alt="Service Presentation"
            src="/illustration.png"
            width={1920}
            height={1920}
            className="object-cover"
          />
        </div>
      </div>
      <div className="md:w-5/12 md:block flex flex-col items-center">
        <h1 className="text-4xl font-semibold md:text-left text-center text-gray-950">
          Elite Modeling Partnership
        </h1>
        <div className="md:w-5/12 w-full md:hidden mt-6 p-2 rounded-sm ">
          <div className="w-full">
            <Image
              priority
              alt="Phone Mockup"
              src="/illustration.png"
              width={1920}
              height={1920}
              className="object-cover"
            />
          </div>
        </div>

        <p className="mt-6 md:my-6 text-gray-950">
          "Experience the SaintsModels Advantage: Our agency is more than a
          platform; it's a partnership designed to propel your OnlyFans journey
          to new heights. Benefit from personalized support, strategic
          promotion, and a collaborative community that empowers your success.
          Join us and discover the helpful side of modeling—an enriching
          experience tailored for your growth and prosperity.
        </p>
        <Link
          href="#join"
          className="bg-pink-500 hover:scale-105 shadow-md hover:shadow-pink-500/50 transition-all   rounded-md px-4 py-2 font-semibold  items-center justify-center gap-2 hidden md:inline-flex text-gray-50"
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
        className="bg-pink-500 hover:scale-105 shadow-md hover:shadow-pink-500/50 transition-all  rounded-md px-4 py-3 w-full font-semibold  items-center justify-center gap-2 md:hidden flex text-gray-50"
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
