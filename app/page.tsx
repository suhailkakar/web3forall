import DefaultPopup from "@/components/default-popup";
import Hero from "@/components/hero";
import { images } from "@/lib/constants";
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

  const defaultPopup = images.find((image) => image.id === Number(id)) as any;

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Website",
            headline: id ? defaultPopup.name : "Web3 For All",
            image: id ? defaultPopup.url : "https://web3forall.xyz/og.png",
            url: `https://web3forall.xyz${id ? `?id=${id}` : ""}`,
            author: {
              "@type": "Person",
              name: "Suhail Kakar",
            },
          }),
        }}
      />
      <Hero />
      {id && <DefaultPopup id={Number(id)} />}
    </section>
  );
}
