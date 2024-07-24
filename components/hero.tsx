"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Navbar from "./nav";
import { ModeToggle } from "./ui/mode-toggle";
import { ArrowDown } from "lucide-react";
import Categories from "./categories";

export function Hero() {
  return (
    <div className="h-[40rem]">
      <Navbar />
      <div className="h-full w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-transparent  text-white flex items-center space-x-2"
        >
          <span>NEW: ZK Proof, explain like I’m five</span>
        </HoverBorderGradient>
        <div className="max-w-4xl mx-auto p-4 mt-4">
          <h1 className="relative z-10 text-lg md:text-7xl   bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Simplifying the Future of the Internet
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg mt-4 text-center relative z-10">
            where Web3 is explained like you’re five. No geeky jargon, just
            plain, fun explanations
          </p>
        </div>
      </div>
      <div className="-mt-[8rem] flex w-full justify-center items-center">
        <ArrowDown className="text-white w-8 h-8" />
      </div>
      <BackgroundBeams />
      <div className="max-w-6xl mx-auto mt-[10rem]">
        <Categories />
      </div>
    </div>
  );
}

export default Hero;
