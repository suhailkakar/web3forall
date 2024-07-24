import DefaultPopup from "@/components/default-popup";
import Hero from "@/components/hero";
import { images } from "@/lib/constants";
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
    <section>
      <Hero />
      {id && <DefaultPopup id={id} />}
    </section>
  );
}
