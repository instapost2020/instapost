import Navbar from "@/components/Navbar";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/Hero";
import Engage from "@/components/Engage";
import Flex from "@/components/Flex";
import Image from "next/image";
import Flexbox from "@/components/Flexbox";
import Team from "@/components/Team";
import Consider from "@/components/Consider";

const index = () => {
  return (
    <motion.div className="w-full h-auto z-0 overflow-y-hidden scroll-smooth relativ">
      <Hero />
      <Engage />
      <Flex />
      <Flexbox />
      <Team />
      <Consider />
    </motion.div>
  );
};

export default index;
