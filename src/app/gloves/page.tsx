"use client";
import CardSection from "@/components/sections/CardSection";
import CategorySlider from "@/components/sections/CategorySlider";
import React, { useState } from "react";

function GlovesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("middle");

  function handleSelectedCategory(title: string) {
    setSelectedCategory(title);
  }

  return (
    <main className=' h-screen-nav flex gap-8 p-5 md:p-8 tablet:flex-col tablet:gap-4'>
      <CategorySlider funcToGetCategory={handleSelectedCategory} />
      <CardSection showCategory={selectedCategory} />
    </main>
  );
}

export default GlovesPage;
