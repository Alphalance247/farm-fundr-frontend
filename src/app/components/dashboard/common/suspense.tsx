"use client";

import { Suspense } from "react";

export function WithSuspense({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}
