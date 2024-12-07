import React from "react";

type GitHubProfileProps = {
  profile: {
    login: string;
    avatar_url: string;
    html_url: string;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
    name: string | null;
    blog: string | null;
    location: string | null;
  };
};

const GitHubProfile: React.FC<GitHubProfileProps> = ({ profile }) => {
  return (
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", maxWidth: "400px", margin: "auto" }}>
      <img
        src={profile.avatar_url}
        alt={`${profile.login}'s avatar`}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h2>{profile.name ? profile.name : profile.login}</h2>
      <p>{profile.bio ? profile.bio : "No bio available"}</p>
      <p>Location: {profile.location ? profile.location : "Not provided"}</p>
      <p>Blog: {profile.blog ? <a href={profile.blog} target="_blank" rel="noopener noreferrer">{profile.blog}</a> : "Not provided"}</p>
      <p>
        Public Repos: {profile.public_repos}
      </p>
      <p>
        Followers: {profile.followers} | Following: {profile.following}
      </p>
      <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
    </div>
  );
};

export default GitHubProfile;
