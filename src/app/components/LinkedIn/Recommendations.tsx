export default function Recommendations({
    recommendations,
  }: {
    recommendations: Array<{ id: number; author: string; text: string }>;
  }) {
    return (
      <div>
        <h3>Recommendations</h3>
        {recommendations.map((rec) => (
          <div key={rec.id}>
            <h4>{rec.author}</h4>
            <p>{rec.text}</p>
          </div>
        ))}
      </div>
    );
  }
  