import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
              <li style={{ marginRight: "10px" }}>
                <a href="/">Home</a>
              </li>
              <li style={{ marginRight: "10px" }}>
                <a href="/github">GitHub</a>
              </li>
              <li>
                <a href="/linkedin">LinkedIn</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
