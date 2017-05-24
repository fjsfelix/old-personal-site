import React from 'react';
import ProjectItems from './projectItems';
import {Element} from 'react-scroll';


const Projects = () => {

  var deathTags = ["Ruby on Rails", "React"];
  var marvelTags = ["Game", "Ruby on Rails", "AngularJS"];
 return (
  <Element name="projects">
    <section id="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-container">
          <ProjectItems
            image="death.png"
            name="Death Timeline V3.0"
            link="http://deathtimeline.com"
            description="A timeline of all deaths that have occurred on the HBO TV show Game of Thrones"
            tags={deathTags}/>
          <ProjectItems
            image="marvel.png"
            name="Marvel or DC"
            link="https://marvelordc.herokuapp.com"
            description="Objective of this game is to answer whether the character shown is from Marvel or DC"
            tags={marvelTags}/>
          <ProjectItems
            image="million.png"
            name="Marvel or DC"
            link="https://marvelordc.herokuapp.com"
            tags={marvelTags}/>
          <ProjectItems
            image="marvel.png"
            name="Marvel or DC"
            link="https://marvelordc.herokuapp.com"
            tags={marvelTags}/>
        </div>
      </div>
    </section>
  </Element>
 );
}

export default Projects;