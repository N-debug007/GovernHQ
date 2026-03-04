"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    // Supabase will store the session from the URL automatically.
    supabase.auth.getSession().finally(() => {
      router.replace("/");
    });
  }, [router]);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-muted-foreground">Signing you in...</div>
    </div>
  );
}
