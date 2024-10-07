import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';

function App() {
  return (
    <div>
      <ProfileCard
        imageSrc={`${process.env.PUBLIC_URL}/th.jpeg`}
        name="Harini Kumar"
        location="Karur, India"
        description="A passionate developer focused on building innovative solutions for real-world problems."
        skills={['React', 'JavaScript', 'CSS', 'Node.js']}
        linkedinUrl="https://www.linkedin.com/in/harini-k-748389259/"
        githubUrl="https://github.com/har-kumar"
      />
    </div>
  );
}

export default App;
