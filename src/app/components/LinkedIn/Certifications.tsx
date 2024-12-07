export default function Certifications({
    certifications,
  }: {
    certifications: Array<{ id: number; name: string; organization: string; issuedDate: string }>;
  }) {
    return (
      <div>
        <h3>Certifications</h3>
        {certifications.map((cert) => (
          <div key={cert.id}>
            <h4>{cert.name}</h4>
            <p>{cert.organization}</p>
            <p>{cert.issuedDate}</p>
          </div>
        ))}
      </div>
    );
  }
  