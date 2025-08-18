"use client";
import { Hero } from "@/components/blocks/hero";
import HomeImage from "../../public/images/Home.png";
import { ESewaStats } from "@/components/homepage/Numbers";
import { Testimonial } from "@/components/testimonial/Testimonial";

export function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero
        eyebrow="INTRODUCING ESEWA 2.0"
        title={
          <>
            <div className="whitespace-normal md:whitespace-nowrap">
              <span className="font-instrument-serif font-normal text-[40px] sm:text-[56px] md:text-[76px] lg:text-[84px]">
                Payments,{" "}
              </span>
              <span className="font-instrument-serif font-normal text-[40px] sm:text-[56px] md:text-[76px] lg:text-[84px]">
                even more{" "}
              </span>
              <span className="font-instrument-serif italic font-bold text-[40px] sm:text-[56px] md:text-[76px] lg:text-[84px] text-green-700">
                better
              </span>
            </div>
          </>
        }
        subtitle="a breath of fresh air with a new look and feel"
        ctaText="Download now"
        ctaLink="/"
        mockupImage={{
          src: HomeImage,
          alt: "eSewa Mobile App Interface",
          width: 1274,
          height: 1043,
        }}
      />
      <ESewaStats />
      <Testimonial />
    </main>
  );
}
