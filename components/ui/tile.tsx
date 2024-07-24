import Image from "next/image";
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
import { Badge } from "./badge";
import { Button } from "./button";

export default function Tile({
  url,
  name,
  id,
  categories,
}: {
  url: string;
  name: string;
  id: number;
  categories: string[];
}) {
  const shareImage = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${name}: explain like i'm five by @suhailkakar. Check it out at https://web3forall.xyz`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Image src={url} alt={name} width={400} height={400} />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{name}</AlertDialogTitle>
          <AlertDialogDescription className="space-x-2">
            {categories.map((item, index) => (
              <Badge key={index}>{item}</Badge>
            ))}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Image src={url} alt={name} width={1200} height={1200} />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={shareImage}>Share</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
