"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg";

interface BentoCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  colors: string[];
  index: number;
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  value,
  subtitle,
  colors,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1 * index,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative overflow-hidden h-full backdrop-blur-sm rounded-xl border border-white/10"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={container}
      style={{
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <motion.div
        className="relative z-10 p-4 sm:p-6 md:p-8 text-foreground h-full"
        variants={container}
      >
        <motion.h3
          className="text-sm sm:text-base md:text-lg font-medium text-foreground/90"
          variants={item}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-3xl sm:text-5xl md:text-6xl font-instrument-serif font-medium my-3 md:my-4 text-foreground"
          variants={item}
        >
          {value}
        </motion.p>
        {subtitle && (
          <motion.p
            className="text-sm md:text-base text-foreground/80"
            variants={item}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

const ESewaStats: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Core eSewa brand green
  const brandGreen = "#6cc945";

  // New enriched color palette with beautiful contrasts
  const mintGreen = "#9de3a2";
  const seafoam = "#62d9c7";
  const skyBlue = "#7dd3fc";
  const lavender = "#c4b5fd";
  const peach = "#fda4af";
  const amber = "#fcd34d";
  const turquoise = "#5eead4";
  const coral = "#f9a8d4";

  return (
    <div
      ref={sectionRef}
      className="w-full py-16 md:py-24 relative overflow-hidden"
    >
      {/* Masking effect at the top */}
      <div className="absolute top-0 left-0 right-0 w-full h-[80px] sm:h-[100px] md:h-[150px]" />

      <motion.div
        className="max-w-7xl mx-auto px-4 mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-instrument-serif text-center mb-4"
          style={{ y }}
        >
          Experience the{" "}
          <span className="text-green-700 font-bold"> power</span> of eSewa by
          the numbers
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4 relative z-10">
        <div className="md:col-span-2">
          <BentoCard
            title="Total Transactions"
            value="NRS 85+ Billion"
            subtitle="Processed securely across Nepal"
            colors={[brandGreen, seafoam, skyBlue]}
            index={0}
          />
        </div>
        <BentoCard
          title="Active Users"
          value="4.5M+"
          subtitle="And growing every day"
          colors={[amber, mintGreen, brandGreen]}
          index={1}
        />
        <BentoCard
          title="Transaction Success Rate"
          value="99.8%"
          subtitle="Industry-leading reliability"
          colors={[brandGreen, turquoise, lavender]}
          index={2}
        />
        <div className="md:col-span-2">
          <BentoCard
            title="Merchant Partners"
            value="30,000+"
            subtitle="From small businesses to leading enterprises"
            colors={[seafoam, skyBlue, mintGreen]}
            index={3}
          />
        </div>
        <div className="md:col-span-3">
          <BentoCard
            title="Customer Satisfaction"
            value="4.7/5"
            subtitle="Based on 100,000+ reviews from verified users across Nepal"
            colors={[brandGreen, coral, skyBlue, mintGreen]}
            index={4}
          />
        </div>
      </div>

      {/* Masking effect at the bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full h-[100px] sm:h-[150px] md:h-[200px]"
        style={{
          background:
            "linear-gradient(to top, #ffffff 0%, rgba(255, 255, 255, 0) 100%)",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export { ESewaStats };
