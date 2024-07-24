"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Navbar from "./nav";
import { ModeToggle } from "./ui/mode-toggle";
import { ArrowDown } from "lucide-react";
import Categories from "./categories";
import { images } from "@/lib/constants";
import Link from "next/link";

export function Hero() {
  const newItem = images[images.length - 1];
  return (
    <div className="px-6 md:px-0">
      <Navbar />
      <div className="h-[20rem] md:h-[40rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-transparent  text-white flex items-center space-x-2"
        >
          <Link href={"?id=" + newItem.id}>
            NEW: {newItem.name}, explain like I’m five
          </Link>
        </HoverBorderGradient>
        <div className="max-w-4xl mx-auto p-4 mt-4">
          <h1 className="relative z-10 text-3xl md:text-7xl   bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Simplifying the Future of the Internet
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg mt-4 text-center relative z-10">
            where Web3 is explained like you’re five. No geeky jargon, just
            plain, fun explanations
          </p>
        </div>
      </div>
      <div className="md:-mt-[8rem] flex w-full justify-center items-center">
        <ArrowDown className="text-neutral-500 w-8 h-8 animate-bounce" />
      </div>
      <BackgroundBeams />
      <div className="max-w-6xl mx-auto mt-[5rem] md:mt-[5rem]">
        <Categories />
      </div>
    </div>
  );
}

export default Hero;
