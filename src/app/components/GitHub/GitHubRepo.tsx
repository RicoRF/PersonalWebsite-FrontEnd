export default function GitHubRepo({ repo }: { repo: any }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", margin: "8px 0" }}>
      <h2>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h2>
      <p>
        <strong>Description:</strong> {repo.description || "No description available"}
      </p>
      <p>
        <strong>Language:</strong> {repo.language || "Not specified"}
      </p>
      <p>
        <strong>Owner:</strong> 
        <a href={repo.owner.html_url} target="_blank" rel="noopener noreferrer">
          {repo.owner.login}
        </a>
      </p>
      <p>
        <strong>Last Updated:</strong> {new Date(repo.updated_at).toLocaleDateString()}
      </p>
      <p>
        <strong>Stars:</strong> {repo.stargazers_count} | <strong>Forks:</strong> {repo.forks_count}
      </p>
    </div>
  );
}
