interface GitHubProfileProps {
    profile: {
      username: string;
      bio: string;
      avatar_url: string;
    };
  }
  
  const GitHubProfile: React.FC<GitHubProfileProps> = ({ profile }) => {
    return (
      <div>
        <img src={profile.avatar_url} alt={`${profile.username}'s avatar`} width={100} />
        <h2>{profile.username}</h2>
        <p>{profile.bio}</p>
      </div>
    );
  };
  
  export default GitHubProfile;
  