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
import { Download, X } from "lucide-react";
import { share } from "@/lib/share";
import { download } from "@/lib/download";
import Link from "next/link";

export default function Tile({
  url,
  name,
  id,
  categories,
  author,
}: {
  url: string;
  name: string;
  id: string;
  categories: string[];
  author?: {
    name: string;
    url: string;
    image: string;
  };
}) {
  const shareImage = () => {
    share(name, id);
  };

  const downloadImage = () => {
    if (url.includes(".svg")) {
      alert("SVGs are not supported for download yet");
    } else {
      download(url, name);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="relative">
          <Image src={url} alt={name} width={900} height={400} />
          <div className="absolute bottom-4 left-4">
            {author && (
              <Badge variant={"secondary"}>
                <Image
                  src={author.image}
                  alt={author.name}
                  width={20}
                  height={20}
                  className="rounded-full"
                />

                <p className="text-sm ml-2">by {author.name}</p>
              </Badge>
            )}
          </div>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-xl">
        <AlertDialogHeader className="relative">
          <AlertDialogTitle>{name}</AlertDialogTitle>
          <AlertDialogDescription className="flex flex-row justify-between">
            <div className="flex flex-row space-x-2">
              {categories.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))}
            </div>
          </AlertDialogDescription>
          <AlertDialogCancel className="w-10 h-10 p-0 absolute right-0 border-0 -top-2">
            <X className="w-4 h-4 text-white" />
          </AlertDialogCancel>
        </AlertDialogHeader>
        <Image src={url} alt={name} width={1000} height={1000} />
        <AlertDialogFooter className="flex flex-row sm:justify-between">
          {author && (
            <Badge
              onClick={() => {
                window.open(author.url, "_blank");
              }}
              variant={"secondary"}
              className="cursor-pointer"
            >
              <Image
                src={author.image}
                alt={author.name}
                width={20}
                height={20}
                className="rounded-full"
              />
              <p className="text-sm ml-2">by {author.name}</p>
            </Badge>
          )}
          <div className="flex flex-row space-x-2">
            <Button onClick={downloadImage} variant={"outline"}>
              <Download className="w-3 h-3 mr-2" />
              Download
            </Button>
            <AlertDialogAction onClick={shareImage}>Share</AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
