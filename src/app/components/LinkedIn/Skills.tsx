export default function Skills({ skills }: { skills: string[] }) {
    return (
      <div>
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
  