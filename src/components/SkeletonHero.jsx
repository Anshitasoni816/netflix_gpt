import React from "react";

const SkeletonHero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="aspect-video w-full md:h-screen md:aspect-auto bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 px-32 pt-[15%]">
          <div className="h-8 w-72 rounded bg-gray-700/70 animate-pulse mb-5" />
          <div className="h-4 w-96 rounded bg-gray-700/60 animate-pulse mb-2" />
          <div className="h-4 w-80 rounded bg-gray-700/60 animate-pulse mb-8" />
          <div className="flex gap-3">
            <div className="h-10 w-24 rounded bg-gray-600/70 animate-pulse" />
            <div className="h-10 w-28 rounded bg-gray-600/70 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonHero;
