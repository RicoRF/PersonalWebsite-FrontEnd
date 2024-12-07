export default function Education({
    education,
  }: {
    education: Array<{ id: number; schoolName: string; degree: string; duration: string }>;
  }) {
    return (
      <div>
        <h3>Education</h3>
        {education.map((edu) => (
          <div key={edu.id}>
            <h4>{edu.schoolName}</h4>
            <p>{edu.degree}</p>
            <p>{edu.duration}</p>
          </div>
        ))}
      </div>
    );
  }
  