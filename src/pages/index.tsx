import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Engage from "@/components/Engage";
import Flex from "@/components/Flex";
import Image from "next/image";
import Flexbox from "@/components/Flexbox";
import Team from "@/components/Team";

const index = () => {
  return (
    <div className="w-full h-auto z-0 overflow-y-hidden scroll-smooth relative">
      <Hero />
      <Engage />
      <Flex />
      <Flexbox />
      <Team />
    </div>
  );
};

export default index;
