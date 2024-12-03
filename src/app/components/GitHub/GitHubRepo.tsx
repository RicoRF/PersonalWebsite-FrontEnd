interface RepoProps {
    repo: {
      id: number;
      name: string;
      html_url: string;
      description: string;
      language: string;
    };
  }
  
  export default function GitHubRepo({ repo }: RepoProps) {
    return (
      <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
        <h3>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </h3>
        <p>{repo.description}</p>
        <p>
          <strong>Language:</strong> {repo.language}
        </p>
      </div>
    );
  }
  