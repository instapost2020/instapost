import Image from "next/image";
import React from "react";
import { Raleway } from "next/font/google";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

const raleway = Raleway({
  subsets: ["latin"],
});
const Engage = () => {
  const [except, setExcept] = useState(false);
  const [custom, setCustom] = useState(false);
  const [offer, setOffer] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row bg-yellow-400 p-3 gap-4">
      <motion.div
        initial={{
          clipPath: "inset(0 100% 0 0)",
        }}
        whileInView={{
          clipPath: "inset(0 0 0 0)",
          transition: {
            duration: 0.7,
          },
        }}
        viewport={{
          once: true,
        }}
        className="w-fit h-auto bg-white rounded-xl p-4 grid grid-cols-1"
      >
        <div className="w-full max-w-4xl h-full mx-auto inset-0 relative rounded-lg ">
          {/* <Image
            src={"/intern.png"}
            fill
            alt="Intern"
            className="object-contain md:object-cover lg:object-contain rounded-lg"
          /> */}
          <img src="/intern.png" alt="" className="rounded-lg" />
        </div>
        <div
          className={`${raleway.className} w-full max-w-xl flex flex-col gap-6`}
        >
          <h1 className="text-red-600 font-bold text-2xl">
            <span className="text-lg text-yellow-400">HERE AT</span> INSTA POST
            PH
          </h1>
          <p className={`text-red-600`}>
            We offer a full range of services from strategy and content creation
            to social media management and influencer partnerships. This
            all-in-one approach ensures that clients have a cohesive and
            streamlined marketing strategy, reinforcing their brand consistency.
          </p>
          <Button className="w-fit p-3 bg-yellow-400 hover:bg-red-400">
            learn about us
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{
          clipPath: "inset(0 100% 0 0)",
        }}
        whileInView={{
          clipPath: "inset(0 0 0 0)",
          transition: {
            duration: 0.7,
          },
        }}
        viewport={{
          once: true,
        }}
        className="w-full max-w-full h-auto bg-white rounded-xl px-4 pt-3 flex flex-col gap-6"
      >
        <h1
          className={`${raleway.className} text-4xl lg:text-6xl w-80 lg:w-full lg:max-w-2xl mx-auto uppercase text-center text-red-600 font-bold`}
        >
          Get Ready! To grow your brand with{" "}
          <span className="inline-block bg-red-600 text-3xl px-1 uppercase rounded-sm text-white font-bold">
            CONTENT that SELLS!
          </span>
        </h1>

        <div
          className={`text-red-600 pb-3 flex items-center flex-col gap-4 ${raleway.className}`}
        >
          <p className={`text-center mb-3`}>
            We offer a full range of services from strategy and content creation
            to social media management and influencer partnerships.
          </p>

          <h1 className="bg-gray-100 text-blue-700 w-full max-w-2xl mx-auto py-2 px-2 rounded-md flex flex-col gap-3">
            <p className={`${custom ? "line-clamp-3" : "line-clamp-none"}`}>
              <span className="font-bold text-blue-700 uppercase text-lg">
                Customized Strategies -
              </span>
              Tailoring our approach to meet the unique needs and goals of each
              client ensures personalized and effective marketing solutions.
              This bespoke service enhances the brand’s uniqueness and relevance
              in its market.
            </p>
            <span
              className="sm:hidden lg:flex"
              onClick={() => setCustom(!custom)}
            >
              {custom ? "Read more..." : "Read less..."}
            </span>
          </h1>
          <h1 className="bg-gray-100 text-blue-700 w-full max-w-2xl mx-auto py-2 px-2 rounded-md flex flex-col gap-3">
            <p className={`${except ? "line-clamp-3" : "line-clamp-none"}`}>
              <span className="font-bold text-blue-700 uppercase text-lg">
                Exceptional Support -
              </span>
              Providing ongoing support and clear communication ensures clients
              feel valued and understood throughout their journey with us. This
              level of service builds a strong, supportive relationship with our
              clients, enhancing their brand experience and satisfaction.
            </p>
            <span
              className="sm:hidden lg:flex"
              onClick={() => setExcept(!except)}
            >
              {except ? "Read more..." : "Read less..."}
            </span>
          </h1>
          <Button className="bg-yellow-400 hover:bg-red-400 font-normal">
            learn how we work
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Engage;
