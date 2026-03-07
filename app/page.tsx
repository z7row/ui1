"use client";
import { Button } from "@heroui/react";
import Navbar from "./components/navbar";
import localFont from "next/font/local";

const ImperialScript = localFont({
  src: "../public/fonts/Imperial_Script/ImperialScript-Regular.ttf",
});
const Lobster = localFont({
  src: "../public/fonts/Lobster/Lobster-Regular.ttf",
});
export default function Home() {
  return (
    <div className="p-7 bg-linear-to-b from-white from-30%  to-indigo-900 min-h-screen ">
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
