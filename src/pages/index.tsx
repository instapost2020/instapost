import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SecondPage from "@/components/SecondPage";

const index = () => {
  return (
    <div className="w-full h-[400vh] z-0">
      <Hero />
      <SecondPage />
      {/* <div className="w-full h-screen"></div>
      <motion.div
        initial={{
          clipPath: "inset(0 100% 0 0)",
        }}
        whileInView={{
          clipPath: "inset(0 0 0 0)",
        }}
        // viewport={{
        //   margin: "-200px  0px",
        // }}
        className="w-96 h-96 bg-red-400 "
      ></motion.div> */}
    </div>
  );
};

export default index;
