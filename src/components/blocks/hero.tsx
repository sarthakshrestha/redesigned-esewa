"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { StaticImageData } from "next/image";

interface HeroProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  subtitle?: string;
  eyebrow?: string;
  ctaText?: string;
  ctaLink?: string;
  mockupImage?: {
    src: string | StaticImageData;
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
        className={cn("flex flex-col items-center ", className)}
        {...props}
      >
        {eyebrow && (
          <p className="font-instrument-sans uppercase tracking-[0.4em] sm:tracking-[0.51em] leading-[133%] text-center text-[16px] sm:text-[19px] mt-[100px] sm:mt-[180px] md:mt-[249px] mb-4 sm:mb-8 text-[#000000] animate-appear opacity-0 px-4">
            {eyebrow}
          </p>
        )}

        <h1 className="text-[36px] sm:text-[48px] md:text-[64px] leading-[1.2] sm:leading-[1.3] md:leading-[83px] text-center px-4 lg:px-[240px] xl:px-[334px] text-[#000000] animate-appear opacity-0 delay-100">
          {title}
        </h1>

        {subtitle && (
          <p className="text-[18px] sm:text-[22px] md:text-[28px] text-center font-instrument-sans font-light px-4 lg:px-[200px] xl:px-[314px] mt-[15px] sm:mt-[20px] md:mt-[25px] mb-[30px] sm:mb-[48px] leading-[133%] text-[#000000] animate-appear opacity-0 delay-300">
            {subtitle}
          </p>
        )}

        {ctaText && ctaLink && (
          <Link href={ctaLink}>
            <div className="group relative inline-flex items-center justify-center bg-[#5db729] text-[#ffffff] rounded-[10px] hover:bg-[#66934b] transition-colors font-instrument-sans w-[200px] sm:w-[227px] h-[45px] sm:h-[49px] animate-appear opacity-0 ">
              <span className="text-[16px] sm:text-[19px] whitespace-nowrap">
                {ctaText}
              </span>
              <div className="relative ml-1 h-5 w-5 overflow-hidden">
                <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 -translate-x-4"
                  >
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        )}
        {mockupImage && (
          <div className="flex flex-col items-center justify-center mt-12 sm:mt-16 md:mt-20 w-full mx-auto px-4 sm:px-6 lg:px-8 relative animate-appear opacity-0 delay-700">
            <div className="flex justify-center items-center w-full max-w-screen-lg mx-auto">
              <MockupFrame className="w-full max-w-full">
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
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 w-full h-[150px] sm:h-[200px] md:h-[303px]"
              style={{
                background:
                  "linear-gradient(to top, #ffffff 0%, rgba(0, 0, 0, 0) 100%)",
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

export default Hero;
