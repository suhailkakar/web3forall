import { APP_NAME, categories } from "@/lib/constants";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
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
      <div>
        <Button
          variant={"ghost"}
          asChild
          className="hover:bg-transparent dark:hover:bg-transparent dark:hover:text-gray-500 transition duration-500"
        >
          <Link target="_blank" href="https://x.com/suhailkakar">
            {" "}
            @suhailkakar
          </Link>
        </Button>
      </div>
    </div>
  );
}
