import React from 'react';
import {Element} from 'react-scroll';

const About = () => {
  return (
    <Element name="about">
      <section id="about-section">
        <div className="container">
          <h2 className="section-title">About  Me</h2>
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
                <h5>4A</h5>
              </li>
              <li className="about-list-item">
                <h4>Co-op Terms</h4>
                <h5>5</h5>
              </li>
            </ul>
            <ul className="about-list">
              <li className="about-list-item">
                <h4>Web Developer</h4>
                <h5>4+ years</h5>
              </li>
              <li className="about-list-item">
                <h4>Last Co-op</h4>
                <h5>Software Engineer <br/> at AMEX</h5>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default About;