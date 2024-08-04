import Image from "next/image";
import React from "react";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";

const raleway = Raleway({
  subsets: ["latin"],
});
const Flex = () => {
  const Upper = [
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
  ];

  const Bottom = [
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
    "/rose.png",
  ];
  return (
    <div className="grid w-full py-12 relative">
      <Image
        src={"/background.png"}
        fill
        className="object-cover fixed top-0 left-0 z-0"
        alt="BG"
      />
      {/* Upper */}
      <div className="w-full flex flex-col lg:flex-row justify-between py-4 px-4">
        <div className="py-8 w-full max-w-lg md:max-w-xl">
          <div
            className={`${raleway.className} px-4 sm:px-12 mt-12 uppercase font-bold text-slate-700 text-4xl sm:text-5xl md:text-6xl`}
          >
            <motion.h1
              initial={{
                clipPath: "inset(0 100% 0 0)",
              }}
              whileInView={{
                clipPath: "inset(0 0 0 0)",
                transition: {
                  duration: 0.8,
                },
              }}
            >
              Why
            </motion.h1>
            <motion.h1
              initial={{
                clipPath: "inset(0 100% 0 0)",
              }}
              whileInView={{
                clipPath: "inset(0 0 0 0)",
                transition: {
                  duration: 0.8,
                },
              }}
            >
              Should You
            </motion.h1>
            <motion.h1
              initial={{
                clipPath: "inset(0 100% 0 0)",
              }}
              whileInView={{
                clipPath: "inset(0 0 0 0)",
                transition: {
                  duration: 0.8,
                },
              }}
            >
              Consider Us
            </motion.h1>
            <motion.h1
              initial={{
                clipPath: "inset(0 100% 0 0)",
              }}
              whileInView={{
                clipPath: "inset(0 0 0 0)",
                transition: {
                  duration: 0.8,
                },
              }}
            >
              For your
            </motion.h1>
            <motion.h1
              initial={{
                clipPath: "inset(0 100% 0 0)",
              }}
              whileInView={{
                clipPath: "inset(0 0 0 0)",
                transition: {
                  duration: 0.8,
                },
              }}
            >
              Photography needs?
            </motion.h1>
          </div>
        </div>
        <div className=" pt-12 z-10 w-full max-w-3xl h-auto">
          <h1
            className={`${raleway.className} text-2xl text-center uppercase font-bold text-black`}
          >
            Photography Clients
          </h1>
          <motion.div className="w-full h-full relative mx-auto columns-2 md:columns-3">
            {Upper.map((item, index) => (
              <motion.div
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                  transition: {
                    duration: 0.4,
                  },
                }}
                className="w-full h-52 relative border border-gray-800"
                key={index}
              >
                <Image
                  src={item}
                  alt="Logo"
                  fill
                  className="object-contain mx-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* {/* Bottom  */}
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-6 w-full h-full relative px-4 space-y-4">
        {Bottom.map((item, index) => (
          <motion.div
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 0.4,
              },
            }}
            className="border border-gray-800 w-full h-52 relative"
            key={index}
          >
            <Image fill src={item} alt="Logo" className="object-contain" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Flex;
