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
import { Download, X } from "lucide-react";
import { share } from "@/lib/share";
import { download } from "@/lib/download";
import { Button } from "./ui/button";

export default function DefaultPopup({ id }: { id: string }) {
  const image = images.find((image) => image.id === id) as any;

  const { url, name, category } = image;

  const shareImage = () => {
    share(name, id);
  };

  const downloadImage = () => {
    download(url, name);
  };

  const closeModal = () => {
    window.open("/", "_self");
  };

  return (
    <AlertDialog open={true}>
      <AlertDialogContent className="max-w-3xl">
        <AlertDialogHeader className="relative">
          <AlertDialogTitle>{name}</AlertDialogTitle>
          <AlertDialogDescription className="flex flex-row justify-between">
            <div className="flex flex-row space-x-2">
              {category.map((item: any, index: string) => (
                <Badge key={index}>{item}</Badge>
              ))}
            </div>
          </AlertDialogDescription>
          <AlertDialogCancel
            onClick={closeModal}
            className="w-10 h-10 p-0 absolute right-0 border-0 -top-2"
          >
            <X className="w-4 h-4 text-white" />
          </AlertDialogCancel>
        </AlertDialogHeader>
        <Image src={url} alt={name} width={1000} height={1000} />
        <AlertDialogFooter>
          <Button onClick={downloadImage} variant={"outline"}>
            <Download className="w-3 h-3 mr-2" />
            Download
          </Button>
          <AlertDialogAction onClick={shareImage}>Share</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
