import Link from "next/link";
import Image from "next/image";
function Footer() {
  return (
    <footer className="  bg-gray-200 px-8 pt-12 pb-4 md:px-12  lg:px-16 xl:px-24  2xl:px-28 ">
      <div className="grid grid-cols-1 md:grid-cols-4 md:items-start text-center items-center gap-12 md:gap-0">
        <div className="flex  items-center justify-between flex-col  ">
          <Link href="/">
            <Image
              src="/logo.svg"
              className="w-4/12 p-2 mx-auto bg-white rounded-md"
              width={0}
              height={0}
            />
          </Link>
          <h1 className="text-2xl font-semibold text-pink-500 mt-4">
            Saint's Models <br />
            <span className="text-sm text-pink-500/80">We Work. You Earn.</span>
          </h1>
        </div>
        <div className=" text-gray-950 ">
          <h3 className=" font-semibold text-lg text-center">Social Media</h3>
          <div className="flex flex-col text-sm gap-4 md:items-center ">
            <Link
              href=""
              className="mt-4 hover:text-pink-500 transition-all hover:underline hover:underline-offset-2"
            >
              Instagram
            </Link>
            <Link
              href=""
              className=" hover:text-pink-500 transition-all hover:underline hover:underline-offset-2"
            >
              LinkedIN
            </Link>
            <Link
              href=""
              className=" hover:text-pink-500 transition-all hover:underline hover:underline-offset-2"
            >
              Facebook
            </Link>
          </div>
        </div>
        <div className=" text-gray-950 ">
          <h3 className=" font-semibold text-lg text-center">Navigation</h3>
          <div className="flex flex-col text-sm gap-4 md:items-center ">
            <Link
              href=""
              className="mt-4 hover:text-pink-500 transition-all hover:underline hover:underline-offset-2"
            >
              Home
            </Link>
            <Link
              href=""
              className=" hover:text-pink-500 transition-all hover:underline hover:underline-offset-2"
            >
              About us
            </Link>
            <Link
              href=""
              className=" hover:text-pink-500 transition-all hover:underline hover:underline-offset-2"
            >
              Frequently Asked Questions
            </Link>
          </div>
        </div>
        <div className=" text-gray-950 ">
          <h3 className=" font-semibold text-lg text-center">Contact Us</h3>
          <div className="flex flex-col text-sm gap-4 md:items-center ">
            <Link
              href=""
              className="mt-4 hover:text-pink-500 transition-all hover:underline hover:underline-offset-2"
            >
              Email
            </Link>
            <Link
              href=""
              className=" hover:text-pink-500 transition-all hover:underline hover:underline-offset-2"
            >
              Phone Number
            </Link>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 md:w-4/12 rounded-md mx-auto hover:scale-105 cursor-pointer hover:text-purple-500 hover:font-semibold transition-all  mt-12">
        <Link
          href="https://codevs.ro"
          className="flex items-center  justify-center  text-gray-950"
        >
          Powered by{" "}
          <Image
            src="/codevs.png"
            width={40}
            height={40}
            className="ml-2 md:w-1/12"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
