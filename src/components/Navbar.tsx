import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { useState } from "react";

const raleway = Raleway({
  subsets: ["latin"],
});
const Navbar = () => {
  const [opened, setOpened] = useState(false);
  return (
    <nav className="w-full h-auto sticky top-0 pt-2 px-4 z-50">
      <div className="w-full max-w-5xl h-auto bg-yellow-400 text-white mx-auto flex items-center justify-between py-2 px-8 rounded-full">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 -mt-3 relative scale-125">
            <Image fill src={"/logo.png"} alt="Logo" className="object-cover" />
          </div>
          <div className={`${raleway.className} text-md gap-4 hidden md:flex `}>
            <Link
              className="hover:text-red-600 hover:-mt-1 duration-200 transition-all ease-in"
              href={"/"}
            >
              HOME
            </Link>
            <Link
              className="hover:text-red-600 hover:-mt-1 duration-200 transition-all ease-in"
              href={"/"}
            >
              ABOUT
            </Link>
            <Link
              className="hover:text-red-600  hover:-mt-1 duration-200 transition-all ease-in"
              href={"/"}
            >
              WORKS
            </Link>
            <Link
              className="hover:text-red-600 hover:-mt-1 duration-200 transition-all ease-in"
              href={"/"}
            >
              SOCIAL MEDIA
            </Link>
          </div>
        </div>
        <div className="hidden md:flex">
          <Button className="bg-red-600 hover:bg-red-400 hover:text-gray-100">
            GET FREE CONSULATION
          </Button>
        </div>
        {/* MOBILE NAV */}
        <Button className="flex md:hidden" onClick={() => setOpened(!opened)}>
          MENU
        </Button>
        <div
          className={
            opened
              ? "w-[100vw] backdrop-blur-none h-full fixed md:hidden top-0 left-0 bg-white text-black overflow-hidden flex flex-col px-4 duration-300 transition-all ease-out  justify-end gap-4 z-50"
              : "w-[100vw] backdrop-blur-none h-full md:hidden bg-white text-black overflow-hidden flex flex-col -top-[100%] left-0 fixed px-4 duration-700 transition-all ease-out justify-end gap-4 z-50"
          }
        >
          <div className={`${raleway.className} flex flex-col gap-4`}>
            <Link
              href={"/"}
              className={`${raleway.className} text-5xl sm:text-7xl mb-2`}
            >
              home
            </Link>
            <Link
              href={"/"}
              className={`${raleway.className} text-5xl sm:text-7xl mb-2`}
            >
              about
            </Link>
            <Link
              href={"/"}
              className={`${raleway.className} text-5xl sm:text-7xl mb-2`}
            >
              works
            </Link>
            <Link
              href={"/"}
              className={`${raleway.className} text-5xl sm:text-7xl mb-2`}
            >
              social media
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <Button className="bg-red-600">GET IN TOUCH</Button>
            <Button
              className="text-black"
              onClick={() => setOpened(!opened)}
              variant={"secondary"}
            >
              CLOSE
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
