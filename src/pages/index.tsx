import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Engage from "@/components/Engage";
import Flex from "@/components/Flex";
import Image from "next/image";

const index = () => {
  return (
    <div className="w-full h-[400vh] z-0 scroll-smooth relative">
      <Hero />
      <Engage />
      <Flex />
    </div>
  );
};

export default index;
