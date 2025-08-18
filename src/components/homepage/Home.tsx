"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Mockup, MockupFrame } from "@/components/ui/mockup";

interface HeroProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  subtitle?: string;
  eyebrow?: string;
  ctaText?: string;
  ctaLink?: string;
  mockupImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}
const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  (
    {
      className,
      title,
      subtitle,
      eyebrow,
      ctaText,
      ctaLink,
      mockupImage,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-center bg-[#f3f1ea]", className)}
        {...props}
      >
        {eyebrow && (
          <p className="font-instrument-sans uppercase tracking-[0.51em] leading-[133%] text-center text-[19px] mt-[249px] mb-8 text-[#000000] animate-appear opacity-0">
            {eyebrow}
          </p>
        )}

        <h1 className="text-[64px] leading-[83px] text-center px-4 lg:px-[314px] text-[#000000] animate-appear opacity-0 delay-100">
          {title}
        </h1>

        {subtitle && (
          <p className="text-[28px] text-center font-instrument-sans font-light px-4 lg:px-[314px] mt-[25px] mb-[48px] leading-[133%] text-[#000000] animate-appear opacity-0 delay-300">
            {subtitle}
          </p>
        )}

        {ctaText && ctaLink && (
          <Link href={ctaLink}>
            <div className="inline-flex items-center bg-[#000000] text-[#ffffff] rounded-[10px] hover:bg-[#000000]/90 transition-colors font-instrument-sans w-[200px] sm:w-[227px] h-[45px] sm:h-[49px] animate-appear opacity-0 delay-500">
              <div className="flex items-center justify-center w-full gap-3">
                <span className="text-[16px] sm:text-[19px] whitespace-nowrap">
                  {ctaText}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  className="flex-shrink-0"
                >
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                </svg>
              </div>
            </div>
          </Link>
        )}

        {mockupImage && (
          <div className="mt-20 w-full relative animate-appear opacity-0 delay-700">
            <MockupFrame>
              <Mockup type="responsive">
                <Image
                  src={mockupImage.src}
                  alt={mockupImage.alt}
                  width={mockupImage.width}
                  height={mockupImage.height}
                  className="w-full"
                  priority
                />
              </Mockup>
            </MockupFrame>
            <div
              className="absolute bottom-0 left-0 right-0 w-full h-[303px]"
              style={{
                background:
                  "linear-gradient(to top, #DCD5C1 0%, rgba(217, 217, 217, 0) 100%)",
                zIndex: 10,
              }}
            />
          </div>
        )}
      </div>
    );
  }
);
Hero.displayName = "Hero";

export { Hero };
