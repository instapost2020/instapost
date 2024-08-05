import Image from "next/image";
import React from "react";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";

const raleway = Raleway({
  subsets: ["latin"],
});
const Flexbox = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen ">
      <motion.div
        initial={{
          clipPath: "inset(0 100% 0 0)",
        }}
        whileInView={{
          clipPath: "inset(0 0 0 0)",
          transition: {
            duration: 0.5,
            type: "spring",
          },
        }}
        className="w-full h-full relative hidden md:flex "
      >
        <div className="w-full h-full relative z-0">
          <Image
            src={"/office.jpg"}
            fill
            className="object-cover brightness-[30%]"
            alt="Office"
          />
        </div>
        <div className="absolute -right-24 -bottom-24 z-20">
          <motion.div
            animate={{
              rotate: "360deg",
              opacity: [0, 1, 0.3, 1],
              scale: [1.5, 1, 1.5],
              transition: {
                repeat: Infinity,
                ease: "linear",
                duration: 10,
              },
            }}
            className="z-20 w-80 h-80 relative "
          >
            <Image
              src={"/fullwhite.png"}
              fill
              alt="Circle"
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{
          clipPath: "inset(0 0 0 100%)",
        }}
        whileInView={{
          clipPath: "inset(0 0 0 0)",
          transition: {
            duration: 0.5,
          },
        }}
        className="flex flex-col justify-between items-center relative"
      >
        <div className="w-full h-full absolute z-0 bg-yellow-400">
          <Image
            src={"/office.jpg"}
            fill
            alt="Office"
            className="object-cover brightness-[30%] flex md:hidden"
          />
        </div>
        <div className="z-20 py-8 flex flex-col justify-between w-full h-full items-center">
          <div className="z-20 w-full h-full flex justify-center items-center flex-col">
            <div
              className={`${raleway.className} text-white font-semibold gap-4 flex flex-col`}
            >
              <h1 className=" text-5xl text-center">
                LET'S CREATE CONTENT THAT{" "}
                <span className="text-red-600">SELLS!</span>
              </h1>
              <p className="text-center">(scroll down)</p>
            </div>
          </div>
          <div className="z-20 max-w-lg w-full h-auto -mt-16">
            <p
              className={`${raleway.className} text-xl text-gray-600 text-center`}
            >
              We've got the lens for every occasion, whether it's products,
              lifestyle moments, events, or store showcases.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Flexbox;
