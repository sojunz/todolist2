import React from 'react';
import './Home.css';
import studentImage from './images/student.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Your Way</h1>
      <p className="home-description">
        This is a sample application to demonstrate routing and styling in React.
      </p>
      <img src={studentImage} alt="Student" className="home-image" />
      <p className="quote">
        "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence."
        <br />- Helen Keller
      </p>
    </div>
  );
};

export default Home;