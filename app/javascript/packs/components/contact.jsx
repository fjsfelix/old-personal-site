import React from 'react';
import {Element} from 'react-scroll';
const Contact = () => {
  return(
    <Element name="contact">
      <section id="contact-section">
        <div className="container links-container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-container">
            <a href="mailto:jr2sun@uwaterloo.ca" className="contact-link"><i className="fa fa-paper-plane" aria-hidden="true"></i> jr2sun@uwaterloo.ca</a>
            <a href="https://github.com/fjsfelix" className="contact-link" target="_blank"><i className="fa fa-github" aria-hidden="true"></i> github.com/fjsfelix</a>
            <a href="https://www.linkedin.com/in/felixsunlink" className="contact-link" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i> linkedin.com/in/felixsunlink</a>
            <a href="https://www.instagram.com/_felixsun/" className="contact-link" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i> www.instagram.com/_felixsun</a>
            <a href="felix_resume_web.pdf" className="contact-link" target="_blank"><i className="fa fa-file-pdf-o" aria-hidden="true"></i> Download Resume</a>
          </div>
        </div>
        <footer>
          <div className="container">
            <span><i className="fa fa-copyright" aria-hidden="true"></i> Felix Sun 2017</span>
          </div>
        </footer>
      </section>
    </Element>
  );
}

export default Contact;