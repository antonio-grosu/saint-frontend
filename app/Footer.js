import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gray-200 px-8 pt-12 pb-4 md:px-12 lg:px-16 xl:px-24 2xl:px-28">
      <div className="grid grid-cols-1 md:grid-cols-4 md:items-start text-center items-center gap-12 md:gap-0">
        <div className="flex items-center justify-between flex-col text-pink-500 font-bold text-left">
          <Link href="/" className="w-1/2 md:w-full">
            <Image
              src="/logo.png"
              alt="Logo"
              className="object-cover"
              width={1920}
              height={1920}
            />
          </Link>
        </div>
        <div className="text-gray-950">
          <h3 className="font-semibold text-lg text-center">Social Media</h3>
          <div className="flex flex-col text-sm gap-4 md:items-center">
            <Link
              href="https://instagram.com/saints_models"
              className="mt-4 hover:text-pink-500 transition-all hover:underline hover:underline-offset-2"
            >
              Instagram
            </Link>
            {/* <Link
              href=""
              className="hover:text-pink-500 transition-all hover:underline hover:underline-offset-2"
            >
              Tiktok
            </Link> */}
          </div>
        </div>
        <div className="text-gray-950">
          <h3 className="font-semibold text-lg text-center">Navigation</h3>
          <div className="flex flex-col text-sm gap-4 md:items-center">
            <Link
              href="/"
              className="mt-4 hover:text-pink-500 transition-all hover:underline hover:underline-offset-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-pink-500 transition-all hover:underline hover:underline-offset-2"
            >
              About us
            </Link>
            <Link
              href="/faq"
              className="hover:text-pink-500 transition-all hover:underline hover:underline-offset-2"
            >
              Frequently Asked Questions
            </Link>
          </div>
        </div>
        <div className="text-gray-950">
          <h3 className="font-semibold text-lg text-center">Contact Us 18+</h3>
          <div className="flex flex-col text-sm gap-4 md:items-center">
            <Link
              href="mailto:saintsmodels1@gmail.com"
              className="mt-4 hover:text-pink-500 transition-all hover:underline hover:underline-offset-2"
            >
              Email
            </Link>
            <Link
              href="https://wa.me/400766851285?text=Hi,I%20would%20like%20to%20speak%20to%20an%20agent%F0%9F%92%96"
              className="hover:text-pink-500 transition-all hover:underline hover:underline-offset-2"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 md:w-4/12 rounded-md mx-auto hover:scale-105 cursor-pointer hover:text-purple-500 hover:font-semibold transition-all mt-12">
        <p className="text-center mb-2 poppins font font-bold text-pink-500">
          Copyright © Saint's Models Agency 2024
        </p>
        <Link
          href="https://codevs.ro"
          className="flex items-center justify-center text-gray-950"
        >
          Powered by{" "}
          <Image
            src="/codevs.png"
            alt="CodeVS Logo"
            width={40}
            height={40}
            className="ml-2 text-sm md:w-1/12"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
