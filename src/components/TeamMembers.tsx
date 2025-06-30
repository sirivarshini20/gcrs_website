import React from "react";

interface TeamMemberProps {
  name: string;
  position: string;
  imageSrc: string;
  linkedinUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, imageSrc, linkedinUrl }) => {
  return (
    <div className="team-member">
      <div className="image-container">
        <img className="team-member-image" src={imageSrc} alt={name} />
        <div className="overlay">
          <p className="name">{name}</p>
          <p>{position}</p>
        </div>
        <a href={linkedinUrl} className="linkedin-icon" target="_blank" rel="noopener noreferrer">
          <img
            src={require("../../src/assets/gcrs_images/linkedin.svg").default}
            alt="LinkedIn Profile"
          />
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
