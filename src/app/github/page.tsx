"use client";

import { useEffect, useState } from "react";
import GitHubProfile from "@/app/components/GitHub/GitHubProfile";
import GitHubRepo from "@/app/components/GitHub/GitHubRepo";

export default function GitHubPage() {
  const [data, setData] = useState<{
    profile: { username: string; bio: string; avatar_url: string };
    repos: Array<{ id: number; name: string; description: string; url: string }>;
  } | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch("http://localhost:8000/github");
        if (!response.ok) throw new Error("Failed to fetch GitHub data");

        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>GitHub Data</h1>
      {data && (
        <>
          <GitHubProfile profile={data.profile} />
          {data.repos.map((repo) => (
            <GitHubRepo key={repo.id} repo={repo} />
          ))}
        </>
      )}
    </div>
  );
}
