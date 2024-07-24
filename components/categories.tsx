import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories, images } from "@/lib/constants";
import Image from "next/image";

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
        <TabsList className="mb-4">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-3 gap-4">
              {images
                .filter((image) => image.category.includes(category))
                .map((image) => (
                  <div key={image.id}>
                    <Image
                      src={image.url}
                      alt={image.name}
                      width={400}
                      height={400}
                    />
                  </div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
