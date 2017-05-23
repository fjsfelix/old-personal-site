import React from 'react';

const About = () => {
  return (
    <section id="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div id="about-list-container">
          <ul className="about-list">
            <li className="about-list-item">
              <h4>Student at</h4>
              <h5>University of Waterloo</h5>
            </li>
            <li className="about-list-item">
              <h4>Program</h4>
              <h5>Computer Engineering</h5>
            </li>
          </ul>
          <ul className="about-list">
            <li className="about-list-item">
              <h4>Term</h4>
              <h5>3A</h5>
            </li>
            <li className="about-list-item">
              <h4>Co-op Terms</h4>
              <h5>4</h5>
            </li>
          </ul>
          <ul className="about-list">
            <li className="about-list-item">
              <h4>Web Developer</h4>
              <h5>3.5+ years</h5>
            </li>
            <li className="about-list-item">
              <h4>Last Co-op</h4>
              <h5>Web Developer <br/> at TextNow</h5>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;