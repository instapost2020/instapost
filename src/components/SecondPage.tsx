import { Raleway } from "next/font/google";
import Image from "next/image";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { DivideSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const raleway = Raleway({
  subsets: ["latin"],
});
const SecondPage = () => {
  const BrandPersonality = [
    "CREATIVE",
    "RESULT-DRIVEN",
    "CONNECTING",
    "QUICK-THINKING",
    "FUN-LOVING",
    "PROFICIENT",
  ];

  interface MarqueeProps {
    className?: string;
    children?: ReactNode;
    vertical?: boolean;
    repeat?: number;
    pauseOnHover?: boolean;
    reverse?: boolean;
    [key: string]: any;
  }

  const Marquee = ({
    className,
    children,
    pauseOnHover = false,
    repeat = 4,
    reverse,
    vertical = false,
  }: MarqueeProps) => {
    return (
      <div
        {...Marquee}
        className={cn(
          "group flex overflow-hidden p-2 [--duration:50s] [--gap:1rem] [gap:var(--gap)]",
          {
            "flow-col": vertical,
            "flex-row": !vertical,
          },
          className
        )}
      >
        {BrandPersonality.map((item, index) => (
          <div
            key={`marquee-${index}`}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="w-full h-auto relative py-8">
      <div className="relative">
        <div className="absolute z-10 inset-0 bg-gradient-to-l from-white via-transparent to-white" />
        <Marquee pauseOnHover className="[--duration:20s]">
          {BrandPersonality.map((item, index) => (
            <div
              key={index}
              className="w-40 h-fit sm:w-52 sm:h-fit relative grayscale"
            >
              <h1 className=" font-semibold text-center text-gray-500 text-lg md:text-2xl">
                {item}
              </h1>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SecondPage;