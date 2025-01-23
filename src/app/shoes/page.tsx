"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Loader from "@/src/components/ui/Loader";

const LazySection = dynamic(
  () => import("@/src/components/sections/CardSection"),
  {
    loading: () => <Loader />,
    ssr: false,
  },
);

function ShoesPage() {
  return (
    <main className="h-screen-nav flex gap-8 p-5 md:p-8 tablet:flex-col tablet:gap-4">
      <Suspense fallback={<Loader />}>
        <LazySection />
      </Suspense>
    </main>
  );
}

export default ShoesPage;
