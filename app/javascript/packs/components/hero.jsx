import React from 'react';

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="hero-section">
        {/*<ul className="hero-info hero-text">*/}
          {/*<li className="blue-color">Web Developer</li>*/}
          {/*<li className="purple-color">Photographer</li>*/}
          {/*<li className="green-color">Computer</li>*/}
          {/*<li className="green-color">Engineering</li>*/}
          {/*<li className="green-color">Student</li>*/}
        {/*</ul>*/}
        {/*<div className="picture-frame">*/}
          <img src='hero.jpg' className="hero-img"/>
          {/*<h1 className="hero-title">Felix Sun</h1>*/}
        {/*</div>*/}
        <ul className="hero-links hero-text">
          <li>About Me</li>
          <li>Projects</li>
          <li>Work & Education</li>
          <li>Contact</li>
        </ul>
      </section>
    );
  }
}

export default Hero;