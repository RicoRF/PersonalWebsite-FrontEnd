import Experience from "./Experience";

const mockLinkedInData = {
  person: {
    name: "Federico F.",
    headline: "Full-Stack Developer | React, TypeScript, Python",
    location: "Ottawa, Canada",
    photoUrl: "https://via.placeholder.com/150",
  },
  experiences: [
    {
      title: "WordPress Developer",
      company: "Hydrostor",
      description: "Improved website performance and implemented updates.",
      start: "Jul 2024",
      end: "Present",
    },
    {
      title: "Full Stack Developer",
      company: "Spandrel Interactive",
      description: "Developed web applications and optimized front-end design.",
      start: "Jun 2024",
      end: "Aug 2024",
    },
  ],
};

export default function LinkedInProfile() {
  const { person, experiences } = mockLinkedInData;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={person.photoUrl}
          alt={person.name}
          style={{ borderRadius: "50%", width: "100px", marginRight: "10px" }}
        />
        <div>
          <h2>{person.name}</h2>
          <p>{person.headline}</p>
          <p>{person.location}</p>
        </div>
      </div>
      <h3>Experience</h3>
      {experiences.map((exp, index) => (
        <Experience key={index} experience={exp} />
      ))}
    </div>
  );
}
