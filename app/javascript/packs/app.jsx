import React from 'react';
import ReactDOM from 'react-dom';

import Hero from './components/hero';
import About from './components/about';
import Qualification from './components/qualification';
import Nav from './components/nav';
import Projects from './components/projects';
import Jobs from './components/jobs';
import Links from './components/links';
import Contact from './components/contact'


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <div id="overall">
        <div src="bg.jpg" className="bg-photo"></div>
        <Links/>
        <Hero/>
        <About/>
        <Projects/>
        <Jobs/>
        <Contact/>
      </div>

    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.body.appendChild(document.createElement('div')),
  )
})
