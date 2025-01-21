"use client";
import CategorySlider from "@/components/sections/CategorySlider";
import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import Loader from "@/src/components/ui/Loader";
import { useStore } from "@/src/hooks/useStore";


const LazySection = dynamic(
  () => import("@/src/components/sections/CardSection"),
  {
    loading: () => <Loader />,
    ssr: false,
  },
);

function GlovesPage() {


  return (
    <main className="h-screen-nav flex gap-8 p-5 md:p-8 tablet:flex-col tablet:gap-4">
      <Suspense fallback={<Loader />}>
        <LazySection />
      </Suspense>
    </main>
  );
}

export default GlovesPage;
