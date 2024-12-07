export default function Languages({ languages }: { languages: string[] }) {
    return (
      <div>
        <h3>Languages</h3>
        <ul>
          {languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    );
  }
  