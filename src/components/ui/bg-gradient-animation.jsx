"use client";
import { cn } from "../../lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "#0b1220",         // Deep Night Blue
  gradientBackgroundEnd = "#1c2e4d",           // Desaturated Indigo
  firstColor = "11, 18, 32",                   // Darkest base
  secondColor = "28, 46, 77",                  // Secondary shadows
  thirdColor = "38, 70, 110",                  // Cool cyan light
  fourthColor = "60, 79, 102",                 // Urban steel
  fifthColor = "88, 116, 153",                 // Subtle neon highlight
  size = "80%",
  blendingValue = "soft-light",
  children,
  className,
  interactive = true,
  containerClassName,
}) => {
  const interactiveRef = useRef(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
    document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, []);

  useEffect(() => {
    if (!interactiveRef.current) return;
    setCurX(curX + (tgX - curX) / 20);
    setCurY(curY + (tgY - curY) / 20);
    interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
  }, [tgX, tgY]);

  const handleMouseMove = (event) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(120deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className={cn("", className)}>{children}</div>

      {/* Gradient Overlay */}
      <div
        className={cn(
          "absolute top-0 left-0 h-full w-full pointer-events-none",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        {[firstColor, secondColor, thirdColor, fourthColor, fifthColor].map((color, index) => (
          <div
            key={index}
            className={cn(
              `absolute w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
              `[mix-blend-mode:var(--blending-value)]`,
              index === 0 && "animate-first",
              index === 1 && "animate-second",
              index === 2 && "animate-third",
              index === 3 && "animate-fourth opacity-70",
              index === 4 && "animate-fifth",
            )}
            style={{
              background: `radial-gradient(circle at center, rgba(${color}, 0.8) 0, rgba(${color}, 0) 50%)`,
              transformOrigin: "center center",
            }}
          />
        ))}

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute w-full h-full -top-1/2 -left-1/2 opacity-70`,
              `[background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)]`,
              `[mix-blend-mode:var(--blending-value)]`
            )}
          />
        )}
      </div>
    </div>
  );
};
