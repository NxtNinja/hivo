"use client";

import { Button } from "@/components/ui/button";
import { account } from "@/lib/appwrite";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await account.deleteSession("current");
      toast.success("Logged out successfully");
      router.push("/login"); // redirect to login page
    } catch (error: any) {
      console.error("Logout failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>

      <Button onClick={handleLogout} disabled={loading}>
        {loading ? "Logging out..." : "Logout"}
      </Button>
    </main>
  );
}
