import React from 'react';
import {Link} from 'react-scroll';

class Hero extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <section id="hero-section">
        <h1 className='hero-title'>FELIX SUN</h1>
        <h2 className='hero-text'>Computer Engineer, Web Developer, Photographer</h2>
      </section>
    );
  }
}

export default Hero;