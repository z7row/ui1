"use client";

import { Button } from "@heroui/react";
import Navbar from "./components/navbar";
import localFont from "next/font/local";

import { useEffect, useState } from "react";

function Color() {
  const colors = [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "taupe",
    "mauve",
    "mist",
    "olive",
  ];
  const [color, setcolor] = useState("red");
  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setcolor(randomColor);
      // console.log("Current Color: ", randomColor);
    }, 2000);

    // أهم خطوة: تنظيف الـ interval عند مسح الـ Component
    return () => clearInterval(interval);
  }, []);
  // console.log("is color", color);
  return color;
}

const ImperialScript = localFont({
  src: "../public/fonts/Imperial_Script/ImperialScript-Regular.ttf",
});
const Lobster = localFont({
  src: "../public/fonts/Lobster/Lobster-Regular.ttf",
});
export default  function Home() {
  const colorClass = Color();
  
  const colorMap: { [key: string]: string } = {
    "red": "rgb(127, 29, 29)",
    "orange": "rgb(124, 45, 18)",
    "amber": "rgb(120, 53, 15)",
    "yellow": "rgb(113, 63, 18)",
    "lime": "rgb(65, 84, 34)",
    "green": "rgb(20, 83, 34)",
    "emerald": "rgb(5, 83, 63)",
    "teal": "rgb(19, 78, 89)",
    "cyan": "rgb(14, 165, 233)",
    "sky": "rgb(3, 102, 214)",
    "blue": "rgb(30, 58, 138)",
    "indigo": "rgb(55, 48, 163)",
    "violet": "rgb(109, 40, 217)",
    "purple": "rgb(88, 28, 135)",
    "fuchsia": "rgb(119, 22, 165)",
    "pink": "rgb(131, 24, 67)",
    "rose": "rgb(159, 18, 57)",
    "slate": "rgb(15, 23, 42)",
    "gray": "rgb(17, 24, 39)",
    "zinc": "rgb(24, 24, 27)",
    "neutral": "rgb(23, 23, 23)",
    "stone": "rgb(28, 25, 23)",
    "taupe": "rgb(28, 25, 23)",
    "mauve": "rgb(88, 76, 100)",
    "mist": "rgb(200, 205, 195)",
    "olive": "rgb(61, 56, 30)",
  };
const currentColorValue = colorMap[colorClass] || "rgb(127, 29, 29)";
  // console.log("colorclass", colorClass)
  return (
    <div
      className="p-7 min-h-screen transition-all duration-1000 ease-in-out" // زدنا المدة لـ 1000ms عشان تلاحظ النعومة
      style={
        {
          // نضع اللون في variable
          "--bg-color": currentColorValue,
          backgroundImage: `linear-gradient(to bottom, 
            rgba(255, 255, 255) 27%, 
            var(--bg-color) 100%
          )`,
          // نؤكد على الـ transition للـ variable نفسه
          transition: "--bg-color 1s ease-in-out",
        } as React.CSSProperties
      }
    >
      {" "}
      <Navbar />
      <div className="w-full h-[80vh] flex justify-end items-center  flex-col text-white space-y-4">
        <div
          className={`bg-gray-200/30 px-2 py-1 rounded-full  ${Lobster.className}`}
        >
          Welcome To Web
        </div>
        <h1 className="text-6xl">
          Clarity in{" "}
          <span className={`italic text-7xl ${ImperialScript.className}`}>
            Complexity
          </span>
        </h1>
        <p className="text-center text-gray-300 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
          <br />
          doloremque sed? Nemo tempora assumenda quibusdam ea ratione recusandae
          atque adipisci.
        </p>
        <Button variant="tertiary" className={"text-black"}>
          Get Started
        </Button>
      </div>
    </div>
  );
}
