import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-24 shrink-0 md:w-40 aspect-[2/3] rounded-2xl bg-gradient-to-br from-gray-700/60 via-gray-600/40 to-gray-700/60 animate-pulse" />
  );
};

export default SkeletonCard;
