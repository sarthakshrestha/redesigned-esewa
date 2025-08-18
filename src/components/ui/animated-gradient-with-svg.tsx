"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useDimensions } from "@/hooks/use-debounced-dimensions";

interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: "light" | "medium" | "heavy";
}

interface CircleConfig {
  top: string;
  left: string;
  tx1: number;
  ty1: number;
  tx2: number;
  ty2: number;
  tx3: number;
  ty3: number;
  tx4: number;
  ty4: number;
  width: number;
  height: number;
}

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 5,
  blur = "light",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [circles, setCircles] = useState<CircleConfig[]>([]);
  const [isClient, setIsClient] = useState(false);

  const dimensions = useDimensions(containerRef as any);

  const circleSize = useMemo(
    () => Math.max(dimensions.width || 1, dimensions.height || 1),
    [dimensions.width, dimensions.height]
  );

  // Generate random values once after component mounts
  useEffect(() => {
    setIsClient(true);

    const newCircles = colors.map(() => ({
      top: `${Math.random() * 50}%`,
      left: `${Math.random() * 50}%`,
      tx1: Math.random() - 0.5,
      ty1: Math.random() - 0.5,
      tx2: Math.random() - 0.5,
      ty2: Math.random() - 0.5,
      tx3: Math.random() - 0.5,
      ty3: Math.random() - 0.5,
      tx4: Math.random() - 0.5,
      ty4: Math.random() - 0.5,
      width: circleSize * randomInt(0.5, 1.5),
      height: circleSize * randomInt(0.5, 1.5),
    }));

    setCircles(newCircles);
  }, [colors.length, circleSize]);

  const blurClass =
    blur === "light"
      ? "blur-2xl"
      : blur === "medium"
      ? "blur-3xl"
      : "blur-[100px]";

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={cn(`absolute inset-0`, blurClass)}>
        {isClient &&
          circles.map((circle, index) => (
            <svg
              key={index}
              className="absolute animate-background-gradient"
              style={
                {
                  top: circle.top,
                  left: circle.left,
                  "--background-gradient-speed": `${1 / speed}s`,
                  "--tx-1": circle.tx1,
                  "--ty-1": circle.ty1,
                  "--tx-2": circle.tx2,
                  "--ty-2": circle.ty2,
                  "--tx-3": circle.tx3,
                  "--ty-3": circle.ty3,
                  "--tx-4": circle.tx4,
                  "--ty-4": circle.ty4,
                } as React.CSSProperties
              }
              width={circle.width}
              height={circle.height}
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="50"
                fill={colors[index]}
                className="opacity-30 dark:opacity-[0.15]"
              />
            </svg>
          ))}
      </div>
    </div>
  );
};

export { AnimatedGradient };
