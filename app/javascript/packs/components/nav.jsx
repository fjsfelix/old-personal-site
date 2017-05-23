import React from 'react';


class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <div className="container">
          <ul className="nav-bar">
            {/*<li className="nav-link">About Me</li>*/}
            {/*<li className="nav-link">Qualifications</li>*/}
            {/*<li className="nav-link">Projects</li>*/}
            {/*<li className="nav-link">Work & Education</li>*/}
            {/*<li className="nav-link">Contact</li>*/}
            <li className="nav-link"><i className="fa fa-globe" aria-hidden="true"></i> WEB DEVELOPER</li>
            <li className="nav-link"><i className="fa fa-microchip" aria-hidden="true"></i> COMPUTER ENGINEERING STUDENT</li>
            <li className="nav-link"><i className="fa fa-camera-retro" aria-hidden="true"></i> PHOTOGRAPHER</li>
          </ul>
        </div>
        <div className="nav-line"></div>
      </nav>
    )
  }
}

export default Nav;