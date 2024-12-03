import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <nav>
        <ul>
          <li>
            <Link href="/github">GitHub</Link>
          </li>
          <li>
            <Link href="/linkedin">LinkedIn</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
