"use client";
import CardSection from "@/components/sections/CardSection";
import CategorySlider from "@/components/sections/CategorySlider";
import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import Loader from "@/src/components/ui/Loader";

const LazySection = dynamic(
  () => import("@/src/components/sections/CardSection"),
  {
    loading: () => <Loader />,
    ssr: false,
  },
);

function GlovesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("middle");

  function handleSelectedCategory(title: string) {
    setSelectedCategory(title);
  }
  return (
    <main className="h-screen-nav flex gap-8 p-5 md:p-8 tablet:flex-col tablet:gap-4">
      <CategorySlider funcToGetCategory={handleSelectedCategory} />
      <Suspense fallback={<Loader />}>
        <LazySection showCategory={selectedCategory} />
      </Suspense>
    </main>
  );
}

export default GlovesPage;
