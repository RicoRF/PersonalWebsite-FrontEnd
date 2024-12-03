interface LinkedInProfileProps {
    profile: {
      name: string;
      headline: string;
      location: string;
    };
  }
  
  const LinkedInProfile: React.FC<LinkedInProfileProps> = ({ profile }) => {
    return (
      <div>
        <h2>{profile.name}</h2>
        <p>{profile.headline}</p>
        <p>{profile.location}</p>
      </div>
    );
  };
  
  export default LinkedInProfile;
  