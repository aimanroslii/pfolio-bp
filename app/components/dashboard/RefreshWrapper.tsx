"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function RefreshWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    router.refresh(); // forces server component to re-run
  }, []);

  return <>{children}</>;
}
