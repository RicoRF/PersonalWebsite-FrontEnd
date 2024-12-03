interface ExperienceProps {
    experience: {
      title: string;
      company: string;
      description: string;
      start: string;
      end: string;
    };
  }
  
  export default function Experience({ experience }: ExperienceProps) {
    return (
      <div style={{ borderBottom: "1px solid #ddd", marginBottom: "10px", paddingBottom: "10px" }}>
        <h4>{experience.title}</h4>
        <p>
          <strong>{experience.company}</strong>
        </p>
        <p>{experience.description}</p>
        <p>
          {experience.start} - {experience.end}
        </p>
      </div>
    );
  }
  