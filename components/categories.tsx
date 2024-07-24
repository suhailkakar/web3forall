"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories, images as allImages } from "@/lib/constants";
import Tile from "./ui/tile";
import { Input } from "./ui/input";

export default function Categories({
  searchParams,
}: {
  searchParams?: {
    query: string;
    category?: string;
  };
}) {
  const { category } = searchParams || { category: "all" };
  const [images, setImages] = useState(allImages);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredImages = allImages.filter((image) =>
      image.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setImages(filteredImages);
  };

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
        <div className="flex md:justify-end md:-mt-[4rem] md:mb-[2rem] p-2 lg:p-0 ">
          <Input
            onChange={handleSearch}
            placeholder="Search"
            className="md:w-1/3 rounded-xl"
          />
        </div>
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
