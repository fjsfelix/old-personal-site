import React from 'react';

const Links = () => {
  return(
    <div id="links">
      <div className="side-link side-menu"><i className="fa fa-bars" aria-hidden="true"></i></div>
      <div id="links-container">
        <a href="https://www.instagram.com/_felixsun/" className="side-link" target="_blank"><i className="fa fa-paper-plane" aria-hidden="true"></i></a>
        <a href="https://github.com/fjsfelix" className="side-link" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/felixsunlink" className="side-link" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
        <a href="https://www.instagram.com/_felixsun/" className="side-link" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="https://www.instagram.com/_felixsun/" className="side-link" target="_blank"><i className="fa fa-file-pdf-o" aria-hidden="true"></i></a>
      </div>
    </div>
  );
}

export default Links;