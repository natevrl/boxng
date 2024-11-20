"use client";
import CardSection from "@/src/components/CardSection";
import CategorySlider from "@/src/components/CategorySlider";
import React, { useState } from "react";

function GlovesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  function handleSelectedCategory(title: string) {
    setSelectedCategory(title);
  }

  return (
    <main className=" h-screen-nav flex gap-8 p-5 md:p-8">
      <CategorySlider funcToGetCategory={handleSelectedCategory} />
      <CardSection showCategory={selectedCategory} />
    </main>
  );
}

export default GlovesPage;
