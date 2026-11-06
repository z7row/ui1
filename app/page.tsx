"use client";

import Navbar from "./components/navbar";
import { Hero } from "./components/hero";
import { useColor } from "../hooks/useColor";
import { COLOR_MAP, DEFAULT_COLOR_VALUE } from "../lib/colors";

export default function Home() {
  const colorName = useColor();
  const currentColorValue = COLOR_MAP[colorName] ?? DEFAULT_COLOR_VALUE;

  return (
    <div
      className="p-7 min-h-screen transition-all duration-1000 ease-in-out"
      style={
        {
          "--bg-color": currentColorValue,
          backgroundImage: `linear-gradient(to bottom,
            rgba(255, 255, 255) 27%,
            var(--bg-color) 100%
          )`,
          transition: "--bg-color 1s ease-in-out",
        } as React.CSSProperties
      }
    >
      <Navbar />
      <Hero />
    </div>
  );
}