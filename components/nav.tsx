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
          className="hover:bg-transparent dark:hover:bg-transparent dark:hover:text-gray-500 transition duration-500 fill-white hover:fill-gray-500"
        >
          <Link target="_blank" href="https://x.com/suhailkakar">
            Made with <Heart /> by @suhailkakar
          </Link>
        </Button>
      </div>
    </div>
  );
}

const Heart = () => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    className="w-3 h-3 mx-1 fill-inherit"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.765 1.70229L10 2.52422L9.23495 1.70229C7.12233 -0.567428 3.69709 -0.56743 1.58447 1.70229C-0.528155 3.972 -0.528156 7.65194 1.58447 9.92165L8.4699 17.3191C9.31495 18.227 10.685 18.227 11.5301 17.3191L18.4155 9.92165C20.5282 7.65194 20.5282 3.972 18.4155 1.70229C16.3029 -0.567429 12.8777 -0.567429 10.765 1.70229Z"
      fill="inherit"
    />
  </svg>
);
