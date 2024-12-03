import GitHubRepo from "./GitHubRepo";

const mockRepos = [
  {
    id: 1,
    name: "AwesomeProject",
    html_url: "https://github.com/awesome-project",
    description: "An awesome project built with React.",
    language: "TypeScript",
  },
  {
    id: 2,
    name: "AnotherProject",
    html_url: "https://github.com/another-project",
    description: "A cool backend project.",
    language: "Python",
  },
];

export default function GitHubProfile() {
  return (
    <div>
      {mockRepos.map((repo) => (
        <GitHubRepo key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
