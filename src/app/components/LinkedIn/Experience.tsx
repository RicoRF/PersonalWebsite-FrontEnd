interface ExperienceProps {
    experiences: Array<{
      id: number;
      title: string;
      company: string;
      duration: string;
    }>;
  }
  
  const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
    return (
      <div>
        <h3>Experience</h3>
        {experiences.map((experience) => (
          <div key={experience.id}>
            <h4>{experience.title}</h4>
            <p>{experience.company}</p>
            <p>{experience.duration}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Experience;
  