import DefaultPopup from "@/components/default-popup";
import Hero from "@/components/hero";
import Image from "next/image";
import React from "react";

export default function Page({
  searchParams,
}: {
  searchParams: {
    id: string;
  };
}) {
  const { id } = searchParams;

  return (
    <div className="">
      <Hero />
      {id && <DefaultPopup id={Number(id)} />}
    </div>
  );
}
