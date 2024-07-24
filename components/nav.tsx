import { APP_NAME } from "@/lib/constants";
import React from "react";
import { ModeToggle } from "./ui/mode-toggle";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  const categories = ["ethereum", "zk", "defi", "layer 2", "privacy"];
  return (
    <div
      style={{
        pointerEvents: "visible",
        zIndex: 1000,
        overflow: "hidden",
      }}
      className=" relative max-w-6xl mx-auto py-6  overflow-hidden flex flex-row justify-between"
    >
      <h1 className="text-foreground font-bold">{APP_NAME}</h1>
      <ul className="flex flex-row space-x-6">
        {categories.map((category) => (
          <Link key={category} href={`#${category}`}>
            {category}
          </Link>
        ))}
      </ul>
      <div>
        <Button
          variant={"ghost"}
          className="hover:bg-transparent dark:hover:bg-transparent dark:hover:text-gray-500 transition duration-500"
        >
          @suhailkakar
        </Button>
      </div>
    </div>
  );
}
