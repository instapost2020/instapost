import React from "react";
import { Button } from "./ui/button";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import Image from "next/image";
import SecondPage from "./SecondPage";

const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const raleway = Raleway({
  subsets: ["latin"],
});
const Hero = () => {
  return (
    <main className="w-full h-auto max-w-5xl mx-auto flex flex-col justify-center gap-4  relative">
      <div
        className={`${raleway.className}  py-3 flex flex-col items-center mt-8 z-10`}
      >
        <span className="text-4xl md:text-5xl font-bold">We Are</span>
        <h1
          className={`${bhineka.className} text-6xl md:text-8xl lg:text-9xl tracking-wider pb-12 text-red-600 relative`}
        >
          Insta Post PH
          <Image
            src={"/blueline.png"}
            alt="Blue"
            fill
            className="object-contain mt-4 md:mt-8 lg:mt-12 rotate-3 "
          />
        </h1>
        <p
          className={`${raleway.className} text-sm md:text-lg flex items-center w-full max-w-sm sm:max-w-2xl px-2 text-gray-500  mb-3`}
        >
          Content marketing and social media marketing agency, helping
          businesses thrive in the digital space, by delivering instant,
          high-end quality content that sells.
        </p>
        <div className="flex gap-2 mt-2 z-10">
          <Button className="bg-yellow-400 hover:bg-red-600">
            Get Started
          </Button>
          <Button className="bg-yellow-400 hover:bg-red-600">Why Us?</Button>
        </div>
      </div>
      <div
        className={`${raleway.className} px-2 py-2 flex flex-col lg:mb-12 md:flex-row gap-3 md:gap-6`}
      >
        <div
          //   initial={{
          //     clipPath: "inset(0 100% 0 0)",
          //   }}
          //   whileInView={{
          //     clipPath: "inset(0 0 0 0)",
          //   }}
          //   viewport={{
          //     margin: "50px",
          //   }}
          className="p-6 bg-white shadow-md  rounded-xl gap-2 flex flex-col z-10"
        >
          <h1 className="font-semibold text-xl">About Insta Post Ph</h1>
          <p className="text-gray-500 text-sm">
            We are an All-In-One Creative Team and Content Marketing & Social
            Media Marketing Agency, helping businesses thrive in the digital
            space, by delivering instant, high-end quality content that sells.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md  rounded-xl gap-2 flex flex-col">
          <h1 className="font-semibold text-xl">Affordable Courses</h1>
          <p className="text-gray-500 text-sm">
            We are an All-In-One Creative Team and Content Marketing & Social
            Media Marketing Agency, helping businesses thrive in the digital
            space, by delivering instant, high-end quality content that sells.
          </p>
        </div>
      </div>
      <div className="w-full h-[100%] flex flex-col justify-between mb-12">
        <SecondPage />
      </div>
    </main>
  );
};

export default Hero;
