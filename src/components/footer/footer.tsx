"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import LetterSwapForward from "@/fancy/components/text/letter-swap-forward-anim";
const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: false, amount: 0.3 });

  // Animation variants
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div ref={footerRef} className="w-full bg-[#f8f8f8]">
      {/* Footer with letter swap animations */}
      <div className="relative z-0 w-full h-80 bg-white flex justify-center items-center border-t border-gray-200">
        <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-green-600">
          <motion.div
            className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <ul className="space-y-2">
              <motion.li variants={item} className="cursor-pointer">
                <LetterSwapForward
                  reverse
                  label="Home"
                  staggerDuration={0.02}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              </motion.li>
              <motion.li variants={item} className="cursor-pointer">
                <LetterSwapForward
                  label="Services"
                  staggerDuration={0.02}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              </motion.li>
              <motion.li variants={item} className="cursor-pointer">
                <LetterSwapForward
                  label="Business"
                  staggerDuration={0.02}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              </motion.li>
            </ul>
            <ul className="space-y-2">
              <motion.li variants={item} className="cursor-pointer">
                <LetterSwapForward
                  label="Help Center"
                  staggerDuration={0.01}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              </motion.li>
              <motion.li variants={item} className="cursor-pointer">
                <LetterSwapForward
                  label="About Us"
                  staggerDuration={0.02}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              </motion.li>
              <motion.li variants={item} className="cursor-pointer">
                <LetterSwapForward
                  label="Contact"
                  staggerDuration={0.02}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              </motion.li>
            </ul>
          </motion.div>

          <motion.h2
            className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[60px] text-green-500 font-instrument-serif w-full sm:w-auto"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="block sm:hidden">
              <LetterSwapForward
                label="eSewa V2"
                staggerDuration={0.05}
                staggerFrom="center"
                transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
                className="font-instrument-serif"
              />
            </div>
            <div className="hidden sm:block">
              <LetterSwapForward
                label="eSewa Version 2"
                staggerDuration={0.05}
                staggerFrom="center"
                transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
                className="font-instrument-serif"
              />
            </div>
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
