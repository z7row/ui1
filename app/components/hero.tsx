"use client";

import { Button } from "@heroui/react";
import { ImperialScript, Lobster } from "@/fonts";

export function Hero() {
  return (
    <div className="w-full h-[80vh] flex justify-end items-center flex-col text-white space-y-4">
      <div
        className={`bg-gray-200/30 px-2 py-1 rounded-full ${Lobster.className}`}
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
      <Button variant="tertiary" className="text-black">
        Get Started
      </Button>
    </div>
  );
}