import React from "react";
import SkeletonCard from "./SkeletonCard";

const SkeletonRow = ({ cardCount = 10, titleWidthClass = "w-40" }) => {
  return (
    <div className="md:px-20 md:py-5 px-3 py-3">
      <div className="flex items-center justify-between gap-3">
        <div className={`h-6 md:h-8 ${titleWidthClass} rounded bg-gray-700/60 animate-pulse`} />
        <div className="h-4 md:h-5 w-12 rounded bg-gray-700/50 animate-pulse" />
      </div>
      <div className="flex overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex min-w-max gap-3 py-2">
          {Array.from({ length: cardCount }).map((_, index) => (
            <SkeletonCard key={`skeleton-card-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonRow;
