"use client";

import { Suspense } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function LazySection({ children, fallback }: LazySectionProps) {
  return (
    <Suspense fallback={fallback || <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-32 rounded-lg" />}>
      {children}
    </Suspense>
  );
}
