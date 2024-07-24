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
    share(name, id);
  };

  const downloadImage = () => {
    download(url, name);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Image src={url} alt={name} width={900} height={400} />
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-3xl">
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
