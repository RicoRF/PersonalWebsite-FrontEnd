interface GitHubRepoProps {
    repo: {
      id: number;
      name: string;
      description: string;
      url: string;
    };
  }
  
  const GitHubRepo: React.FC<GitHubRepoProps> = ({ repo }) => {
    return (
      <div>
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
        <a href={repo.url} target="_blank" rel="noopener noreferrer">
          View Repository
        </a>
      </div>
    );
  };
  
  export default GitHubRepo;
  