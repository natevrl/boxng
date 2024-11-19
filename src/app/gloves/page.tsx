"use client";
import CardSection from "@/src/components/CardSection";
import CategorySlider from "@/src/components/slider/CategorySlider";
import React, { useState } from "react";

function GlovesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>(""); 

  function handleSelectedCategory(title: string) {
    setSelectedCategory(title);
  }


  return (
    <>
      <CategorySlider funcToGetCategory={handleSelectedCategory}/>
      <CardSection showCategory={selectedCategory}/>
    </>
  );
}

export default GlovesPage;
