import React from "react";
import { Raleway } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const raleway = Raleway({
  subsets: ["latin"],
});
const Consider = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end start", "start end"],
  });

  const x = useTransform(scrollYProgress, [1, 0.7], [-90, 0]);
  const opacity = useTransform(scrollYProgress, [1, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [1, 0.7], [0.5, 1]);

  return (
    <motion.div
      ref={targetRef}
      style={{ opacity }}
      className="w-full h-auto rounded-t-3xl bg-yellow-400 text-white flex-col gap-8 justify-center z-0"
    >
      <motion.div
        ref={targetRef}
        style={{ scale }}
        className="w-full max-w-3xl mx-auto h-full p-4 z-20"
      >
        <h1 className={`${raleway.className} text-center text-4xl`}>
          WHY YOU SHOULD CONSIDER US FOR YOUR BUSINESS NEEDS
        </h1>
      </motion.div>
      <div className="w-full h-full z-20 px-3">
        <div className="bg-white rounded-2xl p-4 text-black w-full h-auto flex flex-col">
          <h1 className="text-4xl font-bold">BE OUR PARTNER</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Consider;
