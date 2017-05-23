import React from 'react'
import ReactDOM from 'react-dom'

import Hero from './components/hero';
import About from './components/about';
import Qualification from './components/qualification';
import Nav from './components/nav';
import Projects from './components/projects';
import Jobs from './components/jobs';
import Links from './components/links';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <div id="overall">
        <Links/>
        <Hero/>
        <Nav/>
        <About/>
        {/*<Qualification/>*/}
        <Projects/>
        <Jobs/>
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
