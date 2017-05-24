import React from 'react';
import {Link} from 'react-scroll';

class Hero extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <section id="hero-section">
          <img src='hero.jpg' className="hero-img"/>
        <ul className="hero-links hero-text">
          <li><Link to="about" smooth={true} duration={500}>About Me</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="jobs" smooth={true} duration={500}>Work & Education</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </section>
    );
  }
}

export default Hero;