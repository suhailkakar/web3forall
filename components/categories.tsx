import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories, images } from "@/lib/constants";
import Image from "next/image";
import Tile from "./ui/tile";

export default function Categories({
  searchParams,
}: {
  searchParams?: {
    query: string;
    category?: string;
  };
}) {
  const { category } = searchParams || { category: "all" };

  return (
    <div>
      <Tabs defaultValue={category}>
        <TabsList className="mb-10 md:mb-4">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images
                .filter((image) => image.category.includes(category))
                .map((image) => (
                  <Tile
                    url={image.url}
                    name={image.name}
                    id={image.id}
                    key={image.id}
                    categories={image.category}
                  />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
