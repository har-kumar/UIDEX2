import React from 'react';
import styled from 'styled-components';

// Styled-components for styling
const CardContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  padding: 20px;
  max-width: 400px;
  margin: auto;
  text-align: center;
  color: white;
  position: relative;
  backdrop-filter: blur(10px);
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 1.8rem;
`;

const Location = styled.p`
  font-size: 1rem;
  margin: 5px 0;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 15px 0;
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
`;

const SkillTag = styled.span`
  background: #007bff;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const LinksContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Link = styled.a`
  color: #007bff;
  font-size: 1.2rem;
  text-decoration: none;
`;

const ProfileCard = ({ imageSrc, name, location, description, skills, linkedinUrl, githubUrl }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/bgImage.jpg'})`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CardContainer>
        <ProfileImage src={imageSrc} alt={`${name}'s Profile`} />
        <Name>{name}</Name>
        <Location>{location}</Location>
        <Description>{description}</Description>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillTag key={index}>{skill}</SkillTag>
          ))}
        </SkillsContainer>
        <LinksContainer>
          <Link href={linkedinUrl} target="_blank">LinkedIn</Link>
          <Link href={githubUrl} target="_blank">GitHub</Link>
        </LinksContainer>
      </CardContainer>
    </div>
  );
};

export default ProfileCard;
