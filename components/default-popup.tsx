"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { images } from "@/lib/constants";
import { Badge } from "./ui/badge";
import Image from "next/image";

export default function DefaultPopup({ id }: { id: number }) {
  const image = images.find((image) => image.id === id) as any;

  const { url, name, category } = image;

  const shareImage = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${name}: explain like i'm five by @suhailkakar. Check it out at https://web3forall.xyz?id=${id}`;
    window.open(twitterUrl, "_blank");
  };

  const closeModal = () => {
    window.open("/", "_self");
  };

  return (
    <AlertDialog open={true}>
      <AlertDialogContent className="max-w-3xl">
        <AlertDialogHeader>
          <AlertDialogTitle>{name}</AlertDialogTitle>
          <AlertDialogDescription className="space-x-2">
            {category?.map((item: any, index: number) => (
              <Badge key={index}>{item}</Badge>
            ))}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Image src={url} alt={name} width={1200} height={1200} />
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeModal}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={shareImage}>Share</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
