"use client";

import { useEffect, useState } from "react";
import LinkedInProfile from "@/app/components/LinkedIn/LinkedInProfile";
import Experience from "@/app/components/LinkedIn/Experience";

export default function LinkedInPage() {
  const [data, setData] = useState<{
    profile: { name: string; headline: string; location: string };
    experiences: Array<{ id: number; title: string; company: string; duration: string }>;
  } | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLinkedInData = async () => {
      try {
        const response = await fetch("http://localhost:8000/linkedin");
        if (!response.ok) throw new Error("Failed to fetch LinkedIn data");

        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLinkedInData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>LinkedIn Data</h1>
      {data && (
        <>
          <LinkedInProfile profile={data.profile} />
          <Experience experiences={data.experiences} />
        </>
      )}
    </div>
  );
}
