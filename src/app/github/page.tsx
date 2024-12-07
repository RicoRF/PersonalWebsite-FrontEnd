"use client";

import { useEffect, useState } from "react";
import GitHubProfile from "@/app/components/GitHub/GitHubProfile";
import GitHubRepo from "@/app/components/GitHub/GitHubRepo";

export default function GitHubPage() {
  const [profile, setProfile] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const profileResponse = await fetch("https://api.github.com/users/RicoRF");
        const reposResponse = await fetch("https://api.github.com/users/RicoRF/repos");

        if (!profileResponse.ok || !reposResponse.ok)
          throw new Error("Failed to fetch GitHub data");

        const profileData = await profileResponse.json();
        const reposData = await reposResponse.json();

        setProfile(profileData);
        setRepos(reposData);
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
      <h1>GitHub Profile and Repositories</h1>
      {profile && <GitHubProfile profile={profile} />}
      <h2 style={{ marginTop: "20px" }}>Repositories</h2>
      {repos.length > 0 ? (
        repos.map((repo) => <GitHubRepo key={repo.id} repo={repo} />)
      ) : (
        <p>No repositories found.</p>
      )}
    </div>
  );
}
