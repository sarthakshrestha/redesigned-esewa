"use client";

import React from "react";
import { LayoutGroup, motion } from "framer-motion";
import { TextRotate } from "../ui/text-rotate";

interface TestimonialProps {
  testimonials?: { text: string; author: string }[];
  className?: string;
  rotationInterval?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  testimonials = [
    {
      text: "eSewa has completely transformed how I manage my finances. The convenience of paying bills, transferring money, and shopping online all from one app is unmatched. I can't imagine going back to traditional banking.",
      author: "Aarav Sharma",
    },
    {
      text: "As a small business owner, eSewa has been a game-changer for me. The seamless payment process has improved my cash flow and the merchant dashboard gives me insights I never had before. Truly revolutionary!",
      author: "Priya Thapa",
    },
    {
      text: "The security features in eSewa gave me confidence to try digital payments. Now I use it for everything from utility bills to online shopping. Their customer service team is always helpful whenever I have questions.",
      author: "Bijay Gurung",
    },
  ],
  className = "",
  rotationInterval = 5000,
}) => {
  return (
    <div className={`w-full py-16 md:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <LayoutGroup>
            <div className="w-full font-light overflow-hidden p-8 sm:p-12 rounded-xl bg-white/70 backdrop-blur-sm text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700">
              <TextRotate
                texts={testimonials.map((t) => t.text)}
                staggerFrom={"first"}
                staggerDuration={0.01}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={rotationInterval}
                splitBy="words"
              />
              <motion.div
                className="bg-green-500 w-2 h-2 sm:w-3 sm:h-3 rounded-full my-6"
                layout
              />
              <TextRotate
                texts={testimonials.map((t) => t.author)}
                staggerFrom={"first"}
                staggerDuration={0.025}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={rotationInterval}
                splitBy="characters"
                mainClassName="font-medium text-base sm:text-lg text-green-700"
              />
            </div>
          </LayoutGroup>
        </motion.div>
      </div>
    </div>
  );
};

export { Testimonial };
