// src/components/SkeletonCard.jsx
import React from 'react';

function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden animate-pulse">
      <div className="bg-gray-300 dark:bg-slate-700 h-64 w-full"></div>
      <div className="p-6">
        <div className="bg-gray-300 dark:bg-slate-700 h-4 w-1/4 mb-2 rounded"></div>
        <div className="bg-gray-300 dark:bg-slate-700 h-8 w-3/4 mb-4 rounded"></div>
        <div className="bg-gray-300 dark:bg-slate-700 h-6 w-1/2 rounded"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;