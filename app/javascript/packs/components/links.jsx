import React from 'react';
import {Link} from 'react-scroll';

class Links extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: false,
      menu: "menu hidden"
    }
  }

  toggleMenu() {
    if (this.state.shown === false) {
      this.setState({
        shown: true,
        menu: "menu"
      });
    } else {
      this.setState({
        shown: false,
        menu: "menu hidden"
      });
    }
  }

  render() {
    return (
      <div id="links">
        <div className="sideMenu-container">
          <div className="side-link side-menu" onClick={this.toggleMenu.bind(this)}><i className="fa fa-bars" aria-hidden="true"></i></div>
          <div id="links-container">
            <a href="mailto:jr2sun@uwaterloo.ca" className="side-link"><i className="fa fa-paper-plane"
                                                                          aria-hidden="true"></i></a>
            <a href="https://github.com/fjsfelix" className="side-link" target="_blank"><i className="fa fa-github"
                                                                                           aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/felixsunlink" className="side-link" target="_blank"><i
              className="fa fa-linkedin-square" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/felixsunphoto/" className="side-link" target="_blank"><i
              className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="felix-resume.pdf" className="side-link" target="_blank"><i className="fa fa-file-pdf-o"
                                                                                    aria-hidden="true"></i></a>
          </div>
        </div>
        <div className={this.state.menu}>
          <ul>
            <li><Link to="about" smooth={true} duration={500} onClick={this.toggleMenu.bind(this)}>About Me</Link></li>
            <li><Link to="projects" smooth={true} duration={500} onClick={this.toggleMenu.bind(this)}>Projects</Link></li>
            <li><Link to="jobs" smooth={true} duration={500} onClick={this.toggleMenu.bind(this)}>Work & Education</Link></li>
            <li><Link to="contact" smooth={true} duration={500} onClick={this.toggleMenu.bind(this)}>Contact</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Links;